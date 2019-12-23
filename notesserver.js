const express = require("express");
const { MongoClient, ObjectID } = require("mongodb");
const redis = require("redis");
const app = express();
const port = process.env.PORT || 3001;
const cookieParser = require("cookie-parser");
const client = redis.createClient();
const axios = require("axios");

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "homework3";

// Create a new MongoClient
const server = new MongoClient(url); // will connect to the mongodb server

// Use connect method to connect to the Server
server.connect(err => {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    console.log("Connected successfully to server");
    const db = server.db(dbName);

    app.use(cookieParser());

    app.use(express.json());
    //app.use(express.urlencoded({ extended: true }));
    
    app.use((req, res, next) => {
        console.log(req.cookies.username);
        if (!req.cookies.username || !req.cookies.password || req.cookies.loggedin==="false") {
            res.status(403);
            return res.send("You need access to hit this endpoint");
        }

        const body = {
            username: req.cookies.username,
            password: req.cookies.password,
            loggedin: req.cookies.loggedin
        };

        const key = req.cookies.username + "_" + req.cookies.password + "_" + req.cookies.loggedin;
        client.get(key, (err, cachedValue) => {
            //console.log(err);
            console.log("cached value is", cachedValue);
            if (cachedValue !== null) {
                console.log("cache hit");
                if (cachedValue === "true") {
                    return next();
                } else {
                    res.status(403);
                    return res.send("You need access to this endpoint!");
                }
            } else {
                console.log("cache miss");
                // move rest of code in here
                axios
                    .post("http://localhost:3002/authserver/", body)
                    .then(res => {
                        if (res.data.valid) {
                            client.set(key, true);
                            return next();
                        } else {
                            client.set(key, false);
                            res.status(403);
                            return res.send(
                                "You need access to this endpoint!"
                            );
                        }
                    })
                    .catch(console.log);
            }
        });
    });

    //get all notes from the database
    app.get("/notes/allNotes", (req, res) => {
        db.collection("notes") // this returns a promise
            .find({}) // gets all the notes
            .sort({ date: -1 })
            .toArray() // convert all the data into one array
            .then(docs => {
                res.send(docs);
            })
            .catch(e => {
                res.send("Error");
            });
    });

    //to add a note
    app.get("/notes/addNote", (req, res) => {
        const description = req.query.newNote;
        //const username = req.cookies.username;

        //insert default date

        if (description) {
            // db.collection("users")
            //     .findOne({ username: "angelosolitario" })
            //     .then(user => {
            //         console.log(user.notes);
            //         user.notes.push({ description, date: new Date() });
            //         db.collection("notes")
            //             .insertOne({
            //                 user,
            //                 description,
            //                 date: new Date()
            //             })
            //              .then(note => {
            //                  user.notes.shift(note)
            //              })
            //             .catch(e => {
            //                 console.log(e);
            //             });
            //     })
            //     .catch(e => {
            //         console.log(e);
            //     });
            db.collection("notes").insertOne({ description, date: new Date() })
            .then(()=>{
                return res.status(200)
            })
            .catch(console.log)
        }
    });

    //to delete anote
    app.delete("/notes/deleteNote/:id", (req, res) => {
        db.collection("notes")
            .findOneAndDelete({
                _id: ObjectID.createFromHexString(req.params.id)
            })
            .then(note => {
                console.log("deleted item: ", note);
                res.send(note);
            });
    });

    //to edit a note
    app.get("/notes/update", (req, res) => {
        const updater = {
            $set: {
                description: req.query.newNote
            }
        };
        db.collection("notes")
            .findOneAndUpdate(
                { _id: ObjectID.createFromHexString(req.query.id) },
                updater
            )
            .then(note => {
                console.log("update item: ", note);
                res.send(note);
            });
    });

    app.get("/notes/*", (req, res) => {
        //console.log(req.cookies)
        res.send("ads");
    });

    app.listen(port, () =>
        console.log(`Example app listening on port ${port}!`)
    );
});

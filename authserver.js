const express = require("express");
const { MongoClient} = require("mongodb");
const app = express();
const port = process.env.PORT || 3002;
app.use(express.json());

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

    let counter = 0;

    app.post("/authserver/addUser", (req, res, next) => {
        const { username, password } = req.body;

        if (!username || !password)
            return res.status(400).json({ msg: "All Fields are required" });

        db.collection("users")
            .findOne({ username })
            .then(user => {
                if (user) {
                    return res
                        .status(400)
                        .json({ msg: "username already exists" });
                }

                db.collection("users")
                    .insertOne({
                        username,
                        password,
                        notes: [],
                        date: new Date()
                    })
                    .then(() => {
                        return res.status(200).json({ msg: "account created" });
                    })
                    .catch(e => {
                        console.log(e);
                        return res
                            .status(500)
                            .json({ msg: "error creating user" });
                    });
            })
            .catch(e => {
                console.log(e);
            });
    });
    
    app.post("/authserver/login", (req, res) => {
        counter++;
        console.log("count", counter);

        const { username, password} = req.body;
        let valid = false;

        db.collection("users")
            .findOne({ username })
            .then(user => {
              console.log(user.password)
                if (user.password === password) {
                    valid = true;
                    res.send({valid,counter})
                } else {
                    valid = false;
                    res.send({valid})
                    console.log("Wrong credentials");
                }
            });
    });

    app.post("/authserver/*", (req, res) => {
        counter++;
        console.log("count", counter);

        const { username, password,loggedin } = req.body;
        let valid = false;

        db.collection("users")
            .findOne({ username })
            .then(user => {
              console.log(user.password)
                if (user.password === password && loggedin==="true") {
                    valid = true;
                    res.send({valid,counter})
                } else {
                    valid = false;
                    res.send({valid})
                    console.log("Wrong credentials");
                }
            });
    });

    app.listen(port, () => console.log(`Example app listening on port ${port}!`));

});


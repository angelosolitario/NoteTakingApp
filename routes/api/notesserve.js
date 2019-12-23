const express = require("express");
const app = express();
const {ObjectID} = require("mongodb")
const port = process.env.PORT || 3001
app.use(express.json());

const Note = require("../../models/notes");

/**
 * @route GET api/notes
 * @desc get all notes
 * @access Public
 */
app.get("/", (req, res) => {
  Note.find({})
    .sort({ date: -1 })
    .then(items => res.jsons(items));
});

/**
 * @route POST api/notes
 * @desc add a note
 * @access Public
 */
app.post("/", (req, res) => {
  const newNote = new Note({
    text: req.body.text,
    author: req.body.author
  });

  newNote.save().then(note => res.json(note));
});


/**
 * @route DELETE api/notes/:id
 * @desc delete a note
 * @access Public
 */
app.delete("/:id", (req, res) => {
  Note.findById(req.params.id)
  .then(note=> note.remove.then(()=> res.json({success: true})))
  .catch(err => res.status(404).json({success:false}));
})


/**
 * @route GET notes/update
 * @desc edit a note
 * @access Public
 */
app.get("/update", (req, res) => {
  const updater = {
      $set: {
          description: req.query.newNote
      }
  };
  Note.findOneAndUpdate(
          { _id: ObjectID.createFromHexString(req.query.id) },
          updater
      )
      .then(note => {
          console.log("update item: ", note);
          res.send(note);
      });
});


app.listen(port, () => console.log(`Note Server listening on port ${port}!`));

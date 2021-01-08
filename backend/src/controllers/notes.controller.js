const Note = require("../models/Note");

const notesCtrl = {};

notesCtrl.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

notesCtrl.getNote = async (req, res) => {
  const { id } = req.params;
  const note = await Note.findById(id);
  res.json(note);
};

notesCtrl.createNote = (req, res) => {
  const { title, content, date, author } = req.body;
  const newNote = new Note({
    title: title,
    content: content,
    date: date,
    author: author,
  });
  console.log(newNote);
  newNote.save();
  res.status(201).json({
    message: "Note Saved",
  });
};
notesCtrl.updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, author } = req.body;


    const updatedNote = await Note.findOneAndUpdate(
      { _id: id },
      {
        title,
        content,
        author,
      }
    );

    res.json({ message: "Note Updated", data: updatedNote });
  } catch (error) {
    console.log(error);
  }
};
notesCtrl.deleteNote = async (req, res) => {
  const { id } = req.params;
  const note = await Note.findByIdAndDelete(id);
  res.status(204).json({
    message: "Note Deleted",
  });
};

module.exports = notesCtrl;

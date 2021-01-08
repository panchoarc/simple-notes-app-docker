const { Schema, model } = require("mongoose");

const notesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    date: {
        type: Date,
        default: Date.now()
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Note", notesSchema);

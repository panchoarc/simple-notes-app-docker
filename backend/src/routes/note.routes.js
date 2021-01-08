const { Router } = require("express");
const {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
} = require("../controllers/notes.controller");
const router = Router();

router.get("/", getNotes);
router.get("/:id", getNote);

router.post("/", createNote);
router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

module.exports = router;

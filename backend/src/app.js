const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const notesRoutes = require("./routes/note.routes");

const app = express();

//settings
app.set("port", process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/users", userRoutes);

app.use("/api/notes",notesRoutes);
  

module.exports = app;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateNote from "./Components/CreateNote";
import CreateUser from "./Components/CreateUser";
import Navigation from "./Components/Navigation";
import NotesList from "./Components/NotesList";

function App() {
  return (
    <Router>
      <Navigation />

      <div className=" container p-4">
        <Route exact path="/" component={NotesList} />
        <Route exact path="/edit/:id" component={CreateNote} />
        <Route exact path="/create" component={CreateNote} />
        <Route exact path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;

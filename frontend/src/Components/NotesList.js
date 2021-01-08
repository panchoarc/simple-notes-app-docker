import axios from "axios";
import React, { Component } from "react";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

export default class NotesList extends Component {
  URI = "http://localhost:5000/api";
  state = {
    notes: [],
  };

  getNotes = async () => {
    const res = await axios.get(`${this.URI}/notes`);
    this.setState({ notes: res.data });
  };

  async componentDidMount() {
    
    this.getNotes();
  }

  deleteNote = async (id) => {
    await axios.delete(`${this.URI}/notes/${id}`);
    this.getNotes();
  };
  render() {
    return (
      <div className="row">
        {this.state.notes.map((note) => (
          <div className="col-md-4 p-2" key={note._id}>
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <h5>{note.title}</h5>

                <Link to={`edit/${note._id}`} className="btn btn-secondary">
                  Edit
                </Link>
              </div>

              <div className="card-body">
                <p>{note.content}</p>
                <p>{note.author}</p>
                <p>{format(note.date)}</p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-danger"
                  onClick={() => this.deleteNote(note._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

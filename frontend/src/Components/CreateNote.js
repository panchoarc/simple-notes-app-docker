import axios from "axios";
import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateNote extends Component {
  URI = "http://localhost:5000/api";

  state = {
    users: [],
    userSelected: "",
    title: "",
    content: "",
    author: "",
    date: new Date(),
    editing: false,
    _id: "",
  };

  async componentDidMount() {
    const res = await axios.get(`${this.URI}/users`);
    console.log(res);
    this.setState({ users: res.data, userSelected: this.state.users[0] });

    if (this.props.match.params.id) {
      const res = await axios.get(`${this.URI}/notes/${this.props.match.params.id}`);
      this.setState({
        editing: true,
        _id: this.props.match.params.id,
        title: res.data.title,
        content: res.data.content,
        date: new Date(res.data.date),
        userSelected: res.data.author,
      });
    }
  }
  onInputChange = (event) => {
    console.log(event.target.name, event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };
  onChangeDate = (date) => {
    this.setState({ date: date });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const newNote = {
      title: this.state.title,
      content: this.state.content,
      date: this.state.date,
      author: this.state.userSelected,
    };

    if (this.state.editing) {
      await axios.put(`${this.URI}/notes/${this.state._id}`, newNote);
    } else {
      await axios.post(`${this.URI}/notes`, newNote);
    }

    window.location.href = "/";
  };
  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <div className="card card-body">
          <h4>Create a Note</h4>

          <div className="form-group">
            <select
              value={this.state.userSelected}
              className="form-control"
              name="userSelected"
              onChange={this.onInputChange}
            >
              {this.state.users.map((user) => (
                <option value={user.username} key={user._id}>
                  {user.username}
                </option>
              ))}
            </select>
          </div>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                value={this.state.title}
                type="text"
                className="form-control"
                placeholder="Titulo"
                name="title"
                required
                onChange={this.onInputChange}
              />
            </div>

            <div className="form-group">
              <textarea
              value={this.state.content}
                className="form-control"
                placeholder="Content"
                name="content"
                required
                onChange={this.onInputChange}
              />
            </div>

            <div className="form-group">
              <DatePicker
                className="form-control"
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}

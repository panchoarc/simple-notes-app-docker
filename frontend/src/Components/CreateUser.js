import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  URI = "http://localhost:5000/api/users";
  state = {
    users: [],
    username: "",
  };

  getUsers = async () => {
    const res = await axios.get(this.URI);
    this.setState({ users: res.data });
  };
  async componentDidMount() {
    this.getUsers();

    console.log(this.state.users);
  }

  onChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(this.URI, {
      username: this.state.username,
    });
    this.getUsers();
    this.setState({ username: "" });
  };
  deleteUser = async (id) => {
    console.log(id);
    await axios.delete(`${this.URI}/${id}`);
    this.getUsers();
    this.setState({ username: "" });
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card card-body">
            <h3>Create New User</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.username}
                  className="form-control"
                  onChange={this.onChangeUsername}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            {this.state.users.map((user) => (
              <li
                onDoubleClick={() => this.deleteUser(user._id)}
                className="list-group-item list-group-item-action"
                key={user._id}
              >
                {user.username}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

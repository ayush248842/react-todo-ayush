import React, { Component } from "react";
import { PropTypes } from "prop-types";

export class AddTodo extends Component {
  state = {
    title: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <div style={card}>
        <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
          <input
            type="text"
            name="title"
            style={searchStyle}
            placeholder="   Add Todo ..."
            value={this.state.title}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Submit"
            className="btn"
            style={submitStyle}
          />
        </form>
      </div>
    );
  }
}

//PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

const card = {
//   border: "2px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "120px",
  padding: "35px",
  margin: "20px 0 20px 0",
};

const searchStyle = {
  flex: "10",
  padding: "5px",
  borderRadius: "20px",
};

const submitStyle = {
  background: "#8ee4af",
  flex: "1",
  fontWeight: "500",
  borderRadius: "20px",
  margin: "0 0 0 10px",
};

export default AddTodo;

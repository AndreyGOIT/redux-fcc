import React from "react";
import { connect } from "react-redux";
import { addMessage } from "../redux/store.js";

class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  // Add handleChange() and submitMessage() methods here
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  submitMessage() {
    this.props.submitNewMessage(this.state.input);
    this.setState({ input: "" });
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        {/* Render an input, button, and ul below this line */}
        <input onChange={this.handleChange} value={this.state.input} />
        <button onClick={this.submitMessage}>Add message</button>
        <ul>
          {this.state.messages.map((message, idx) => {
            return <li key={idx}>{message}</li>;
          })}
        </ul>
        {/* Change code above this line */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { messages: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    },
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

export default Container;

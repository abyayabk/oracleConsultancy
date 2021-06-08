import React, { Component } from "react";

class ContactUS extends Component {
  constructor() {
    super();
    this.state = {
      textAreaValue: "we do what we do"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ textAreaValue: event.target.value });
  }

  render() {
    return (
      <div>
        
        <textarea
        
        />
      </div>
    );
  }
}

export default ContactUS;
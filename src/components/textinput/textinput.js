import React, { Component } from 'react';
import textInput from './inputPlaceholder.js';

class TextInput extends Component {
  defaultValue = textInput;
  handleChange = (event) => {
    this.props.update(event.target.value);
  }
  componentDidMount() {
    this.props.update(textInput);
  }
  render() {
    return (
      <div className="TextInput__container">
        <h2>Enter Markdown Here:</h2>
        <textarea className="TextInput__textarea" id="editor" onChange={this.handleChange}
        defaultValue={this.defaultValue}>
        </textarea>
      </div>
    );
  }
}

export default TextInput;

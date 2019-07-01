import React, { Component } from 'react';
import TextInput from './components/textinput/textinput';
import TextOutput from './components/textoutput/textoutput';
import './App.css';

class App extends Component {
  state = {
    inputText: ""
  }
  updateInputText(text) {
    this.setState({inputText: text});
    console.log('app state: ' + this.state.inputText);
  }
  updateInputText = this.updateInputText.bind(this);
  render() {
    return (
      <div className="App">
        <h1 className="App__heading">Markdown Previewer</h1>
        <TextInput update={this.updateInputText}/>
        <TextOutput text={this.state.inputText}/>
      </div>
    );
  }
}

export default App;

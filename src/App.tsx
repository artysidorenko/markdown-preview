import React, { Component } from 'react';
import TextInput from './components/textinput/textinput';
import TextOutput from './components/textoutput/textoutput';
import './App.css';

interface State {
    inputText: string;
}

class App extends Component<object, State> {
    public readonly state = { inputText: '' }
    private updateInputText = (text: string): void => {
        this.setState({ inputText: text });
        console.log('app state: ' + this.state.inputText);
    }
    public render(): React.ReactNode {
        return (
            <div className="App">
                <h1 className="App__heading">Markdown Previewer</h1>
                <TextInput update={this.updateInputText} />
                <TextOutput text={this.state.inputText} />
            </div>
        );
    }
}

export default App;

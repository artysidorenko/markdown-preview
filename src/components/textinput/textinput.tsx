import React, { Component, ChangeEvent } from 'react';
import textInput from './inputPlaceholder';

interface Props {
    update: (text: string) => void;
}

class TextInput extends Component<Props, object> {
    private defaultValue = textInput;
    private handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        const { value } = event.target as HTMLTextAreaElement;
        this.props.update(value);
    }
    public componentDidMount(): void {
        this.props.update(textInput);
    }
    public render(): React.ReactNode {
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

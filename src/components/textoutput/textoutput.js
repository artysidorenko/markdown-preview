import React, { Component } from 'react';
import marked, { Renderer } from 'marked';
import highlightjs from 'highlightjs';

class TextOuput extends Component {
  parseMarkedown = (markdown) => {
    const markFunc = marked;
    const renderer = new Renderer();
    renderer.link = function (href, title, text) {
      return `<a target="_blank" href="${href}">${text}` + '</a>';
    }
    markFunc.setOptions({
      breaks: true,
      renderer: renderer
    });
    return markFunc(markdown);
  }
  render() {
    return (
      <div>
        <h2>Formatted Output:</h2>
        <div className="TextOutput__container" id="preview">
          <p className="TextOuput__textbox" dangerouslySetInnerHTML={{__html: this.parseMarkedown(this.props.text, {sanitize: true})}} />
        </div>
      </div>
    );
  }
}

export default TextOuput;

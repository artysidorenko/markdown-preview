import React from 'react';
import marked, { Renderer } from 'marked';

interface Props {
    text: string;
}

const TextOuput = (Props: Props): React.ReactElement => {

    const parseMarkedown = (markdown: string): string => {
        const markFunc = marked;
        const renderer = new Renderer();
        renderer.link = function (href, title, text): string {
            return `<a target="_blank" href="${href}">${text}` + '</a>';
        }
        markFunc.setOptions({
            breaks: true,
            renderer: renderer,
            sanitize: true
        });
        return markFunc(markdown);
    }

    return (
        <div>
            <h2>Formatted Output:</h2>
            <div className="TextOutput__container" id="preview">
                <p
                    className="TextOuput__textbox"
                    dangerouslySetInnerHTML={{ __html: parseMarkedown(Props.text) }}
                />
            </div>
        </div>
    );
}

export default TextOuput;

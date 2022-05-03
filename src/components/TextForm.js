import React, { useState } from "react";

export default function TextForm(props) {

    const [text, setText] = useState('');
    
    const handleUpperClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "success");
    }

    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case", "success");
    }

    const handleSentenceClick = () => {
        let newText = convertToSentenceCase(text);
        setText(newText);
        props.showAlert("Converted to sentence case", "success");
    }

    const handleCamelClick = ()=>{
        let newText = convertToCamelCase(text);
        setText(newText);
        props.showAlert("Converted to camel case", "success");
    }

    const handleKebebClick = ()=>{
        let newText = convertToKebebCase(text);
        setText(newText);
        props.showAlert("Converted to kebab case", "success");
    }

    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
      
    return (
        <>
            <div className={`container ${props.colourTheme!=='light'?`bg-${props.colourTheme} text-light`:`bg-${props.colourTheme} text-dark`}`}>
                <h1>{props.heading}</h1>
                <div className="form-floating my-3">
                    <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="text-utils-text-area"
                        value={text}
                        onChange={handleOnChange}
                    ></textarea>
                </div>

                <div className="buttons my-3">
                    <button type="button" className={`btn ${props.colourTheme!=='light'?`text-${props.colourTheme} bg-light`:`text-light bg-primary`} mx-1`} onClick={handleUpperClick}>Convert to Uppercase</button>
                    <button type="button" className={`btn ${props.colourTheme!=='light'?`text-${props.colourTheme} bg-light`:`text-light bg-primary`} mx-1`} onClick={handleLowerClick}>Convert to Lowercase</button>
                    <button type="button" className={`btn ${props.colourTheme!=='light'?`text-${props.colourTheme} bg-light`:`text-light bg-primary`} mx-1`} onClick={handleSentenceClick}>Convert to Sentence Case</button>
                    <button type="button" className={`btn ${props.colourTheme!=='light'?`text-${props.colourTheme} bg-light`:`text-light bg-primary`} mx-1`} onClick={handleCamelClick}>Convert to Camel Case</button>
                    <button type="button" className={`btn ${props.colourTheme!=='light'?`text-${props.colourTheme} bg-light`:`text-light bg-primary`} mx-1`} onClick={handleKebebClick}>Convert to Kebeb Case</button>
                    <button type="button" className={`btn ${props.colourTheme!=='light'?`text-${props.colourTheme} bg-light`:`text-light bg-primary`} mx-1`} onClick={handleClearClick}>Clear Text</button>
                </div>
                
                <div className="summary">
                    <h1>Your Text Summary</h1>
                    {
                        text==="" ? 
                        <>
                        <div className="summary my-2">{0} words and {0} characters.</div><div className="read-time">{0} minutes to read.</div>
                        </> : 
                        <>
                        <div className="summary my-2">{text.split(" ").length} words and {text.length} characters.</div><div className="read-time">{text.split(" ").length * 0.008} minutes to read.</div>
                        </>
                    }
                </div>
                
                <div className="preview">
                    <h1>Preview</h1>
                    <div className="text-preview">{text}</div>
                </div>
            </div>
        </>
    );



    //User defined functions
    function convertToSentenceCase(text) {
        let newString = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()}); //eslint-disable-line
        return newString;
    }

    function convertToCamelCase(text) {
        return text.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
            if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
            return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
    }

    function convertToKebebCase(text){
        text = text
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('-');
        return text;
    }
}


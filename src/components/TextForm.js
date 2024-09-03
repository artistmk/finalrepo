import React, {useState} from 'react'

export default function TextForm(props) {

const handlerClick = () => {
    // console.log("this was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success");
}
const handleroneClick = () => {
    let funText = text.toLowerCase();
    setText(funText);
    props.showAlert("converted to lowercase", "success");
}
const clearHandle = () => {
    let newText = '';
    setText(newText);
    props.showAlert("clear all", "success");
}

const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
}

const handleCopy = () => {
    console.log("copy text");
    
}
const removeSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("removed all extra spaces", "success");
}
const [text, setText] = useState("");
// setText("new test");

    return (
        <>
        <div className= "container" style={{color: props.mode === "dark" ? "white" : "#042743"}}>
            <h1 id="red" className="mb-2">{props.heading} </h1>
             <div className="form-group">
    <textarea className="form-control" value = {text} onChange= {handleOnChange} style={{backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "#042743"}} id="myBox" rows="8"></textarea>
  </div>
  <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handlerClick}>Convert to Uppercase</button>
  <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleroneClick}>Convert to Lowercase</button>
  <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={clearHandle}>Clear All</button>
  <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</button>
  <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={removeSpace}>Space Remover</button>
  </div>

    <div className="container my-3" style={{color: props.mode === "light" ? 'black' : "white"}}>
        <h2>Your Text summary</h2>
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
    </div>
        </>
    )
}



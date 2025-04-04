import React, {useState} from 'react'

export default function Textform(props) {
  const HandleUpClick = ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase", "Success!")
  }

  const HandleLoClick = ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase", "Success!")
  }

  const HandleClrClick = ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = '';
    setText(newText)
    props.showAlert("Text Cleared", "Success!")
  }

  const HandleCopy = ()=>{
    console.log("I am Copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "Success!")
  }

  const HandleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed", "Success!")
  }

  const HandleOnChange = (event)=>{
    console.log("On Change");
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1><strong>{props.heading}</strong></h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={HandleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button style={{ backgroundColor: "cyan", borderColor: "blue" }} className="bt btn-primary mx-1" onClick={HandleUpClick}>Convert to Uppercase</button>
        <button style={{ backgroundColor: "cyan", borderColor: "blue" }} className="bt btn-primary mx-1" onClick={HandleLoClick}>Convert to Lowercase</button>
        <button style={{ backgroundColor: "cyan", borderColor: "blue" }} className="bt btn-primary mx-1" onClick={HandleClrClick}>Clear</button>
        <button style={{ backgroundColor: "cyan", borderColor: "blue" }} className="bt btn-primary mx-1" onClick={HandleCopy}>Copy Text</button>
        <button style={{ backgroundColor: "cyan", borderColor: "blue" }} className="bt btn-primary mx-1" onClick={HandleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1><strong>Your Text Summary</strong></h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2><strong>Preview</strong></h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}

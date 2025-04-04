import React, {useState} from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btntext, setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = ()=>{
        if(myStyle.color === 'black'){
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode")
        }
    }

  return (
    <div classNameName="container" style={myStyle}>
        <h1 classNameName="my-3">About Us</h1>
        <div className="accordion" id="accordionExample">
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Uppercase and Lowercase Conversion</strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            On this website, the Convert to Uppercase and Convert to Lowercase buttons provide a quick and efficient way to transform text with a single click. The Convert to Uppercase button instantly changes all selected text to capital letters, ensuring consistency and emphasis where needed. Meanwhile, the Convert to Lowercase button modifies the text to all lowercase, perfect for standardizing formatting. These tools help users streamline text editing without manual retyping, enhancing productivity and ease of use.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Copying and Clearing Text</strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            The Clear and Copy Text buttons on this website make text management effortless. The Clear button instantly removes all content from the text area, allowing users to start fresh without manual deletion. The Copy Text button quickly copies the entered or modified text to the clipboard, making it easy to paste elsewhere without extra steps. These features enhance user convenience by simplifying text handling and improving workflow efficiency.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Removing Extra Spaces</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            The Remove Extra Spaces button on this website helps users clean up their text by eliminating unnecessary spaces between words and sentences. With a single click, it ensures proper spacing, improving readability and maintaining a polished appearance. This feature is especially useful for refining copied text or formatting content for a professional and consistent look.
        </div>
        </div>
    </div>
    </div>
    <div className="container my-3">
        <button onClick={toggleStyle} type="button" style={{ backgroundColor: "cyan", borderColor: "blue" }} classNameName="btn btn-primary">{btntext}</button>
    </div>
    </div>
  )
}

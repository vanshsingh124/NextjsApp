import React,{useState}from 'react'


function TextForm(props) {
    
    let handleUpClick = ()=>{
        // console.log("UpperCase was clicked")
        let newText = text.toUpperCase()
        setText(newText)
        
    }
    let handleOnChange = (event)=>{
        // console.log("On click")
        setText(event.target.value)
        
       
    }
    let handleLowClick = ()=>{
        let newLower = text.toLowerCase()
        setText(newLower)
        
    }
    let handleClear = ()=>{
        setText("")
       
    }

    let handleCopy = ()=>{
        let text = document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value)
       
    }
    let handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        
    }


    let [text,setText] = useState("")
    //text = "new state" //Wrong way to change the state 
    //setText = "new state" //Correct way to change the state 
    
    return (
        <>
        <div className='container'   >
            <div className="mb-3" >
            <h2>{props.heading}</h2>
              
                <textarea className="form-control hii" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
           
        </div>
        <div className="container my-3">
            <h3>Your Text Summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length}Minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something to preview it here"}</p>
        </div>
        </>

    )
}

TextForm.defaultProps = {
    heading:"Set the Heading",
 
  };

export default TextForm;
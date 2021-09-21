import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
        if(text.length>0){
        props.showAlert(
            
            'Text is converted to upper-case successfully',
            'success')}
            else{
                props.showAlert(
                    "Write some text","warning"
                )}
        
    }
    const handleLoClick=()=>{
        let ntext=text.toLowerCase();
        setText(ntext);
        if(text.length>0){
        props.showAlert(
            "Text is converted to lower-case successfully",
            "success")}
            else{
                props.showAlert(
                    "Write some text","warning"
                )}
    }
    const handleClearClick=()=>{
        let newtext="";
        setText(newtext);
        if(text.length===0){
            props.showAlert(
                "Write some text","warning"
            )}
    }
    const handleCopyClick=()=>{
        var newtext=document.getElementById("exampleFormControlTextarea1");
        newtext.select();
        navigator.clipboard.writeText(newtext.value);
       
    
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        if(text.length>0)
        props.showAlert(
            "Extra Spaces are removed successfully",
            "success"
        )
    }
    const handleUpChange=(event)=>{
setText(event.target.value);

    }
    
    const[text,setText]=useState("");
    return (
    <>
            <div className="container "style={{color:props.mode==='dark'?'#dce2e8':'black'}}>
  <h1>{props.heading}</h1>
  <div className="mb-3">

  <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleUpChange} style={{backgroundColor :props.mode==='light'?'white':'#dae2ea' ,border:'2px solid black',color:'black'}} rows="8"></textarea>
</div>

      
    <button disabled={text.length===0} type="submit" className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>ConVert To Uppercase</button>
    <button disabled={text.length===0} type="submit" className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>ConVert To Lowercase</button>
    <button disabled={text.length===0} type="submit" className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    <button disabled={text.length===0} type="submit" className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
    <button disabled={text.length===0} type="submit" className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'#dce2e8':'black'}}>
    <h4>Text Summary</h4>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length}characters</p>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length*0.008}minutes</p>
    <h4>Preview</h4>
    <p>{text.length>0?text:"Enter something above to preview it here"}</p>
  </div>
    </>    
    )
}

import React,{useState} from 'react'

export default function Test(props) { 
    const handleupclick =()=>{
        console.log("up button clicked ");
        let newText = text.toUpperCase();
        setText(newText)
    }   
    const handleloclick =()=>{
      console.log("up button clicked ");
      let newText = text.toLowerCase();
      setText(newText)
  }  
  const handleclrclick =()=>{
    console.log("up button clicked ");
    setText(" ")
}    

const handlecopyclick =()=>{
 var copy=document.getElementById("Mybox")
  copy.select();
  navigator.clipboard.writeText(copy.value);
}    

const handleremoveclick =()=>{
  let newText =text.split(/[ ]+/);
  setText(newText.join(" "))
 }    
 
    const handleonchange =(event)=>{
        console.log("on change button clicked ");
        setText(event.target.value);
    }   
   const [text, setText] = useState('Enter text here');
   
  return (
    <div>
      <h1>{props.heading} </h1>
      <div className="form-group">
            <textarea className="form-control" value={text} onChange={handleonchange} id="Mybox"  rows="5"></textarea>
        </div><br/>
      <button className='btn btn-primary mx-1' onClick={handleupclick}>Convert to upper case </button>
      <button className='btn btn-primary mx-1' onClick={handleloclick}>Convert to lower case </button>
      <button className='btn btn-primary mx-1' onClick={handleclrclick}>Clear text </button>
      <button className='btn btn-primary mx-1' onClick={handlecopyclick}>Copy To clipboard</button>
      <button className='btn btn-primary mx-1' onClick={handleremoveclick}>Clear extra space</button>


      <div className="container  my-3">
        <h2>Your text here </h2>
        <p>{text.split(" ").length } word and {text.length} cherector</p>
        <p> {0.008 * text.split(" ").length }Minutes read </p>
        <h2>Preview</h2>
        <p>{ text}</p>
      </div>
    </div>
  )
}

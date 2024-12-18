    import React,{useState} from "react";

   
    export default function TextFrom({ heading, mode, showAlert}) {
        
    const handleupclick=()=>{
        //console.log("upercase was clicked"+ text);
        let newText =text.toUpperCase();
        setText(newText);
        showAlert("Converted to Upper Case", "success");
    }
    const handleloclick=()=>{
        let newText =text.toLowerCase();
        setText(newText);
        showAlert("Convert to Looer Case ","success")
    }

    const handleOnChange=(Event)=>{
        //console.log("on change");
        setText(Event.target.value)
    }


    const handleclrclick=(Event)=>{
        //console.log("on change");
        setText(" ")
        showAlert("Clear all text","success")

    }

    const handlecopyclick =()=>{
        var copy=document.getElementById("Mybox")
         copy.select();
         navigator.clipboard.writeText(copy.value);
         document.getSelection().removeAllRanges();
         showAlert("Copy to clipbord ","success")
       }  


         const [text,setText] = useState(' ');
        // let myStyle={
        //     backgroundColor:'yellow'
        // }        
    return (
        <>
{/* mode,toggleMode,alert */}

        <div className="container"  style={{color:mode === 'dark'?'white':'#042743'}}>
        <div className="container" >
        <h1>{heading}</h1><br />
        <div className="form-group">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:mode ==='dark'?'#272348':'white',
                color:mode ==='dark'?'white':'#042743'}} id="Mybox"  rows="3"></textarea>
        </div><br/>
        <button disabled={text.length===1} className="btn btn-primary mx-2 my-2" onClick={handleupclick}>Convert to Upper Case</button>   
        <button disabled={text.length===1} className="btn btn-primary mx-2 my-2" onClick={handleloclick}>Convert to lower Case</button>   
        <button disabled={text.length===1} className="btn btn-primary mx-2 my-2" onClick={handlecopyclick}>copy code</button> 
        <button disabled={text.length===1} className="btn btn-primary mx-2 my-2" onClick={handleclrclick}>Clear Screen </button>
        </div>
        <div className="container">
            <h1> Your text summary</h1>

            <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and{" "}
            {text.replace(/\s+/g,"").length} characters    </p> 
                   
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0 }).length} Minutes read</p>
            <h2>Preview </h2>
            <p>{text.length>0?text:"!! Enter somthings to preview !!"}</p>
        </div>
    </div>
        </>
    );

    }

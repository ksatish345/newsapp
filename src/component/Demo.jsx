// import {React,useState} from 'react'

// export default function Demo() {
//   const [firstName,setFirstName]=useState("");
//   const [lastName,setLastName]=useState("");
//   const [button,setButton]=useState("Mr.");

//   const[dob,setDob]=useState("");
//   const [age, setAge] = useState( null);
  
//   const handleDateChange = (event) => {
//     const selectedDate = event.target.value;
//     setDob(selectedDate);
//     calculateAge(selectedDate);
//   };

//   const calculateAge = (dob) => {
//     if (!dob) return;
//     const today = new Date();
//     const birthDate = new Date(dob);
//     let age = today.getFullYear() - birthDate.getFullYear();
//     const monthDifference = today.getMonth() - birthDate.getMonth();

//     // Adjust age if the birth month and day haven't occurred yet this year
//     if (
//       monthDifference < 0 ||
//       (monthDifference === 0 && today.getDate() < birthDate.getDate())
//     ) {
//       age--;
//     }

//     setAge(age);
//   };
  
// function handleDob(event){
//   setDob(event.target.value);
// }


// function handleDob(event){
//   setAge(event.target.value);
// }
  



// function handlefirstName(event){
//   setFirstName(event.target.value);
// }
  
// function handlelastName(event){
//   setLastName(event.target.value);
// }
  

// function handleRadio (event){
//   console.log("handleRadio",event.target.value)
//   setButton(event.target.value);
// }

//   return (
//     <div>
//       <div className="container">
        
//       <label for="ml">Mr.</label> 
//         <input  type="radio" id="ml" name="fees" value="Mr." checked={button === "Mr."} onChange={handleRadio} / >

//         <label for="fm">Mr.s </label>
//         <input type="radio" id="fm" name="fees" value="Mrs." checked={button === "Mrs."} onChange={handleRadio}/><br/><br/>

//       first Name: <input type="text" onChange={handlefirstName} /><br /><br />
//       last Name: <input type="text" onChange={handlelastName}/><br /><br /> 

//            DOB : <input type="Date" id="dob" value={dob} onChange={handleDateChange}/><br /><br />
//       <h3>
//       <div> full name is : {button+" "+firstName+" "+lastName+" your are "+" " +age +"Year's old"} </div>
//       </h3>
      
//       </div>
//     </div>
//   )
// }
//================================================================================================================

// import {React,useState} from 'react'

// export default function Demo() {

//   const [count,setCount]=useState(0);
//   const [sum,setSum]=useState(0);

//   function handlecount(){

//     setCount(count + (Number(sum)));
//     console.log("count",typeof(count),typeof(sum));
//   }
//   function handlesum(event){
//     setSum(event.target.value);
   
//   }

//   return (
//     <div>
//       <h1>hello {count}</h1>
//       <button onClick={handlecount}>click Me</button><br/><br/>

//       <input type="text" onChange={handlesum} /><br/><br/>
//      answer is:  {count +(Number(sum))}
//     </div>
//   )
// }
//=====================================================================================================================


// Click the button & change to upper case   ======================================================================== 
// import { useState } from "react";


// export default function Demo() {

//   //const [count,setCount]=useState();
//   const [text,setText]=useState("");
//   let newText =text.toUpperCase();

//    const handleupclick=()=>{
//     // let reText =text.toLowerCase();
    
//      setText(newText);
     
//     }

//     const handleOnChange=(Event)=>{
//       setText(Event.target.value);
//     }



//   return (
//     <div>
//       <div className="container"><br/>
//      Text here: <input type="text" value={text} onChange={handleOnChange} /><br/><br/>
//      <button onClick={handleupclick}>cupper case</button>
//       </div>

//       <h4>Hello your upper case value is : {newText}</h4>
     
//     </div>
//   )
// }
 
//=====================================================================================================================

import React, { useState } from 'react'

export default function Demo({mode}) {

  // const[myStyle,setMyStyle]=useState({
  //   color:"black",
  //   backgroundColor:"white"
  // });
let myStyle ={
  color: mode ==='dark'?'white':'#042743',
  backgroundColor: mode ==='dark'?'#042743':'white',
  border:'2px solid ',
  borderColor: mode ==='dark'?'rgb(36 74 104)':'white'

}

  const[btnText,setBtnText]=useState("Enable dark mode")

  
  return (
    <>
    <div className="container" style={{color: mode ==='dark'?'white':'#042743'}}><br />
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    
    </div></>
  )
}


import { useState } from "react";

export default function Test2() {
    
    const [text,setText]=useState("");
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");  
    const [radio,setRadio]=useState("Mr.");

    const [dob, setDob] = useState("");
    const [age, setAge] = useState(null);
    
    const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        setDob(selectedDate);
        calculateAge(selectedDate);
      };

      const calculateAge = (dob) => {
        if (!dob) return;
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
    
        // Adjust age if the birth month and day haven't occurred yet this year
        if (
          monthDifference < 0 ||
          (monthDifference === 0 && today.getDate() < birthDate.getDate())
        ) {
          age--;
        }
    
        setAge(age);
      };


    function handleSubmit (event){
        console.log(text)
        setText(event.target.value);
    }


    function handleFirstName (event){
        setFirstName(event.target.value);
    }

    function handleLastName (event){
        setLastName(event.target.value);
    } 
      function handleRadio (event){
        console.log("handleRadio",event.target.value)
        setRadio(event.target.value);
    }

    

  return ( //Jsx callback function / arrow 
    <div>
    
        <div className="container">
         
        <form action="" >
        <label for="ml">Mr.</label> 
        <input  type="radio" id="ml" name="fees" value="Mr." checked={radio === "Mr."} onChange={handleRadio}/ >

        <label for="fm">Mr.s </label>
        <input type="radio" id="fm" name="fees" value="Mrs." checked={radio === "Mrs."} onChange={handleRadio}/><br/><br/>


        first name: <input type="text" onChange={handleFirstName} /><br/><br/>
        Last name: <input type="text" onChange={handleLastName} /><br/><br/>

     date of birth: <input type="date"  id="dob"
        value={dob}
        onChange={handleDateChange} />  

        </form> 

        Full Name:<div>{radio +firstName+" "+lastName}</div> you are {age} year old 
        </div>
      
    </div>
  )
}

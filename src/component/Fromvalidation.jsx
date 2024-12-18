import React, { useState } from 'react'

export default function Fromvalidation() {
    
    let data = {name:"",email:"",password:""};
    const[inputData,setInputData]=useState(data);

    let myStyle={
      color:'white',
      backgroundColor:'red'
    }

    let color={
        color:'white',
        backgroundColor:'gray'
      }

      function handleSubmit (e){
        e.preventDefault();
        if(!inputData.name||!inputData.email||!inputData.password){
            alert("all fill are mendetree")
        }else{
            alert("!!successfully form done !!")
        }
        

      }
      function handlechange(e){
        setInputData({...inputData,[e.target.name]:e.target.value})
        console.log(inputData)
      }

  return (

    <body style={myStyle}>
        
    <div >

    <div className="container" style={color}>

      <h2>
        <p>Frome validation == </p>
      </h2>
      <div className="container">
      <form action="" onChange={handlechange}>
           Enter your name : <input type="text" name='name' placeholder='name?' value={inputData.name} /><br /><br />
           Enter your Email : <input type="email"  name='email' placeholder='Email?'  value={inputData.Email}/><br /><br />
           Enter your password : <input type="password"  name='password' placeholder='password?'  value={inputData.password}/><br /><br />

          National : <select name="" id="">
           <option value="am" >american</option>
        <option value="id" selected>indian</option>
        <option value="pk">pakistani</option>
        <option value="jp">japani</option>
        <option value="cn">chinij</option>
           </select><br /><br />
           
           <input type="submit" value="register"class="submit-button" onClick={handleSubmit}></input>
        </form>
        <h2>Hello {inputData.name} your form is submit  </h2>
      </div>
      </div>

    </div>
    </body>
  )
}

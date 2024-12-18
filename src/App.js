// import "./App.css";
// import Navbar from "./component/Navbar";
// import TextFrom from "./component/TextFrom";
// import Test from "./component/Test";
// import Demo from "./component/Demo";
// import Test2 from "./component/Test2";
// import PrintAlphabet from "./component/PrintAlphabet";
// import ColourDemo from "./component/ColourDemo";
// import Fromvalidation from "./component/Fromvalidation";
// import { useState } from "react";
// import Alert from "./Alert";


// function App() {
//   const [mode,setMode]= useState('light');
//   const [alert,setAlert]= useState(null);
   

//   const shoAlert=(massage, type)=>{
//     setAlert({
//       msg:massage,
//       type:type
//     })
//     setTimeout(() => {
//       setAlert(null);
//     }, 2000);
//   }

//   const togglemode =()=>{
//     if(mode === 'light'){
//       setMode ('dark');
//       document.body.style.backgroundColor='#042743';
//       shoAlert("Dark Mode has been Enabled !!","success")
//     }
//      else {
//       setMode ('light');
//       document.body.style.backgroundColor='white';
//       shoAlert("Light Mode has been Enabled","success")
//   }
// }
//   return (
//     <>            
//     <Navbar mode={mode} togglemode={togglemode}/>
//     <Alert alert={alert}/>
//     <TextFrom heading="Enter text hare" shoAlert={shoAlert}  mode={mode} />

//     <Demo /><br />
//      {/*<h1>Form validation ==</h1>
//     <Fromvalidation />  */}



//     </>
//   );
// }

// export default App;

//============================================================
// react routing start  ===========================


import "./App.css";
import Navbar from "./component/Navbar";
import TextFrom from "./component/TextFrom";
import Demo from "./component/Demo";
import { useState } from "react";
import Alert from "./Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode =function Demo() {
    console.log("toggle")
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("!! Dark Mode has been Enabled !!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("!! Light Mode has been Enabled ", "success");
    }
  };

  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode}  alert={alert}/>
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route
            exact path="/about"
            element={<Demo mode={mode}/>}
          />
          <Route
           exact path="/"
            element={
              <TextFrom
                heading="Enter text here"
                showAlert={showAlert}
                mode={mode}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
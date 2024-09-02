import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
   setAlert({
    msg: message,
    type: type
   })
   setTimeout(() => {
     setAlert(null);
   }, 1500);
  }

  const toggleMode = () => {
    if(mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils - DarkMode";
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Your are on the light mode", "success");
      document.title = "Textutils - LightMode";
    }
  }
  return (
    <>
     {/* <BrowserRouter> */}
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  
   <Alert alert={alert}/>
   <div className="container my-3">
   {/* <Routes> */}
          {/* <Route exact path="/about" Component={About}/> */}
           
         
          {/* <Route exact path="/" Component={() =>  */}
          <TextForm showAlert={showAlert} heading="Enter The Text To Analyze Below..." mode={mode}/>
           
    {/* </Routes> */}
    </div>
    {/* </BrowserRouter> */}
   </>
  );
}

export default App;

import React, {useState} from 'react'
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
}from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
 const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  };

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success!")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success!")
    }
  }

  return (
    <> 
    <Router>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode = {toggleMode} />
    <Alert alert={alert} mode={mode}/>
    <div className="container my-3">
    <Routes>
           <Route path="/about" element={<About />} />
           <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>} />
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import Error from './components/Error';
import About from './components/About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  //User defined functions
  const toCapitalize = (text)=> {
    return text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()}); //eslint-disable-line
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  const [colourTheme, setColourTheme] = useState('light')

  const [isWhiteChecked, setIsWhiteChecked] = useState(true);
  const [isGreenChecked, setIsGreenChecked] = useState(false);
  const [isBlueChecked, setIsBlueChecked] = useState(false);
  const [isRedChecked, setIsRedChecked] = useState(false);

  const toggleColourTheme = (event)=> {
    setColourTheme(event.target.value);
    if(event.target.value === 'light'){
      setIsWhiteChecked(true);
      setIsRedChecked(false);
      setIsGreenChecked(false);
      setIsBlueChecked(false);
      document.body.setAttribute("class", "bg-light");
      document.title = "TextUtils - Light Theme";
      showAlert("Light theme enabled", "success");
    }
    else if(event.target.value === 'success'){
      setIsWhiteChecked(false);
      setIsRedChecked(false);
      setIsGreenChecked(true);
      setIsBlueChecked(false);
      document.body.setAttribute("class", "bg-success");
      document.title = "TextUtils - Green Theme";
      showAlert("Green theme enabled", "success");
    }
    else if(event.target.value === 'danger'){
      setIsWhiteChecked(false);
      setIsRedChecked(true);
      setIsGreenChecked(false);
      setIsBlueChecked(false);
      document.body.setAttribute("class", "bg-danger");
      document.title = "TextUtils - Red Theme";
      showAlert("Red theme enabled", "success");
    }
    else if(event.target.value === 'primary'){
      setIsWhiteChecked(false);
      setIsRedChecked(false);
      setIsGreenChecked(false);
      setIsBlueChecked(true);
      document.body.setAttribute("class", "bg-primary");
      document.title = "TextUtils - Blue Theme";
      showAlert("Blue theme enabled", "success");
    }
  }

  return (
    <>
    <Router>
    <Navbar  showAlert={showAlert} toggleColourTheme={toggleColourTheme} colourTheme={colourTheme} isBlueChecked={isBlueChecked} isGreenChecked={isGreenChecked} isWhiteChecked={isWhiteChecked} isRedChecked={isRedChecked}/>
    <Alert alert={alert} toCapitalize={toCapitalize}/>  
      <Routes>
        <Route exact path="/" element={<TextForm heading="Text Utils" showAlert={showAlert} colourTheme={colourTheme}/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/*" element={<Error/>}/>
      </Routes>
      
    </Router>
    
    </>
  );
}

export default App;

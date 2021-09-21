// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import About from './component/About';
import Alert from './component/Alert';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light');
  const[alert,setalert]=useState(null);
  const showAlert=(message,type)=>{
setalert({
msg:message,
type:type
})
  }
  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#090322';
      showAlert("Dark Mode is enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode is enabled","success");
    }
  }
  setTimeout(()=>{
  setalert(null);
  },1500);
  return (
    <>
<Router>
<Navbar  mode={mode} togglemode={togglemode}/>
<Alert alert={alert}/>

<Switch>
          <Route path="/About">
            <About mode={mode} />
          </Route>
          
          <Route path="/">
          <Textform mode={mode} showAlert={showAlert}heading="Enter the text below"/>
          </Route>
        </Switch>
</Router>

    </>
   
  );
}

export default App;

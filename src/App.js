import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routes';
import './App.css';

function App(props) {
  const {authState, authData} = props;

  const loged = (    
      <Router>
        <Routes authState={authState} authData={authData} />
      </Router>
    )

  const logoff = (
    <div />
  )
  
  if (authState==='signedIn'){
    return loged
  }
  else {
    return logoff
  }
}

export default App;
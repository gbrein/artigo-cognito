import React from 'react';

import './App.css';

function App(props) {
  const {authState} = props;

  const loged = (    
      <div className="App">
        Página depois do Login
      </div>
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
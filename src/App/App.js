import React from 'react'
import './App.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import Routes from './route'



function App() {
  return (
    <>
      {/* no gaps, no margin padding */}
    <CssBaseline /> 
    <Routes />
    </>
  );
}

export default App;

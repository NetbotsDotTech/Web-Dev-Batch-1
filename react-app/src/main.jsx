import React from 'react'
import ReactDOM from 'react-dom/client'
import App1 from './App1.jsx'
import '@mui/material/styles';
import AppWeather from './AppWeather.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWeather/>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter as Router} from 'react-router-dom'  
import GlobalState from"./context//GlobalState.jsx"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>  
     <GlobalState>
     <App />
     </GlobalState>
    </Router>
  </StrictMode>,
)

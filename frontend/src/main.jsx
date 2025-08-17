import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import {ContextProvider} from './context/ContextProvider.jsx'
import 'leaflet/dist/leaflet.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ContextProvider>
      <App />
      </ContextProvider>
  </StrictMode>,
)

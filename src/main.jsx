import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar';
import HeroSection from './components/BackgroundVideo';
import './index.css'
import App from './App.jsx'
import bgVideo from '/src/assets/background.mp4';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

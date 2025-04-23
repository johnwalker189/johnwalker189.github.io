import React from 'react'
import Navbar from './components/Navbar';
import HeroSection from './components/BackgroundVideo';

function App() {
  return (
    <>
      <Navbar />
      <h1 className="text-lg font-bold text-center mx-auto max-w-3xl text-white animate-pulse">
        Welcome to my stupid place~
      </h1>
    </>
  );
}

export default App;
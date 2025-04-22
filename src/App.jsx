import React from 'react'
import Navbar from './components/Navbar';
import HeroSection from './components/BackgroundVideo';
import bgVideo from '/src/assets/background.mp4';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection>
        <h1 className="text-lg font-bold text-center mx-auto max-w-3xl text-white animate-pulse">
          Welcome to my stupid place~
        </h1>
      </HeroSection>
    </>
  );
}

export default App;
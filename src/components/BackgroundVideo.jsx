import React, { useState } from 'react';
import Navbar from '/src/components/Navbar';

export default function HeroSection({ children }) {
    return (
      <div className="w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/public/assets/background.mp4" type="video/mp4" />
        </video>
  
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />
  
        <div className="z-20 flex items-center justify-center h-full">
          {children}
        </div>
      </div>
    );
  }
  
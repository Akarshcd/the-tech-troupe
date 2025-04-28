import React, { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
// वीडियो फ़ाइलों को import करें
import video1 from '../../assets/1.mp4';
import video2 from '../../assets/2.mp4';

const HeroSection = () => {
  const { darkMode } = useTheme();
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = [video1, video2]; // सही पाथ का उपयोग
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000);
    
    return () => clearInterval(timer);
  }, []);
    
  const handleLoadedData = () => {
    setLoaded(true);
  };
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* वीडियो बैकग्राउंड */}
      <div className="absolute inset-0 z-0">
        {videos.map((video, index) => (
          <video
            key={index}
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${currentVideo === index ? 'opacity-100' : 'opacity-0'}`}
            onLoadedData={index === 0 ? handleLoadedData : undefined}
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
      </div>
      
      {/* ओवरले ग्रेडिएंट - अधिक कॉन्ट्रास्ट के साथ */}
      <div className={`absolute inset-0 z-10 ${darkMode 
        ? 'bg-gradient-to-t from-black via-black/50 to-transparent' 
        : 'bg-gradient-to-t from-white via-white/50 to-transparent'}`}></div>
      
      {/* मुख्य कंटेंट - बेहतर विज़िबिलिटी के साथ */}
      <div className={`relative z-20 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          <span className="block mb-3">Innovative</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg">Digital Experiences</span>
        </h1>
        
        <p className={`text-xl md:text-2xl mb-8 ${darkMode ? 'text-gray-200' : 'text-gray-700'} drop-shadow-md`}>
          We craft cutting-edge solutions that transform businesses and captivate audiences
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${darkMode ? 'bg-white text-gray-900 hover:bg-gray-200' : 'bg-gray-900 text-white hover:bg-gray-700'}`}>
            Explore Our Work
          </button>
          <button className={`px-8 py-3 rounded-full font-bold border-2 transition-all duration-300 ${darkMode ? 'border-white text-white hover:bg-white hover:text-gray-900' : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'}`}>
            Contact Us
          </button>
        </div>
      </div>
      
      {/* स्क्रॉल डाउन आइकन - कंडिशनल रेंडरिंग के साथ */}
      {loaded && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer" 
             onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          <svg
            className={`w-8 h-8 ${darkMode ? 'text-white' : 'text-gray-900'} drop-shadow-lg`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
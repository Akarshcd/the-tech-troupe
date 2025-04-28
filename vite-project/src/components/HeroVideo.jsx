import { useState, useEffect } from 'react';
 import { useTheme } from '../contexts/ThemeContext';
import video1 from '../assets/1.mp4';
import video2 from '../assets/2.mp4';

const HeroVideo = () => {
  const { darkMode } = useTheme();
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = [video1, video2];

  useEffect(() => {
    // Auto-switch videos every 10 seconds
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev === 0 ? 1 : 0));
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {videos.map((video, index) => (
          <video
            key={index}
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              currentVideo === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-b ${
          darkMode 
            ? 'from-black/70 via-black/50 to-gray-900/90' 
            : 'from-black/50 via-black/30 to-white/80'
        }`}></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Creating Digital Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            We build innovative digital solutions that transform businesses and create exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-300">
              Our Services
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Video controls - dots */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-4">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVideo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentVideo === index 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Switch to video ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroVideo;
// src/pages/About/About.jsx

import React from 'react';
import { useTheme } from '../../contexts/ThemeContext'; // थीम कंटेक्स्ट का उपयोग करें

const About = () => {
  const { darkMode } = useTheme(); // थीम कंटेक्स्ट से डार्क मोड प्राप्त करें
  
  return (
    <section id="about" className="w-full bg-white dark:bg-gray-900 py-24">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">
            We build digital experiences that help businesses grow and succeed in the digital landscape.
          </p>
        </div>
      </div>

      {/* Company Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Story</h2>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Founded in 2021, we started with a mission to bridge the gap between innovative technology and business needs. Our team of experts is passionate about creating digital solutions that drive real results.
            </p>
            <p className="text-gray-700 dark:text-gray-200">
              From strategy to implementation, we partner with our clients to deliver experiences that users love and businesses need.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/images/ecommerce-case.jpg" // फोल्डर स्ट्रक्चर से उपलब्ध इमेज का उपयोग
              alt="Our office" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Innovation</h3>
              <p className="text-gray-700 dark:text-gray-200">
                We embrace new technologies and approaches to solve complex problems with elegant solutions.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Collaboration</h3>
              <p className="text-gray-700 dark:text-gray-200">
                We work closely with our clients to understand their needs and deliver solutions that exceed expectations.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Quality</h3>
              <p className="text-gray-700 dark:text-gray-200">
                We never compromise on quality, delivering robust, scalable, and secure digital solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Our Team</h2>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <div className="text-center">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 bg-gray-200 dark:bg-gray-600">
              <img 
                src="/api/placeholder/200/200" 
                alt="Team member" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/200';
                }}
              />
            </div>
            <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">Jane Doe</h3>
            <p className="text-blue-600 dark:text-blue-400 mb-3">CEO & Founder</p>
            <p className="text-gray-700 dark:text-gray-200">
              15+ years of experience in digital transformation
            </p>
          </div>
          
          {/* Team Member 2 */}
          <div className="text-center">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 bg-gray-200 dark:bg-gray-600">
              <img 
                src="/api/placeholder/200/200" 
                alt="Team member" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/200';
                }}
              />
            </div>
            <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">John Smith</h3>
            <p className="text-blue-600 dark:text-blue-400 mb-3">CTO</p>
            <p className="text-gray-700 dark:text-gray-200">
              Expert in scalable architecture and emerging tech
            </p>
          </div>
          
          {/* Team Member 3 */}
          <div className="text-center">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 bg-gray-200 dark:bg-gray-600">
              <img 
                src="/api/placeholder/200/200" 
                alt="Team member" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/200';
                }}
              />
            </div>
            <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">Sarah Johnson</h3>
            <p className="text-blue-600 dark:text-blue-400 mb-3">Design Director</p>
            <p className="text-gray-700 dark:text-gray-200">
              Passionate about creating intuitive user experiences
            </p>
          </div>
          
          {/* Team Member 4 */}
          <div className="text-center">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 bg-gray-200 dark:bg-gray-600">
              <img 
                src="/api/placeholder/200/200" 
                alt="Team member" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/200';
                }}
              />
            </div>
            <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">Mike Chen</h3>
            <p className="text-blue-600 dark:text-blue-400 mb-3">Lead Developer</p>
            <p className="text-gray-700 dark:text-gray-200">
              Full-stack expertise with focus on performance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
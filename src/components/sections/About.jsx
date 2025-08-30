import React from 'react';
import omar from '../../assets/images/omar.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-x-hidden">
      {/* Background "NEXTVIEW" text - spans full section height */}
      <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center">
        <h1 
          className="text-8xl md:text-9xl font-black text-gray-100 select-none"
          style={{ 
            writingMode: 'vertical-rl',
            textOrientation: 'mixed'
          }}
        >
          NEXTVIEW
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fade-in-up">
            ABOUT US
          </h2>
          <p className="text-xl text-gray-600 italic animate-fade-in-up animation-delay-200">
            Meet the visionary behind NextView's drone photography revolution.
          </p>
        </div>

        {/* Main About Content - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Side - Omar's Image */}
          <div className="relative animate-fade-in-up">
            <div className="w-full h-96 lg:h-[500px] relative">
              <img
                src={omar}
                alt="M Omar - Lead Drone Pilot"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-lg"></div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="text-left space-y-8 animate-fade-in-up animation-delay-300">
            {/* Main Heading */}
            <div className="space-y-4">
              <h3 className="text-4xl lg:text-5xl font-bold text-gray-800">
                My name is M Omar,
              </h3>
              <h4 className="text-2xl lg:text-3xl font-bold text-blue-600">
                I'm a drone photographer.
              </h4>
            </div>

            {/* Separator Line */}
            <div className="w-20 h-1 bg-gray-800"></div>

            {/* Description Paragraphs */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                The world without aerial photography will be meaningless to us if there is no light and color, 
                which opens up our minds and expresses passion from new heights.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My style is a combination between aerial photojournalism and fine-art photography with a touch 
                of cinematic vision and creative lighting. My photos are inspired by light, color, techniques 
                from advanced drone processing, vintage aesthetics, creative perspectives, and of course, most 
                importantly, the breathtaking landscapes and moments I capture from above!
              </p>
            </div>

            {/* Call to Action */}
            <div className="pt-4">
              <a 
                href="#portfolio" 
                className="inline-flex items-center text-lg text-gray-600 hover:text-blue-600 transition-colors duration-300 group"
              >
                VIEW PORTFOLIO 
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                  &gt;
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* My Skills Section */}
        <div className="mt-32 animate-fade-in-up animation-delay-1000">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
            <div className="w-20 h-1 bg-gray-800 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-4 gap-8">
            {/* PORTRAITS */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <div className="w-full h-full rounded-full border-4 border-blue-600 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">90%</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">PORTRAITS</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The world without photography will be meaningless to us if there is no light.
              </p>
            </div>
            
            {/* STUDIO */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <div className="w-full h-full rounded-full border-4 border-blue-600 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">95%</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">STUDIO</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The world without photography will be meaningless to us if there is no light.
              </p>
            </div>
            
            {/* LIFESTYLE */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <div className="w-full h-full rounded-full border-4 border-blue-600 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">80%</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">LIFESTYLE</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The world without photography will be meaningless to us if there is no light.
              </p>
            </div>
            
            {/* FASHION */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <div className="w-full h-full rounded-full border-4 border-blue-600 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">75%</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">FASHION</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The world without photography will be meaningless to us if there is no light.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Me Section */}
        <div className="mt-32 animate-fade-in-up animation-delay-1200">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Me?</h2>
            <div className="w-20 h-1 bg-gray-800 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Row 1 */}
            {/* LIGHT COMPOSURE */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <div className="w-full h-full rounded-full border-2 border-blue-400 flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M3 12h1m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">LIGHT COMPOSURE</h3>
              <p className="text-gray-600 text-sm italic leading-relaxed">
                The world without photography will be meaningless to us if there is no light.
              </p>
            </div>
            
            {/* PROFESSIONAL SKILLS */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <div className="w-full h-full rounded-full border-2 border-blue-400 flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">PROFESSIONAL SKILLS</h3>
              <p className="text-gray-600 text-sm italic leading-relaxed">
                The world without photography will be meaningless to us if there is no light.
              </p>
            </div>
            
            {/* PERFECT EQUIPMENT */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <div className="w-full h-full rounded-full border-2 border-blue-400 flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">PERFECT EQUIPMENT</h3>
              <p className="text-gray-600 text-sm italic leading-relaxed">
                The world without photography will be meaningless to us if there is no light.
              </p>
            </div>
            
            {/* Row 2 */}
            {/* ULTRA HD */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <div className="w-full h-full rounded-full border-2 border-blue-400 flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">ULTRA HD</h3>
              <p className="text-gray-600 text-sm italic leading-relaxed">
                The world without photography will be meaningless to us if there is no light.
              </p>
            </div>
            
            {/* UNIQUE VISION */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <div className="w-full h-full rounded-full border-2 border-blue-400 flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">UNIQUE VISION</h3>
              <p className="text-gray-600 text-sm italic leading-relaxed">
                The world without photography will be meaningless to us if there is no light.
              </p>
            </div>
            
            {/* FOCUSING KNOWLEDGE */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <div className="w-full h-full rounded-full border-2 border-blue-400 flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">FOCUSING KNOWLEDGE</h3>
              <p className="text-gray-600 text-sm italic leading-relaxed">
                The world without photography will be meaningless to us if there is no light.
              </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;

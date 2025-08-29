import React, { useState } from 'react'
import logo from '../../assets/images/nextview.png'
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <header className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 bg-white/80 backdrop-blur-md border-b border-blue-200 shadow-lg">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 ">

            <img src={logo} alt="logo" className="w-10 h-10" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            NextView
          </span>
        </div>

        {/* Center: Nav Links - Desktop */}
        <nav className="hidden lg:flex space-x-6 xl:space-x-8 text-gray-700 font-semibold">
          <a href="#home" className="text-blue-600 px-3 py-2 rounded transition-all duration-200 hover:bg-blue-50 hover:text-blue-700">Home</a>
          <a href="#services" className="text-gray-700 px-3 py-2 rounded transition-all duration-200 hover:bg-blue-50 hover:text-blue-600">Services</a>
          <a href="#portfolio" className="text-gray-700 px-3 py-2 rounded transition-all duration-200 hover:bg-blue-50 hover:text-blue-600">Portfolio</a>

          <a href="#about" className="text-gray-700 px-3 py-2 rounded transition-all duration-200 hover:bg-blue-50 hover:text-blue-600">About</a>
          <a href="#contact" className="text-gray-700 px-3 py-2 rounded transition-all duration-200 hover:bg-blue-50 hover:text-blue-600">Contact</a>
        </nav>

        {/* Right: CTA - Desktop */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-sm lg:text-base shadow-lg hover:shadow-xl transform hover:scale-105 btn-animate"
          >
            Book Session
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 text-blue-600 hover:text-blue-800 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden w-full bg-white/95 backdrop-blur-md shadow-xl border-t border-blue-200">
          <nav className="flex flex-col">
            <a href="#home" className="text-blue-600 hover:text-blue-800 px-4 sm:px-6 py-3 border-b border-blue-100 transition-all duration-200 hover:bg-blue-50">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 px-4 sm:px-6 py-3 border-b border-blue-100 transition-all duration-200 hover:bg-blue-50">Services</a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 px-4 sm:px-6 py-3 border-b border-blue-100 transition-all duration-200 hover:bg-blue-50">Portfolio</a>
            <a href="#team" className="text-gray-700 hover:text-blue-600 px-4 sm:px-6 py-3 border-b border-blue-100 transition-all duration-200 hover:bg-blue-50">Team</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 px-4 sm:px-6 py-3 border-b border-blue-100 transition-all duration-200 hover:bg-blue-50">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 px-4 sm:px-6 py-3 border-b border-blue-100 transition-all duration-200 hover:bg-blue-50">Contact</a>
            <div className="px-4 sm:px-6 py-4">
              <a
                href="#contact"
                className="block w-full text-center px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg btn-animate"
              >
                Book Session
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header

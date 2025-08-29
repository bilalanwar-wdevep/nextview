import React from 'react';
import omar from '../assets/images/omar.png';
const About = () => {
  const teamMembers = [
    {
      name: "M Omar",
      title: "Lead Drone Pilot",
      image: omar,
      social: {
        twitter: "#",
        facebook: "#",
        linkedin: "#"
      }
    },
    {
      name: "M Asad",
      title: "AI Specialist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      social: {
        twitter: "#",
        facebook: "#",
        linkedin: "#"
      }
    },
    {
      name: "Sarah Chen",
      title: "Creative Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=fac",
      social: {
        twitter: "#",
        facebook: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-x-hidden">
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
        <div id="team" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fade-in-up">
            OUR AMAZING TEAM
          </h2>
          <p className="text-xl text-gray-600 italic animate-fade-in-up animation-delay-200">
            The brilliant minds behind NextView's drone photography revolution.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              {/* Profile Picture */}
              <div className="relative mb-6 mx-auto w-48 h-48 group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg group-hover:shadow-xl transition-all duration-500"
                />
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Member Info */}
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-lg text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {member.title}
                </p>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-3 pt-2">
                  <a
                    href={member.social.twitter}
                    className="w-10 h-10 bg-black hover:bg-blue-500 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a
                    href={member.social.facebook}
                    className="w-10 h-10 bg-black hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:-rotate-12"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="w-10 h-10 bg-black hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Floating Elements for Each Card */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-200 rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-purple-200 rounded-full opacity-20 animate-float animation-delay-2000"></div>
            </div>
          ))}
        </div>

        {/* Bottom Description */}
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up animation-delay-1000">
          <p className="text-lg text-gray-600 leading-relaxed">
            Our team combines expertise in drone technology, artificial intelligence, and creative vision to deliver 
            exceptional aerial photography experiences. With years of experience and cutting-edge equipment, 
            we transform ordinary moments into extraordinary aerial masterpieces.
          </p>
        </div>

        {/* Additional Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
          {[
            { number: "500+", label: "Projects Completed" },
            { number: "50+", label: "Happy Clients" },
            { number: "24/7", label: "Support Available" },
            { number: "100%", label: "Satisfaction Rate" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${1200 + index * 200}ms` }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

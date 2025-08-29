import React from 'react';

const Services = () => {
  const services = [
    {
      number: "01",
      title: "Aerial Photography",
      description: "Capture breathtaking visuals from new perspectives with our professional drone photography services.",
      buttonText: "Learn More",
      highlighted: false,
      price: "299",
      currency: "$",
      period: "/session",
      features: ["4K Resolution", "Professional Editing", "Multiple Angles", "Quick Delivery"]
    },
    {
      number: "02",
      title: "Drone Videography",
      description: "Cinematic aerial videos for real estate, events, and commercial projects with smooth motion.",
      buttonText: "Learn More",
      highlighted: false,
      price: "499",
      currency: "$",
      period: "/session",
      features: ["Cinematic Footage", "Smooth Transitions", "Music Integration", "Multiple Formats"]
    },
    {
      number: "03",
      title: "AI Enhancement",
      description: "Transform images with cutting-edge artificial intelligence for superior quality and analysis.",
      buttonText: "Learn More",
      highlighted: true,
      price: "199",
      currency: "$",
      period: "/image",
      features: ["AI Processing", "Quality Enhancement", "Smart Analysis", "Batch Processing"]
    },
    {
      number: "04",
      title: "Mapping & Analytics",
      description: "Generate valuable insights from detailed aerial surveys and advanced data processing.",
      buttonText: "Learn More",
      highlighted: false,
      price: "799",
      currency: "$",
      period: "/project",
      features: ["3D Mapping", "Data Analysis", "Detailed Reports", "Export Options"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-6 animate-fade-in-up">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            What We Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in-up animation-delay-200">
            Drone Photography Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            From breathtaking aerial views to cinematic drone footage, we provide cutting-edge drone photography 
            services that capture your vision from a whole new perspective.
          </p>
        </div>

        {/* Services Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative rounded-2xl p-8 transition-all duration-500 transform hover:scale-105 animate-fade-in-up cursor-pointer ${
                service.highlighted 
                  ? 'bg-gradient-to-br from-blue-900 to-blue-800 text-white shadow-2xl hover:shadow-3xl hover:from-blue-800 hover:to-blue-700' 
                  : 'bg-white text-gray-800 border border-gray-200 hover:border-blue-400 hover:shadow-xl hover:-translate-y-2 hover:bg-blue-50'
              }`}
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              {/* Number with Dotted Line */}
              <div className="relative mb-6">
                <div className={`text-6xl font-black mb-2 transition-all duration-300 group-hover:scale-110 animate-pulse-slow ${
                  service.highlighted ? 'text-white' : 'text-gray-800'
                }`}>
                  {service.number}
                </div>
                {/* Animated Dotted Line */}
                <div className="absolute left-0 top-full w-0.5 h-16 border-l-2 border-dotted border-gray-300 group-hover:h-20 transition-all duration-500 animate-pulse"></div>
              </div>

              {/* Modern Price Tag */}
              <div className={`absolute top-6 right-6 text-right z-10 ${
                service.highlighted ? 'text-white' : 'text-gray-800'
              }`}>
                <div className={`text-3xl font-bold ${
                  service.highlighted ? 'text-blue-200' : 'text-blue-600'
                }`}>
                  {service.currency}{service.price}
                </div>
                <div className={`text-sm ${
                  service.highlighted ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {service.period}
                </div>
                {/* Price Tag Background */}
                <div className={`absolute inset-0 -z-10 rounded-lg ${
                  service.highlighted 
                    ? 'bg-white/20 backdrop-blur-sm' 
                    : 'bg-blue-100'
                } px-3 py-2 -m-3`}></div>
              </div>

              {/* Content */}
              <h3 className={`text-xl font-bold mb-4 transition-all duration-300 group-hover:text-blue-600 animate-fade-in-up ${
                service.highlighted ? 'text-white group-hover:text-blue-200' : 'text-gray-800'
              }`}>
                {service.title}
              </h3>
              
              <p className={`text-sm leading-relaxed mb-6 transition-all duration-300 animate-fade-in-up animation-delay-200 ${
                service.highlighted ? 'text-blue-100' : 'text-gray-600'
              }`}>
                {service.description}
              </p>

              {/* Features List */}
              <div className="mb-6">
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className={`flex items-center text-xs ${
                      service.highlighted ? 'text-blue-100' : 'text-gray-600'
                    }`}>
                      <svg className={`w-3 h-3 mr-2 flex-shrink-0 ${
                        service.highlighted ? 'text-blue-300' : 'text-blue-500'
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Animated Button */}
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                service.highlighted 
                  ? 'bg-blue-800 text-white hover:bg-blue-700 hover:shadow-lg' 
                  : 'bg-blue-600 text-white border-2 border-blue-600 hover:bg-blue-700 hover:border-blue-700 hover:shadow-md'
              }`}>
                <span className="inline-flex items-center">
                  {service.buttonText}
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300 animate-pulse-slow" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>

              {/* Background Image for Highlighted Card */}
              {service.highlighted && (
                <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-800"></div>
                  <div className="absolute top-4 left-4 w-32 h-32 bg-blue-700 rounded-lg animate-pulse animation-delay-1000"></div>
                  <div className="absolute top-8 left-8 w-24 h-24 bg-blue-600 rounded-lg animate-pulse animation-delay-1500"></div>
                  <div className="absolute bottom-4 right-4 w-20 h-20 bg-blue-700 rounded-lg animate-pulse animation-delay-2000"></div>
                </div>
              )}

              {/* Floating Elements for Regular Cards */}
              {!service.highlighted && (
                <>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-1000"></div>
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse animation-delay-2000"></div>
                  <div className="absolute top-1/2 right-6 w-1 h-1 bg-blue-300 rounded-full animate-pulse animation-delay-3000"></div>
                </>
              )}

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                service.highlighted 
                  ? 'bg-gradient-to-r from-blue-400/10 to-purple-400/10' 
                  : 'bg-gradient-to-r from-blue-100/30 to-purple-100/30'
              }`}></div>

              {/* Continuous Floating Animation */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-200 rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-purple-200 rounded-full opacity-20 animate-float animation-delay-2000"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-1000">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-black via-blue-900 to-indigo-900 p-16">
            {/* Abstract Glossy Shapes */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-gray-800/30 to-gray-900/30 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
            <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-l from-gray-800/20 to-gray-900/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
            
            {/* Star-like Glows */}
            <div className="absolute bottom-20 left-20 w-2 h-2 bg-white rounded-full shadow-lg shadow-white/50 animate-pulse"></div>
            <div className="absolute bottom-32 right-32 w-1.5 h-1.5 bg-white rounded-full shadow-lg shadow-white/50 animate-pulse animation-delay-1000"></div>
            
            {/* Content */}
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">
                Need a Custom Package?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                We offer custom drone photography packages tailored to your unique requirements. 
                Let's discuss your vision and create the perfect aerial experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-black font-bold text-lg px-10 py-4 rounded-2xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/20">
                  Get Custom Quote
                </button>
                <button className="bg-transparent hover:bg-white/10 text-white font-bold text-lg px-10 py-4 rounded-2xl border-2 border-white/30 hover:border-white/50 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

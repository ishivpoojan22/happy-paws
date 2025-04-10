import React, { useState, useEffect } from 'react';
import { Heart, PawPrint, Clock, Shield, Phone, Mail, MapPin, ChevronUp, Menu, X } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <PawPrint className={`h-8 w-8 ${isScrolled ? 'text-yellow-500' : 'text-white'}`} />
              <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Happy Paws</span>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#services" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-yellow-500 transition duration-300`}>Services</a>
              <a href="#about" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-yellow-500 transition duration-300`}>About</a>
              <a href="#contact" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-yellow-500 transition duration-300`}>Contact</a>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="pt-4 pb-2 space-y-2">
              <a href="#services" className={`block ${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-yellow-500`}>Services</a>
              <a href="#about" className={`block ${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-yellow-500`}>About</a>
              <a href="#contact" className={`block ${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-yellow-500`}>Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=2070"
            alt="Happy dog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl" data-aos="fade-up">
              <h1 className="text-6xl font-bold text-white mb-6 leading-tight">The Future of <span className="text-yellow-400">Pet Care</span> is Here</h1>
              <p className="text-xl text-white/90 mb-8">Experience next-generation pet care services powered by love and innovation</p>
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition duration-300 transform hover:scale-105 hover:shadow-xl">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="h-8 w-8 text-yellow-600" />,
                title: "Pet Sitting",
                description: "Professional in-home pet sitting services with real-time updates and monitoring."
              },
              {
                icon: <Clock className="h-8 w-8 text-yellow-600" />,
                title: "Smart Walking",
                description: "GPS-tracked walks with activity monitoring and instant status updates."
              },
              {
                icon: <Shield className="h-8 w-8 text-yellow-600" />,
                title: "Tech-Enhanced Care",
                description: "Advanced pet monitoring with health tracking and emergency response."
              }
            ].map((service, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 cursor-pointer ${activeService === index ? 'ring-2 ring-yellow-400' : ''}`}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transform transition-transform duration-300 hover:rotate-12">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-white -z-10"></div>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-yellow-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1587764379873-97837921fd44?auto=format&fit=crop&q=80&w=2070"
                alt="Pet care professional with dog"
                className="rounded-2xl shadow-2xl relative z-10 transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose Happy Paws?</h2>
              <p className="text-gray-600 mb-8">Combining cutting-edge technology with compassionate care, we're revolutionizing the way pets receive attention and love.</p>
              <div className="space-y-6">
                {[
                  "AI-Powered Pet Monitoring",
                  "24/7 Emergency Response",
                  "Real-Time Health Tracking",
                  "Smart Collar Integration"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="bg-yellow-100 p-3 rounded-full group-hover:bg-yellow-200 transition-colors duration-300">
                      <PawPrint className="h-6 w-6 text-yellow-600" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-shadow duration-300"
                    placeholder="Shiv Poojan"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-shadow duration-300"
                    placeholder="myselfsp22@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Message</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-shadow duration-300 h-32"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 w-full transform hover:scale-105 hover:shadow-lg">
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-8">
              {[
                { icon: <Phone className="h-6 w-6" />, text: "+91 123456789" },
                { icon: <Mail className="h-6 w-6" />, text: "contact@happypaws.com" },
                { icon: <MapPin className="h-6 w-6" />, text: "Ghaziabad [Crossing Republik], PC 201009" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-yellow-100 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <span className="text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <PawPrint className="h-8 w-8 text-yellow-400" />
                <span className="text-2xl font-bold">Happy Paws</span>
                 
              </div>
              <p className="text-gray-400">Leading the future of pet care with technology and compassion.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Pet Sitting</li>
                <li className="text-gray-400">Smart Walking</li>
                <li className="text-gray-400">Tech-Enhanced Care</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  <PawPrint className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  <Heart className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Happy Paws. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-yellow-400 p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-yellow-300 hover:scale-110 ${
          isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <ChevronUp className="h-6 w-6 text-gray-900" />
      </button>
    </div>
  );
}

export default App;
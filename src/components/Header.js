import React, { useState } from 'react';
import { Menu, X, ChevronDown, Star } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-slate-900">Sargas</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative">
              <button 
                className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-slate-200 py-2"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <a href="#" className="block px-4 py-2 text-slate-700 hover:bg-slate-50">Web Development</a>
                  <a href="#" className="block px-4 py-2 text-slate-700 hover:bg-slate-50">Mobile Development</a>
                  <a href="#" className="block px-4 py-2 text-slate-700 hover:bg-slate-50">Support and Maintenance</a>
                </div>
              )}
            </div>
            <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors">Portfolio</a>
            <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors">Contacts</a>
          </nav>

          {/* Clutch Rating & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-slate-900 text-white px-3 py-2 rounded-lg">
              <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-xs font-bold">C</div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-semibold">4.9</span>
                  <div className="flex space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-slate-300">Based on 6 Clutch reviews</span>
              </div>
            </div>
            <button className="btn-primary">Book a Call</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors">Portfolio</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors">Contacts</a>
              <button className="btn-primary w-full mt-4">Book a Call</button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
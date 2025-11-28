import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { fadeInPreset } from '../lib/motionPresets';

const Footer = () => {
  const reduce = useReducedMotion();

  const footerContent = (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold">Sargas</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              AI-powered web and mobile development solutions delivered in 12 weeks. We help businesses transform their digital presence with cutting-edge technology.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-slate-400">Feel free to drop us a note:</span>
              <a href="mailto:contact@sargas.io" className="text-blue-400 hover:text-blue-300 transition-colors">
                contact@sargas.io
              </a>
            </div>
          </div>

          {/* Menu Links */}
          <div>
            <h3 className="font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Contacts</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Mobile Development</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Support and Maintenance</a></li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

  if (reduce) {
    return footerContent;
  }

  return (
    <motion.div {...fadeInPreset(0.1, 0.8)}>
      {footerContent}
    </motion.div>
  );
};

export default Footer;
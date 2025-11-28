import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeLeftPreset, bounceInPreset } from '../lib/motionPresets';

const CaseStudies = () => {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Case Studies</h2>
          </div>

          <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">Dios</h3>
                <p className="text-blue-100 text-lg mb-8">
                  A comprehensive platform that revolutionized how businesses manage their digital presence and customer relationships.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="bg-white/20 px-4 py-2 rounded-full text-sm">React</span>
                  <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Node.js</span>
                  <span className="bg-white/20 px-4 py-2 rounded-full text-sm">MongoDB</span>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-2xl font-bold">$2,500</div>
                    <div className="text-blue-200">Project Value</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">12w</div>
                    <div className="text-blue-200">Timeline</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=400&fit=crop" 
                  alt="Dios Platform"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div 
          {...fadeLeftPreset(0.1, 0.8)}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Case Studies</h2>
        </motion.div>

        <motion.div 
          {...bounceInPreset(0.2, 1.2)}
          className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-8 lg:p-12 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">Dios</h3>
              <p className="text-blue-100 text-lg mb-8">
                A comprehensive platform that revolutionized how businesses manage their digital presence and customer relationships.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm">React</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Node.js</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm">MongoDB</span>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold">$2,500</div>
                  <div className="text-blue-200">Project Value</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">12w</div>
                  <div className="text-blue-200">Timeline</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=400&fit=crop" 
                alt="Dios Platform"
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
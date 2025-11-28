import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { blurUpPreset, elasticUpPreset, staggerFadeUpPreset } from '../lib/motionPresets';

const Hero = () => {
  const reduce = useReducedMotion();

  const techStack = [
    { name: 'nestjs', color: 'text-red-600' },
    { name: 'mysql', color: 'text-blue-600' },
    { name: 'mongodb', color: 'text-green-600' },
    { name: 'nginx', color: 'text-green-700' },
    { name: 'redis', color: 'text-red-500' },
    { name: 'typescript', color: 'text-blue-500' }
  ];

  if (reduce) {
    return (
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              <span className="gradient-text">AI-powered</span><br />
              web and mobile<br />
              <span className="gradient-text">in 12 weeks</span>
            </h1>
            
            <div className="flex items-center justify-center space-x-2 mb-8">
              <span className="text-slate-600">Powered by</span>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"></div>
                <span className="font-semibold text-slate-900">n8n</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <button className="btn-primary">Start Discovery</button>
              <button className="btn-secondary flex items-center space-x-2">
                <span>Portfolio Showcase</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              {techStack.map((tech, index) => (
                <span key={tech.name} className={`tech-tag bg-white/80 ${tech.color} border border-slate-200`}>
                  #{tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section 
      {...blurUpPreset(0.1, 1.2)}
      className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            {...elasticUpPreset(0.2, 1.3)}
            className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            <span className="gradient-text">AI-powered</span><br />
            web and mobile<br />
            <span className="gradient-text">in 12 weeks</span>
          </motion.h1>
          
          <motion.div 
            {...staggerFadeUpPreset(0, 0.05, 0.8)}
            className="flex items-center justify-center space-x-2 mb-8"
          >
            <span className="text-slate-600">Powered by</span>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"></div>
              <span className="font-semibold text-slate-900">n8n</span>
            </div>
          </motion.div>

          <motion.div 
            {...staggerFadeUpPreset(1, 0.05, 0.8)}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
          >
            <button className="btn-primary">Start Discovery</button>
            <button className="btn-secondary flex items-center space-x-2">
              <span>Portfolio Showcase</span>
            </button>
          </motion.div>

          <motion.div 
            {...staggerFadeUpPreset(2, 0.05, 0.8)}
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
          >
            {techStack.map((tech, index) => (
              <motion.span 
                key={tech.name}
                {...staggerFadeUpPreset(index, 0.03, 0.6)}
                className={`tech-tag bg-white/80 ${tech.color} border border-slate-200`}
              >
                #{tech.name}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
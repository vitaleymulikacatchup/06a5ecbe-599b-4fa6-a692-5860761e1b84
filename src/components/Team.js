import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { rotateScalePreset } from '../lib/motionPresets';

const Team = () => {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Sargas Team</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Meet the talented professionals behind our successful projects and innovative solutions.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div 
          {...rotateScalePreset(0.1, 1.1)}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Sargas Team</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Meet the talented professionals behind our successful projects and innovative solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
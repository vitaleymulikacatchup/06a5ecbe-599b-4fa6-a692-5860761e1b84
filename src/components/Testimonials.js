import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { slideUpPreset } from '../lib/motionPresets';

const Testimonials = () => {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Testimonials</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Hear what our clients say about working with us and the results we've delivered for their businesses.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <motion.div 
          {...slideUpPreset(0.1, 1.0)}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Testimonials</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Hear what our clients say about working with us and the results we've delivered for their businesses.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
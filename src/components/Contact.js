import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { scaleInPreset } from '../lib/motionPresets';

const Contact = () => {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              How can we help? Let's talk
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
              Ready to start your next project? Get in touch with us and let's discuss how we can bring your ideas to life.
            </p>
            <button className="btn-primary">Get Started</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <motion.div 
          {...scaleInPreset(0.1, 0.9)}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            How can we help? Let's talk
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Ready to start your next project? Get in touch with us and let's discuss how we can bring your ideas to life.
          </p>
          <button className="btn-primary">Get Started</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
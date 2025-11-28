import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { staggerScalePreset } from '../lib/motionPresets';

const Stats = () => {
  const reduce = useReducedMotion();

  const stats = [
    { value: '92%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Projects Completed' },
    { value: '30k+', label: 'Lines of Code' },
    { value: '100%', label: 'On-Time Delivery' }
  ];

  if (reduce) {
    return (
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              {...staggerScalePreset(index, 0.06, 0.7)}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-slate-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeRightPreset, staggerSlideLeftPreset } from '../lib/motionPresets';

const Services = () => {
  const reduce = useReducedMotion();

  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop'
    }
  ];

  if (reduce) {
    return (
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Explore our services</h2>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 text-lg mb-6">{service.description}</p>
                  <button className="btn-primary">Learn More</button>
                </div>
                <div className="flex-1">
                  <div className="relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-64 lg:h-80 object-cover rounded-2xl card-shadow"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 bg-white rounded-2xl p-8 lg:p-12 card-shadow text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Get the same high-quality service for a smaller task
            </h3>
            <button className="btn-primary">Start Small Project</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <motion.div 
          {...fadeRightPreset(0.1, 0.8)}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Explore our services</h2>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              {...staggerSlideLeftPreset(index, 0.04, 0.8)}
              className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 text-lg mb-6">{service.description}</p>
                <button className="btn-primary">Learn More</button>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-2xl card-shadow"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          {...staggerSlideLeftPreset(2, 0.04, 0.8)}
          className="mt-24 bg-white rounded-2xl p-8 lg:p-12 card-shadow text-center"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            Get the same high-quality service for a smaller task
          </h3>
          <button className="btn-primary">Start Small Project</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
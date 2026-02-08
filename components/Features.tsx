import React from 'react';
import { BENEFITS } from '../constants';

const Features: React.FC = () => {
  return (
    <div id="features" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-blue-900">
            Kenapa Memilih Smart Lab?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-b-4 border-brand-blue">
                <div className="w-14 h-14 bg-blue-100 text-brand-blue rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
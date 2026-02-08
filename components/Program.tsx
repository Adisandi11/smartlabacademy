import React from 'react';
import { COURSES, CONTACT_INFO } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const Program: React.FC = () => {
  return (
    <div id="program" className="bg-blue-50 py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-blue-900">Pilihan Kelas</h2>
          <p className="mt-4 text-lg text-gray-600">Sesuaikan dengan jenjang pendidikan putra-putri Anda</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {COURSES.map((course) => (
            <div 
              key={course.id}
              className={`relative bg-white rounded-3xl border-2 border-gray-100 shadow-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col ${course.isPopular ? 'ring-4 ring-yellow-400 ring-opacity-50' : ''}`}
            >
              {/* Header */}
              <div className={`${course.color} p-6 text-center text-white`}>
                <h3 className="text-2xl font-bold uppercase tracking-wider">{course.title}</h3>
                <p className="text-blue-100 font-medium text-lg">{course.level}</p>
              </div>

              {/* Body */}
              <div className="p-8 flex-1">
                <ul className="space-y-4">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-medium text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing Footer with CTA */}
              <div className="bg-brand-yellow p-6 text-center">
                 <p className="text-blue-900 font-bold text-lg">Hanya</p>
                 <div className="flex items-center justify-center gap-1">
                    <span className="text-3xl font-extrabold text-blue-900">{course.price}</span>
                    <span className="text-blue-800 text-sm font-semibold">/ Bulan</span>
                 </div>
                 <p className="text-blue-800 text-sm mt-1 font-medium bg-white/30 inline-block px-3 py-1 rounded-full mb-4">
                   {course.duration}
                 </p>
                 
                 {/* New CTA Button inside pricing card */}
                 <a 
                   href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(`Halo Smart Lab, saya mau daftar paket ${course.title}`)}`}
                   target="_blank"
                   rel="noreferrer"
                   className="block w-full bg-white hover:bg-blue-50 text-blue-900 font-bold py-3 px-4 rounded-xl shadow-sm transition-colors border-2 border-transparent hover:border-blue-200 flex items-center justify-center gap-2"
                 >
                   Pilih Paket Ini
                   <ArrowRight className="w-4 h-4" />
                 </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-red-100 border-l-4 border-red-500 p-4 rounded shadow-sm animate-pulse">
            <p className="text-red-700 font-bold text-lg">
              ⚠️ Kuota Terbatas! SEGERA DAFTAR!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
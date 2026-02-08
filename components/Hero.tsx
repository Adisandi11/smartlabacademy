import React, { useState } from 'react';
import { ArrowRight, Sparkles, Monitor, Star } from 'lucide-react';

const Hero: React.FC = () => {
  // URL Gambar Utama: Ilustrasi 3D yang bersih dan modern (Pixabay)
  const [imgSrc, setImgSrc] = useState("https://cdn.pixabay.com/photo/2021/07/30/08/54/online-learning-6508935_1280.png");
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      // Fallback ke foto Unsplash yang dijamin bisa diakses (Foto anak ceria belajar komputer)
      // Ini adalah jaring pengaman jika gambar kartun gagal dimuat
      setImgSrc("https://images.pexels.com/photos/10638069/pexels-photo-10638069.jpeg");
    }
  };

  return (
    <div id="home" className="relative bg-[#E0F2FE] pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Decorative Background Elements (Bubbles/Blobs) */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce delay-1000"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute top-40 left-1/4 w-24 h-24 bg-green-300 rounded-full mix-blend-multiply filter blur-lg opacity-60 animate-bounce"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          
          {/* Badge 'Kursus Terbaik' */}
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg mb-8 border-4 border-yellow-300 transform -rotate-2 hover:rotate-0 transition-transform cursor-default">
             <Star className="w-5 h-5 text-yellow-500 fill-current animate-spin-slow" />
             <span className="text-base font-bold text-blue-800 tracking-wide font-display">Kursus Paling Seru!</span>
             <Star className="w-5 h-5 text-yellow-500 fill-current animate-spin-slow" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-blue-900 mb-6 leading-tight drop-shadow-sm">
            Jago Komputer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
              Sejak Dini!
            </span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-slate-700 font-bold font-display bg-white/60 p-4 rounded-2xl backdrop-blur-sm border-2 border-white shadow-sm">
            "Belajar komputer itu asyik lho, <br className="md:hidden"/> yuk main sambil belajar di Smart Lab!" 🚀
          </p>
          
          {/* Tombol CTA */}
          <div className="mt-10 flex justify-center gap-4">
            <a href="#program" className="group flex items-center justify-center px-8 py-4 border-b-8 border-yellow-500 text-xl font-black rounded-2xl text-blue-900 bg-yellow-300 hover:bg-yellow-200 hover:border-yellow-400 active:border-b-0 active:translate-y-2 transition-all shadow-xl">
              Mulai Belajar
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          {/* Container Gambar */}
          <div className="mt-16 relative mx-auto w-full max-w-5xl">
             
             {/* Frame Gambar bentuk Blob/Awan */}
             <div className="relative bg-white rounded-[3rem] p-4 md:p-8 shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border-4 border-dashed border-blue-200">
               
               {/* Background lingkaran di belakang gambar */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-blue-50 rounded-full opacity-50 z-0"></div>

               {/* Gambar Utama */}
               <div className="relative z-10 w-full min-h-[300px] flex items-center justify-center">
                 <img 
                   src={imgSrc} 
                   alt="Teman-teman Smart Lab Belajar Komputer" 
                   className="w-full h-auto max-h-[500px] object-contain hover:scale-105 transition-transform duration-700 ease-in-out drop-shadow-xl"
                   onError={handleError}
                   referrerPolicy="no-referrer"
                 />
               </div>

               {/* Floating Icon: Monitor/Tech */}
               <div className="absolute -top-6 -right-4 md:right-10 animate-bounce z-20">
                  <div className="bg-purple-100 p-4 rounded-2xl shadow-lg border-4 border-white transform rotate-12">
                    <Monitor className="w-8 h-8 md:w-10 md:h-10 text-purple-600" />
                  </div>
               </div>

               {/* Floating Icon: Star/Achievement */}
               <div className="absolute -bottom-6 -left-4 md:left-10 animate-bounce delay-700 z-20">
                  <div className="bg-yellow-100 p-4 rounded-2xl shadow-lg border-4 border-white transform -rotate-12">
                    <Star className="w-8 h-8 md:w-10 md:h-10 text-yellow-600 fill-current" />
                  </div>
               </div>

               {/* Badge Bawah */}
               <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-max max-w-[95%] z-20">
                 <div className="bg-white border-4 border-blue-400 px-6 py-3 rounded-full shadow-xl flex items-center gap-3">
                    <span className="text-2xl">😎</span>
                    <div className="text-left">
                      <p className="text-blue-900 font-black text-sm md:text-lg leading-tight font-display">Dijamin Seru!</p>
                      <p className="text-gray-500 text-xs font-bold">Anti Membosankan</p>
                    </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
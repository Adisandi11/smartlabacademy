import React from 'react';
import { Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-yellow-100 rounded-full opacity-50 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-3xl md:text-5xl font-display font-bold text-blue-900 mb-8 leading-tight">
            Membangun Generasi <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Cerdas Digital dari Desa
            </span>
          </h2>

          <div className="bg-white border-2 border-blue-100 rounded-3xl p-8 shadow-xl relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-brand-yellow p-3 rounded-full border-4 border-white shadow-md">
              <Heart className="w-8 h-8 text-blue-900 fill-current" />
            </div>

            <div className="mt-4 space-y-6 text-lg text-gray-700 leading-relaxed font-medium">
              <p>
                "Di era modern ini, kami percaya bahwa <span className="text-blue-600 font-bold">anak desa pun punya hak yang sama</span> untuk sukses di dunia digital. 
                Smart Lab Academy didirikan atas kepedulian kami melihat banyaknya anak-anak yang cerdas menggunakan gadget untuk bermain, 
                namun belum memanfaatkannya untuk belajar dan berkarya."
              </p>
              <p>
                "Kami hadir untuk mengubah kebiasaan tersebut. Dari sekadar <span className="italic font-bold text-gray-900">Penikmat Teknologi</span> menjadi <span className="italic font-bold text-brand-blue">Kreator Teknologi</span>. 
                Kami ingin memastikan anak-anak di lingkungan ini memiliki skill komputer yang mumpuni sebagai bekal masa depan mereka, 
                tanpa harus mengeluarkan biaya yang mahal."
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-blue-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Info Text */}
          <div className="space-y-8 order-2 md:order-1">
            <h2 className="text-4xl font-display font-bold text-brand-yellow mb-6">
              Lokasi & Kontak
            </h2>
            
            <div className="flex items-start gap-4">
              <div className="bg-blue-800 p-3 rounded-full shrink-0">
                <MapPin className="w-6 h-6 text-brand-yellow" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">Alamat</h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  {CONTACT_INFO.address}
                </p>
                <p className="text-sm text-blue-300 mt-1">
                  (Cek peta di samping)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-800 p-3 rounded-full shrink-0">
                <Phone className="w-6 h-6 text-brand-yellow" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">Hubungi Kami</h3>
                <p className="text-blue-100 text-lg mb-2">
                  {CONTACT_INFO.displayPhone})
                </p>
                <a 
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-bold transition-transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="bg-white rounded-2xl p-2 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 order-1 md:order-2">
             <div className="w-full h-80 md:h-96 bg-gray-200 rounded-xl overflow-hidden relative">
                 <iframe 
                   title="Lokasi Smart Lab Academy"
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }}
                   loading="lazy" 
                   allowFullScreen
                   referrerPolicy="no-referrer-when-downgrade"
                   // Menggunakan query alamat lengkap hingga RT/RW dan Provinsi
                   src="https://maps.google.com/maps?q=Dusun+Kliwon,+RT+14+RW+03,+Desa+Karanganyar,+Kecamatan+Darma,+Kabupaten+Kuningan,+Jawa+Barat&t=&z=17&ie=UTF8&iwloc=&output=embed"
                 >
                 </iframe>
             </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 text-center text-blue-300">
          <p>&copy; {new Date().getFullYear()} Smart Lab Academy. Dibuat dengan ❤️ di Karanganyar.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

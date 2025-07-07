import React from 'react';
import { GraduationCap, MapPin, Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#E9E6DD' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#000000' }}>
            Tentang Saya
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Profile Photo Section - Made Much Larger */}
              <div className="mb-8 flex justify-center md:justify-start">
                <div className="relative">
                  <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-xl overflow-hidden shadow-xl border-6 border-white">
                    <img
                      src="https://drive.google.com/file/d/1SRzRlHQRRXQdENa5uoGMRFhyg_Zvvt1_/view?usp=sharing"
                      alt="Advent Clement Zendrato - Professional Photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#0274BD' }}>
                    <GraduationCap size={32} className="text-white" />
                  </div>
                </div>
              </div>

              <div className="prose prose-lg mb-8" style={{ color: '#000000' }}>
                <p className="mb-6">
                  Saya adalah seorang mahasiswa Teknik Informatika yang memiliki passion mendalam 
                  di bidang analisis data dan teknologi. Dengan ketertarikan yang kuat terhadap 
                  Machine Learning dan IoT, saya terus mengembangkan kemampuan untuk mengubah 
                  data menjadi insights yang berharga.
                </p>
                
                <p>
                  Perjalanan saya dimulai dari eksplorasi coding sederhana hingga mengembangkan 
                  berbagai proyek yang menggabungkan analisis data, pengembangan aplikasi, dan 
                  solusi IoT. Setiap proyek memberikan pengalaman berharga dalam memahami 
                  kompleksitas data dan cara mengoptimalkannya untuk kebutuhan bisnis.
                </p>
              </div>

              <a
                href="/public/assets/CV_Resume.pdf"
                download="Advent_Clement_Zendrato_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#0274BD' }}
                onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#025a9b'}
                onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#0274BD'}
              >
                <Download size={20} />
                Download CV
              </a>
            </div>

            <div className="rounded-xl p-8 shadow-lg" style={{ backgroundColor: '#C4AD9D' }}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#000000' }}>
                <GraduationCap style={{ color: '#0274BD' }} size={28} />
                Pendidikan
              </h3>
              
              <div className="space-y-6">
                <div className="border-l-4 pl-4" style={{ borderColor: '#0274BD' }}>
                  <h4 className="font-semibold text-lg" style={{ color: '#000000' }}>
                    S1 Teknik Informatika
                  </h4>
                  <p style={{ color: '#000000' }}>Universitas Nusa Putra</p>
                  <p className="text-sm" style={{ color: '#000000', opacity: 0.7 }}>2023 - sekarang</p>
                  <div className="flex items-center gap-1 mt-2">
                    <MapPin size={16} style={{ color: '#000000', opacity: 0.6 }} />
                    <span className="text-sm" style={{ color: '#000000', opacity: 0.7 }}>Sukabumi, Jawa Barat</span>
                  </div>
                </div>

                <div className="border-l-4 pl-4" style={{ borderColor: '#F57251' }}>
                  <h4 className="font-semibold text-lg" style={{ color: '#000000' }}>
                    SMA SWASTA PEMBDA 1 NIAS
                  </h4>
                  <p style={{ color: '#000000' }}>Sekolah Menengah Atas</p>
                  <p className="text-sm" style={{ color: '#000000', opacity: 0.7 }}>2020 - 2023</p>
                  <div className="flex items-center gap-1 mt-2">
                    <MapPin size={16} style={{ color: '#000000', opacity: 0.6 }} />
                    <span className="text-sm" style={{ color: '#000000', opacity: 0.7 }}>Nias, Sumatera Utara</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

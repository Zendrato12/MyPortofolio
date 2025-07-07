import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Eye } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const texts = [
    'Data Analyst',
    'IoT Developer', 
    'Machine Learning Enthusiast'
  ];

  useEffect(() => {
    const typeText = () => {
      const text = texts[currentIndex];
      if (isTyping) {
        if (currentText.length < text.length) {
          setCurrentText(text.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsTyping(false), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsTyping(true);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const timer = setTimeout(typeText, isTyping ? 100 : 50);
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isTyping, texts]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Programming Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Programming background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-orange-900/30"></div>
      </div>

      {/* Animated Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-orange-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-20 left-40 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Photo - Made Much Larger */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-50 h-50 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-6 border-white shadow-2xl">
                <img
                  src="/image/profil.jpg"
                  alt="Advent Clement Zendrato"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-1 w-12 h-12 bg-green-500 rounded-full border-6 border-white"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
            ADVENT CLEMENT
            <span className="block text-6xl md:text-8xl bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              ZENDRATO
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-200 mb-8 h-8">
            <span className="font-medium">{currentText}</span>
            <span className="animate-blink">|</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToProjects}
              className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
              style={{ backgroundColor: '#0274BD' }}
            >
              <Eye size={20} />
              Lihat Proyek Saya
            </button>
            
          <a
            href="/public/assets/CV_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3 border-2 border-orange-400 text-orange-400 rounded-full font-medium hover:bg-orange-400 hover:text-white transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
            style={{ borderColor: '#F57251', color: '#F57251' }}
          >
            <Eye size={20} />
            Lihat CV
          </a>
          </div>

          <div className="animate-bounce">
            <ChevronDown size={32} className="text-gray-300 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
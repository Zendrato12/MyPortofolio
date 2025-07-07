import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8" style={{ backgroundColor: '#000000' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 text-white">Advent Clement Zendrato</h3>
              <p style={{ color: '#C4AD9D' }}>Data Analyst • IoT Developer • ML Enthusiast</p>
            </div>
            
            <div className="flex items-center gap-2" style={{ color: '#C4AD9D' }}>
              <span>Made with</span>
              <Heart size={16} style={{ color: '#F57251' }} />
              <span>and</span>
              <Code size={16} style={{ color: '#0274BD' }} />
              <span>by ACZ</span>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center" style={{ borderColor: '#C4AD9D' }}>
            <p style={{ color: '#C4AD9D' }}>&copy; 2024 Advent Clement Zendrato. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState } from 'react';
import { ExternalLink, Github, X, Code, Database, Smartphone, Monitor, Cpu, Brain } from 'lucide-react';

const Projects = () => {
  
  type Project = typeof projects[0];
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Superstore Sales Dashboard – Power BI Project',
      category: 'Data Analysis',
      icon: <Brain size={24} />,
      image: '/image/Dashboard_PowerBI.png',
      description: 'Membangun dashboard interaktif dengan Power BI untuk menganalisis penjualan toko Superstore periode 2014–2017',
      features: [
        'Visualisasi Dashboard',
        'Insight',
        'Interaktivitas',
      ],
      tech: ['Power BI', 'Excel', 'DAX'],
      github: 'https://github.com/Zendrato12/SuSuperstore-Sales-Dashboard.git',
    },
    {
      id: 2,
      title: 'Analisis Sentimen Mobile Legends',
      category: 'Machine Learning',
      icon: <Database size={24} />,
      image: '/image/Analisis_sentimen_mlbb.png',
      description: 'Analisis sentimen komprehensif terhadap review dan komentar pengguna Mobile Legends untuk insights bisnis.',
      features: [
        'Scraping data otomatis',
        'Visualisasi sentimen real-time',
        'Dashboard interaktif',
        'Export laporan PDF'
      ],
      tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      github: 'https://github.com/Zendrato12/sentimen-mlbb.git',
      demo: 'https://sentimen-mlbb-bjph9r7g7jfwu2dyyu2snp.streamlit.app/'
    },
    {
      id: 3,
      title: 'Deteksi Emosi Bahasa Indonesia',
      category: 'NLP',
      icon: <Brain size={24} />,
      image: '/image/Deteksi_Emosi.png',
      description: 'Sistem deteksi emosi dari teks bahasa Indonesia menggunakan deep learning dan transformer models.',
      features: [
        'Support bahasa Indonesia',
        'Deteksi 5 emosi utama',
        'API endpoint tersedia',
        'Confidence score'
      ],
      tech: ['Python', 'TensorFlow', 'Transformers', 'FastAPI'],
      github:'#',
      demo: 'https://sistemdeteksiemosidalamteksberbahasaindonesia.streamlit.app/'
    },
    {
      id: 4,
      title: 'Sistem Reservasi Hotel',
      category: 'Desktop App',
      icon: <Code size={24} />,
      image: '/image/RESERVASI1.png',
      description: 'Aplikasi desktop untuk manajemen reservasi kamar hotel dengan GUI yang user-friendly dan database terintegrasi.',
      features: [
        'GUI intuitif dengan Java Swing',
        'Database management system',
        'Laporan reservasi otomatis',
      ],
      tech: ['Java', 'Swing', 'MySQL', 'JDBC'],
      github: 'https://github.com/Zendrato12/Reservasi_Kamar_Hotel.git',
    },
    {
      id: 5,
      title: 'IoT Monitoring Suhu & Kelembaban',
      category: 'IoT',
      icon: <Cpu size={24} />,
      image: '/image/IOT.jpg',
      description: 'Sistem monitoring suhu dan kelembaban real-time menggunakan ESP32 dengan dashboard web berbasis Firebase.',
      features: [
        'Real-time monitoring',
        'Firebase integration',
        'Alert system',
        'Historical data logging'
      ],
      tech: ['ESP32', 'Arduino IDE', 'Firebase', 'HTML/CSS'],
      github: '#',
      demo: '#'
    },
    {
      id: 6,
      title: 'Rancangan Sistem Reservasi Ruangan Berbasis Web',
      category: 'Data Analysis',
      icon: <Monitor size={24} />,
      image: '/image/ComponentDiagram_Reservasi_Ruangan.png.png',
      description: 'Rancangan Sistem informasi reservasi ruangan yang dikembangkan untuk memfasilitasi pemesanan dan pengelolaan ruangan secara digital. Sistem ini dibangun berbasis web dan dirancang menggunakan pendekatan Object-Oriented dan UML, dengan dokumentasi lengkap melalui SRS dan SDS.',
      features: [
        'Pendaftaran dan autentikasi pengguna',
        'Reservasi dan pembatalan ruangan secara online',
        'Pengelolaan data ruangan dan laporan oleh admin',
        'Sistem verifikasi dan pelaporan penggunaan ruangan'
      ],
      tech: ['Object-Oriented Analysis & Design', '(UML)', 'SRS', 'SDS'],
      github: '#',
      demo: '#'
    }
  ];

  const categories = ['All', 'Machine Learning', 'Data Analysis', 'NLP', 'Desktop App', 'IoT'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#000000' }}>
            Proyek Saya
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'text-white shadow-lg'
                    : 'hover:shadow-md'
                }`}
                style={{
                  backgroundColor: activeCategory === category ? '#0274BD' : '#E9E6DD',
                  color: activeCategory === category ? 'white' : '#000000'
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
              
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border-2 border-transparent hover:border-opacity-50"
                onClick={() => setSelectedProject(project)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0274BD';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="mb-2" style={{ color: '#F57251' }}>{project.icon}</div>
                      <p className="text-sm">Klik untuk detail</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold" style={{ color: '#000000' }}>{project.title}</h3>
                    <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#C4AD9D', color: '#000000' }}>
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-sm mb-4 line-clamp-3" style={{ color: '#000000', opacity: 0.7 }}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 rounded"
                        style={{ backgroundColor: '#E9E6DD', color: '#000000' }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs" style={{ color: '#000000', opacity: 0.6 }}>+{project.tech.length - 3} more</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Modal */}
          {selectedProject && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-2" style={{ color: '#000000' }}>{selectedProject.title}</h3>
                      <span className="px-4 py-2 rounded-full text-sm" style={{ backgroundColor: '#C4AD9D', color: '#000000' }}>
                        {selectedProject.category}
                      </span>
                    </div>
                    <div className="text-4xl" style={{ color: '#0274BD' }}>{selectedProject.icon}</div>
                  </div>
                  
                  <p className="mb-6 text-lg leading-relaxed" style={{ color: '#000000', opacity: 0.8 }}>
                    {selectedProject.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3" style={{ color: '#000000' }}>Fitur Utama:</h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#F57251' }}></div>
                          <span style={{ color: '#000000' }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-3" style={{ color: '#000000' }}>Teknologi:</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 rounded-lg font-medium"
                          style={{ backgroundColor: '#E9E6DD', color: '#000000' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    {selectedProject.github && selectedProject.github !== '#' &&(
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-colors duration-200"
                        style={{ backgroundColor: '#000000' }}
                      >
                        <Github size={20} />
                        View Source
                      </a>
                    )}
                    {selectedProject.demo && selectedProject.demo !== '#' && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-colors duration-200"
                        style={{ backgroundColor: '#0274BD' }}
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
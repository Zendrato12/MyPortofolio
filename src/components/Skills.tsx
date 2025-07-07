import React, { useState } from 'react';
import { Code, Database, Monitor, Wrench, FileSpreadsheet, BarChart3, Brain, Cpu, Globe, Smartphone, Palette, GitBranch } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: 'Data Analysis Tools',
      icon: <Database size={24} />,
      skills: [
        { name: 'Python', icon: <Code size={32} />, color: '#F57251' },
        { name: 'SQL', icon: <Database size={32} />, color: '#0274BD' },
        { name: 'Google Sheets', icon: <FileSpreadsheet size={32} />, color: '#0274BD' },
        { name: 'Excel', icon: <FileSpreadsheet size={32} />, color: '#F57251' },
        { name: 'Power BI', icon: <BarChart3 size={32} />, color: '#0274BD' }
      ]
    },
    {
      title: 'Libraries & Frameworks',
      icon: <Code size={24} />,
      skills: [
        { name: 'Pandas', icon: <Database size={32} />, color: '#0274BD' },
        { name: 'NumPy', icon: <Code size={32} />, color: '#F57251' },
        { name: 'Scikit-learn', icon: <Brain size={32} />, color: '#0274BD' },
        { name: 'Matplotlib', icon: <BarChart3 size={32} />, color: '#F57251' },
        { name: 'Seaborn', icon: <BarChart3 size={32} />, color: '#0274BD' }
      ]
    },
    {
      title: 'Platforms & Hardware',
      icon: <Monitor size={24} />,
      skills: [
        { name: 'Streamlit', icon: <Globe size={32} />, color: '#F57251' },
        { name: 'Firebase', icon: <Database size={32} />, color: '#0274BD' },
        { name: 'Kodular', icon: <Smartphone size={32} />, color: '#F57251' },
        { name: 'Arduino IDE', icon: <Cpu size={32} />, color: '#0274BD' },
        { name: 'ESP32', icon: <Cpu size={32} />, color: '#F57251' }
      ]
    },
    {
      title: 'Development Tools',
      icon: <Wrench size={24} />,
      skills: [
        { name: 'VS Code', icon: <Code size={32} />, color: '#0274BD' },
        { name: 'Git', icon: <GitBranch size={32} />, color: '#F57251' },
        { name: 'Canva', icon: <Palette size={32} />, color: '#0274BD' },
        { name: 'Jupyter', icon: <Code size={32} />, color: '#F57251' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20" style={{ backgroundColor: '#E9E6DD' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#000000' }}>
            Keahlian Teknis
          </h2>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === index
                    ? 'text-white shadow-lg'
                    : 'bg-white hover:shadow-md'
                }`}
                style={{
                  backgroundColor: activeCategory === index ? '#0274BD' : 'white',
                  color: activeCategory === index ? 'white' : '#000000'
                }}
              >
                {category.icon}
                <span>{category.title}</span>
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col items-center text-center border-2 border-transparent hover:border-opacity-50"
                style={{
                  ['--hover-border-color' as any]: skill.color
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = skill.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                
                <h3 className="text-lg font-semibold group-hover:transition-colors duration-300" style={{ color: '#000000' }}>
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
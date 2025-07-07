import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission (replace with actual Firebase integration)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'advent.clement_ti23@nusaputra.ac.id',
      href: 'mailto:advent.clement_ti23@nusaputra.ac.id'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+62 822-6739-2929',
      href: 'tel:+6282267392929'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Sukabumi, Jawa Barat',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      href: 'https://github.com/Zendrato12',
      color: '#000000'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      href: '#https://www.linkedin.com/in/advent-clement-zendrato-93b55928b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: '#0274BD'
    },
    {
      icon: <Instagram size={24} />,
      label: 'Instagram',
      href: 'https://www.instagram.com/advent_zendrato?igsh=MW1jYnhudzFkcnJ6aA==',
      color: '#F57251'
    },
    {
      icon: <MessageCircle size={24} />,
      label: 'Discord',
      href: '#',
      color: '#0274BD'
    }
  ];

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: '#E9E6DD' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#000000' }}>
            Get In Touch
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              {/* Profile Photo in Contact Section - Made Much Larger */}
              <div className="mb-8 flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-xl border-6 border-white">
                    <img
                      src="/image/profil2.jpg"
                      alt="Advent Clement Zendrato - Contact"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-full border-6 border-white flex items-center justify-center" style={{ backgroundColor: '#0274BD' }}>
                    <MessageCircle size={24} className="text-white" />
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-6" style={{ color: '#000000' }}>
                Mari Berkolaborasi!
              </h3>
              <p className="mb-8 text-lg" style={{ color: '#000000', opacity: 0.8 }}>
                Saya selalu terbuka untuk diskusi tentang proyek data science, 
                peluang kerja, atau sekadar berbagi ide. Jangan ragu untuk menghubungi saya!
              </p>
              
              <div className="space-y-4 mb-8">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div style={{ color: '#0274BD' }}>{contact.icon}</div>
                    <div>
                      <div className="text-sm" style={{ color: '#000000', opacity: 0.6 }}>{contact.label}</div>
                      <div className="font-medium" style={{ color: '#000000' }}>{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4" style={{ color: '#000000' }}>Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                      style={{ color: social.color }}
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6" style={{ color: '#000000' }}>
                Kirim Pesan
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#000000' }}>
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 rounded-lg transition-colors duration-200"
                    style={{ 
                      borderColor: '#C4AD9D',
                      color: '#000000'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#0274BD'}
                    onBlur={(e) => e.target.style.borderColor = '#C4AD9D'}
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#000000' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 rounded-lg transition-colors duration-200"
                    style={{ 
                      borderColor: '#C4AD9D',
                      color: '#000000'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#0274BD'}
                    onBlur={(e) => e.target.style.borderColor = '#C4AD9D'}
                    placeholder="nama@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: '#000000' }}>
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 rounded-lg transition-colors duration-200 resize-none"
                    style={{ 
                      borderColor: '#C4AD9D',
                      color: '#000000'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#0274BD'}
                    onBlur={(e) => e.target.style.borderColor = '#C4AD9D'}
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 text-white rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                  style={{ backgroundColor: '#0274BD' }}
                  onMouseEnter={(e) => {
                    const btn = e.target as HTMLButtonElement;
                    if (!isSubmitting) btn.style.backgroundColor = '#025a9b';
                  }}
                  onMouseLeave={(e) => {
                    const btn = e.target as HTMLButtonElement;
                    if (!isSubmitting) btn.style.backgroundColor = '#0274BD';
                  }}
    
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: '#C4AD9D', color: '#000000' }}>
                  Pesan berhasil dikirim! Terima kasih telah menghubungi saya.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: '#F57251', color: 'white' }}>
                  Terjadi kesalahan. Silakan coba lagi nanti.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
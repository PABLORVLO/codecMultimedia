import React, { useState } from 'react';
import { Camera, Palette, Video, Radio, Plane, Music, X, Youtube, Facebook, Instagram, MessageCircle } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
  details: {
    features: string[];
    image: string;
  };
}

const services: Service[] = [
  {
    title: 'Diseño Gráfico y Animación 2D',
    description: 'Creamos diseños impactantes y animaciones que dan vida a tus ideas.',
    icon: Palette,
    details: {
      features: [
        'Diseño de logotipos e identidad corporativa',
        'Animaciones para redes sociales',
        'Motion graphics para videos',
        'Ilustraciones digitales personalizadas',
        'Infografías animadas'
      ],
      image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=1920&auto=format&fit=crop&q=100',
    }
  },
  {
    title: 'Producción Audiovisual',
    description: 'Comerciales, documentales y videos corporativos de alta calidad.',
    icon: Video,
    details: {
      features: [
        'Videos corporativos profesionales',
        'Spots publicitarios',
        'Documentales',
        'Videos para redes sociales',
        'Edición y post-producción'
      ],
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&auto=format&fit=crop&q=100',
    }
  },
  {
    title: 'Transmisión en Vivo',
    description: 'Cobertura profesional de eventos en tiempo real.',
    icon: Radio,
    details: {
      features: [
        'Streaming de eventos en vivo',
        'Transmisiones multicámara',
        'Producción en tiempo real',
        'Integración con redes sociales',
        'Grabación simultánea'
      ],
      image: 'https://images.unsplash.com/photo-1505673542670-a5e3ff5b14a3?w=1920&auto=format&fit=crop&q=100',
    }
  },
  {
    title: 'Servicio de Drone',
    description: 'Tomas aéreas espectaculares para tus proyectos.',
    icon: Plane,
    details: {
      features: [
        'Fotografía aérea 4K',
        'Videos panorámicos',
        'Inspección de infraestructuras',
        'Mapeo y topografía',
        'Seguimiento dinámico'
      ],
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=1920&auto=format&fit=crop&q=100',
    }
  },
  {
    title: 'Producción de Audio',
    description: 'Cuñas, narraciones y locución comercial e institucional.',
    icon: Music,
    details: {
      features: [
        'Grabación de voces en off',
        'Producción musical',
        'Efectos de sonido',
        'Mezcla y masterización',
        'Jingles publicitarios'
      ],
      image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=1920&auto=format&fit=crop&q=100',
    }
  },
];

const socialLinks = [
  {
    name: 'YouTube',
    icon: Youtube,
    url: 'https://youtube.com',
    color: 'hover:text-red-600'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://facebook.com',
    color: 'hover:text-blue-600'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com',
    color: 'hover:text-pink-600'
  },
  {
    name: 'TikTok',
    icon: MessageCircle,
    url: 'https://tiktok.com',
    color: 'hover:text-purple-600'
  }
];

const Home: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const openModal = (service: Service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="bg-gradient-dark min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1601574968106-b312ac309953?w=1920&auto=format&fit=crop&q=100" 
            alt="Hero background" 
            className="w-full h-full object-cover opacity-20 animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto py-12 sm:py-16">
          <div className="animate-slide-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 hover-glow leading-tight">
              Codec Multimedia
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              Transformamos tus ideas en experiencias audiovisuales memorables
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
              <a 
                href="#services" 
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 text-center"
              >
                Nuestros Servicios
              </a>
              <a 
                href="/contact" 
                className="w-full sm:w-auto border-2 border-red-600 text-white px-6 sm:px-8 py-3 rounded-full hover:bg-red-600/20 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <a href="#services" className="text-white opacity-50 hover:opacity-100 transition-opacity duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-8 sm:mb-16 hover-glow">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-black border border-red-600 rounded-xl overflow-hidden card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.details.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-red-600 bg-opacity-20 backdrop-blur-sm rounded-lg">
                      <service.icon className="h-6 w-6 text-red-600" />
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4 min-h-[60px] text-sm sm:text-base">{service.description}</p>
                  <button 
                    onClick={() => openModal(service)}
                    className="inline-flex items-center text-red-500 hover:text-red-400 font-medium transition-colors duration-300 text-sm sm:text-base"
                  >
                    Ver más 
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="py-12 sm:py-20 px-4 sm:px-6 bg-black/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12 hover-glow">
            Síguenos en Redes Sociales
          </h2>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-icon ${social.color}`}
              >
                <social.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg animate-float animate-pulse-custom hover:bg-green-600 transition-colors duration-300"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
          />
        </svg>
      </a>

      {/* Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-black border border-red-600 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto modal-animation"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedService.details.image}
                alt={selectedService.title}
                className="w-full h-48 sm:h-64 object-cover rounded-t-lg"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors duration-300"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-4 sm:p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-red-600 bg-opacity-20 rounded-lg">
                  <selectedService.icon className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">{selectedService.title}</h3>
              </div>

              <p className="text-gray-300 mb-6 text-sm sm:text-base">{selectedService.description}</p>

              <h4 className="text-base sm:text-lg font-semibold text-red-500 mb-4">Características del Servicio</h4>
              <ul className="space-y-3">
                {selectedService.details.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm sm:text-base">
                    <span className="text-red-500 mt-1">•</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={closeModal}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 rounded-lg transition-colors duration-300 text-sm sm:text-base"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
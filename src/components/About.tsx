import React from 'react';
import { Award, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-gradient-dark min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-slide-in">
          <h1 className="text-5xl font-bold text-white mb-4 hover-glow">
            Sobre Nosotros
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Somos un equipo apasionado por la creación de contenido multimedia de alta calidad
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-in">
            <h2 className="text-3xl font-bold text-white">Nuestra Historia</h2>
            <p className="text-gray-300 leading-relaxed">
              Desde nuestra fundación, nos hemos dedicado a transformar ideas en experiencias visuales impactantes. 
              Nuestro compromiso con la excelencia y la innovación nos ha permitido colaborar con clientes 
              de diversos sectores, ayudándoles a contar sus historias de manera única y memorable.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Con años de experiencia en la industria multimedia, hemos desarrollado un profundo 
              entendimiento de las necesidades de nuestros clientes y las últimas tendencias en 
              tecnología y diseño.
            </p>
          </div>
          <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60"
              alt="Equipo de trabajo"
              className="rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black border border-red-600 rounded-lg p-6 card-hover">
            <div className="flex items-center justify-center w-12 h-12 bg-red-600 bg-opacity-20 rounded-lg mb-4">
              <Award className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Excelencia</h3>
            <p className="text-gray-400">
              Nos esforzamos por alcanzar los más altos estándares en cada proyecto que emprendemos.
            </p>
          </div>
          <div className="bg-black border border-red-600 rounded-lg p-6 card-hover">
            <div className="flex items-center justify-center w-12 h-12 bg-red-600 bg-opacity-20 rounded-lg mb-4">
              <Users className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Colaboración</h3>
            <p className="text-gray-400">
              Trabajamos estrechamente con nuestros clientes para asegurar resultados excepcionales.
            </p>
          </div>
          <div className="bg-black border border-red-600 rounded-lg p-6 card-hover">
            <div className="flex items-center justify-center w-12 h-12 bg-red-600 bg-opacity-20 rounded-lg mb-4">
              <Target className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Innovación</h3>
            <p className="text-gray-400">
              Constantemente exploramos nuevas tecnologías y técnicas creativas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
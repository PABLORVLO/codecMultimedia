import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const subject = formData.get('subject');
    const message = formData.get('message');
    const email = formData.get('email');
    
    window.location.href = `mailto:info@codecmultimedia.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(message as string)}%0A%0AContacto: ${encodeURIComponent(email as string)}`;
  };

  return (
    <div className="bg-gradient-dark min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-in">
          <h1 className="text-5xl font-bold text-white mb-4 hover-glow">
            Contáctanos
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Estamos aquí para ayudarte con tu próximo proyecto
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-black border border-red-600 rounded-lg p-6 card-hover">
              <h2 className="text-2xl font-bold text-white mb-6">
                Información de Contacto
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group">
                  <div className="flex items-center justify-center w-12 h-12 bg-red-600 bg-opacity-20 rounded-lg group-hover:bg-opacity-30 transition-all duration-300">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <a href="mailto:info@codecmultimedia.com" className="text-white hover:text-red-500 transition-colors">
                      info@codecmultimedia.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="flex items-center justify-center w-12 h-12 bg-red-600 bg-opacity-20 rounded-lg group-hover:bg-opacity-30 transition-all duration-300">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-gray-400">Teléfono</p>
                    <a href="tel:3163520087" className="text-white hover:text-red-500 transition-colors">
                      3163520087
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="flex items-center justify-center w-12 h-12 bg-red-600 bg-opacity-20 rounded-lg group-hover:bg-opacity-30 transition-all duration-300">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-gray-400">Dirección</p>
                    <p className="text-white">Cumbal - Nariño</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black border border-red-600 rounded-lg p-6 card-hover">
              <h2 className="text-2xl font-bold text-white mb-6">
                Horario de Atención
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400">Lunes - Viernes</p>
                  <p className="text-white">9:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <p className="text-gray-400">Sábado</p>
                  <p className="text-white">10:00 AM - 2:00 PM</p>
                </div>
                <div>
                  <p className="text-gray-400">Domingo</p>
                  <p className="text-white">Cerrado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black border border-red-600 rounded-lg p-8 card-hover">
            <h2 className="text-2xl font-bold text-white mb-6">
              Envíanos un Mensaje
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 text-white"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 text-white"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 text-white"
                  placeholder="Asunto del mensaje"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 text-white resize-none"
                  placeholder="Tu mensaje"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Enviar Mensaje</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
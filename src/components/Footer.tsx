import React from 'react';
import { Camera, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4 hover-glow">
              <Camera className="h-8 w-8 text-red-600" />
              <span className="text-xl font-bold">Codec Multimedia</span>
            </div>
            <p className="text-gray-400">
              Soluciones multimedia profesionales para tu negocio
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">Contacto</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 group">
                <Mail className="h-5 w-5 text-red-600 group-hover:text-red-400 transition-colors duration-300" />
                <span className="group-hover:text-red-400 transition-colors duration-300">info@codecmultimedia.com</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <Phone className="h-5 w-5 text-red-600 group-hover:text-red-400 transition-colors duration-300" />
                <span className="group-hover:text-red-400 transition-colors duration-300">+1 234 567 890</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <MapPin className="h-5 w-5 text-red-600 group-hover:text-red-400 transition-colors duration-300" />
                <span className="group-hover:text-red-400 transition-colors duration-300">Ciudad, País</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">Servicios</h3>
            <ul className="space-y-2">
              <li className="hover:text-red-400 transition-colors duration-300">Diseño Gráfico</li>
              <li className="hover:text-red-400 transition-colors duration-300">Animación 2D</li>
              <li className="hover:text-red-400 transition-colors duration-300">Producción Audiovisual</li>
              <li className="hover:text-red-400 transition-colors duration-300">Transmisión en Vivo</li>
              <li className="hover:text-red-400 transition-colors duration-300">Servicio de Drone</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">Horario</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Lunes - Viernes</li>
              <li className="text-white">9:00 AM - 6:00 PM</li>
              <li className="text-gray-400">Sábado</li>
              <li className="text-white">10:00 AM - 2:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Codec Multimedia. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
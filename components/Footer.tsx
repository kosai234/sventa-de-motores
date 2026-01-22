
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-primary">
              <div className="w-6 h-6">
                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"></path>
                </svg>
              </div>
              <h2 className="text-xl font-black uppercase tracking-tight">Premium Motors</h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Líderes en el mercado de vehículos de alta gama. Pasión por la ingeniería, compromiso con la transparencia y atención personalizada.
            </p>
            <div className="flex gap-4">
              {['public', 'share', 'camera'].map((icon) => (
                <a key={icon} href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-lg">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#111418] mb-8 uppercase tracking-wider text-xs">Enlaces Rápidos</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-500 font-medium">
              <li><a className="hover:text-primary transition-colors" href="#">Inventario</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Servicios Post-Venta</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Financiamiento</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Vende tu auto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#111418] mb-8 uppercase tracking-wider text-xs">Contacto</h4>
            <ul className="flex flex-col gap-5 text-sm text-gray-500 font-medium">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                <span>Av. Luxury Drive 450, <br/>Distrito Premium, CP 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">call</span>
                <span>+1 800 555 MOTORS</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">mail</span>
                <span className="truncate">contacto@premiummotors.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#111418] mb-8 uppercase tracking-wider text-xs">Horarios</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-500 font-medium">
              <li className="flex justify-between items-center">
                <span>Lun - Vie:</span>
                <span className="text-[#111418]">9:00 - 19:00</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Sábados:</span>
                <span className="text-[#111418]">10:00 - 16:00</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Domingos:</span>
                <span className="text-primary font-bold">Cerrado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-medium">
          <p>© {new Date().getFullYear()} Premium Motors. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Términos y Condiciones</a>
            <a href="#" className="hover:text-primary">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

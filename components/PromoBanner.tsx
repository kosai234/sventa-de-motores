
import React from 'react';

const PromoBanner: React.FC = () => {
  return (
    <section className="w-full px-6 py-12">
      <div className="max-w-[1280px] mx-auto bg-primary rounded-2xl overflow-hidden relative group">
        <div 
          className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, 
            backgroundSize: '24px 24px' 
          }}
        />
        <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-white text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight">¿BUSCAS ALGO ESPECÍFICO?</h2>
            <p className="text-white/80 text-lg max-w-xl font-medium">
              Importamos el vehículo de tus sueños directamente desde Estados Unidos o Europa. Gestión aduanera completa y garantía mecánica.
            </p>
          </div>
          <button className="bg-white text-primary px-8 py-4 rounded-xl font-black text-lg hover:bg-gray-100 transition-all shadow-xl active:scale-95 whitespace-nowrap">
            ASESORÍA GRATUITA
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;

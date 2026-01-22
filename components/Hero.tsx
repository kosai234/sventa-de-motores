
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full">
      <div 
        className="w-full h-[600px] bg-cover bg-center flex items-center justify-center px-6" 
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(16, 25, 34, 0.8), rgba(16, 25, 34, 0.4)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDDB3aA83Qgrbu33iT1BFFuvKR135PfNkTsZZ2mBHswUGMyNaqrMLv6fnUO7miMzDwsQI8niJUfkfMKt97-sYbkBMFfxi4rXGj3C8hzw94sN5fMcV4KBc9HNJj8rMA1nepsFdECDoWn3zrcjc9AkXGe2fRITv7PV7PcjwPlPxRbzAH30ifwQNrehg9UV7ZsMLojLSt_J-P8auK709zJHgualiT1-Fbmh0DHRDzvLu1tc8Yxg62lLoeJSN-BmEWrgUxuTH8dVpRXruCQ")` 
        }}
      >
        <div className="max-w-[1280px] w-full flex flex-col gap-8">
          <div className="max-w-2xl">
            <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter mb-4 animate-fade-in">
              LA EXCELENCIA EN CADA KILÓMETRO.
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-medium max-w-lg">
              Descubre nuestra selección exclusiva de vehículos de lujo e importados con los más altos estándares de calidad europea y americana.
            </p>
          </div>

          {/* Quick Search Panel */}
          <div className="bg-white p-6 rounded-xl shadow-2xl flex flex-col md:flex-row gap-4 items-end max-w-4xl border border-white/10 mt-4">
            <div className="flex-1 w-full">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Marca</label>
              <select className="w-full rounded-lg border-[#dbe0e6] h-12 focus:ring-primary focus:border-primary">
                <option>Todas las marcas</option>
                <option>Porsche</option>
                <option>BMW</option>
                <option>Mercedes-Benz</option>
                <option>Audi</option>
              </select>
            </div>
            <div className="flex-1 w-full">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Modelo</label>
              <select className="w-full rounded-lg border-[#dbe0e6] h-12 focus:ring-primary focus:border-primary">
                <option>Todos los modelos</option>
                <option>911 Carrera</option>
                <option>M4 Coupe</option>
                <option>G-Wagon</option>
                <option>RS6 Avant</option>
              </select>
            </div>
            <div className="flex-1 w-full">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Año</label>
              <select className="w-full rounded-lg border-[#dbe0e6] h-12 focus:ring-primary focus:border-primary">
                <option>Cualquier año</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
              </select>
            </div>
            <button className="w-full md:w-auto px-8 h-12 bg-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/30">
              <span className="material-symbols-outlined text-xl">search</span>
              Buscar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

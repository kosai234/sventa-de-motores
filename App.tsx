
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CarCard from './components/CarCard';
import PromoBanner from './components/PromoBanner';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import { FEATURED_CARS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Featured Cars Section */}
        <section className="max-w-[1280px] mx-auto w-full px-6 py-20">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Nuestro Inventario</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#111418] uppercase tracking-tight">AUTOS DESTACADOS</h2>
            </div>
            <a 
              href="#" 
              className="group text-primary font-bold text-sm flex items-center gap-2 hover:translate-x-1 transition-all"
            >
              Ver todo el inventario
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_CARS.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </section>

        <PromoBanner />
        
        <BlogSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;


import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-solid border-[#f0f2f4] bg-white/90 backdrop-blur-md px-6 md:px-20 py-3">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between whitespace-nowrap">
        <div className="flex items-center gap-3 text-primary">
          <div className="w-8 h-8">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-[#111418] text-xl font-black leading-tight tracking-tight uppercase">Premium Motors</h2>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8">
          {['Inventario', 'Servicios', 'Importación', 'Blog', 'Contacto'].map((item) => (
            <a key={item} href="#" className="text-sm font-semibold text-[#111418] hover:text-primary transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold transition-all hover:brightness-110 active:scale-95">
            Vende tu Auto
          </button>
          <div 
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 border-2 border-primary/20 cursor-pointer" 
            style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDupLGxUhGNOub_qO_4z-iLQ3ff_MCyICkf0KTzVXqy_qGObShYwhdSNr-BVaMMeRtych82doDU2QoTlWCO6zPrndQi5gGvPUKm3ZQXftOobqgOYPY355lDU7T_LZCSTJsbXxh282UYkOGfHZaLC0uLDqgw6zcb7E7b02e0khTogRK5bROE6o8qerT6CGoq1lqFn1_aIDsbT6E49hJN0IfnJiK7PF321bBCAYUPm1XuPTc4NNfgXVsjTeamAuuhfK4q1LtSt8IqbcQ8")` }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      {/* Top Banner */}
      <div className="w-full bg-[#f9f9f9] border-b border-gray-200/60 text-[10px] sm:text-xs py-2.5 px-4 flex justify-between items-center text-gray-500 font-semibold tracking-widest uppercase" style={{fontFamily: 'Inter, sans-serif'}}>
        <div className="flex-1 text-left hidden md:block">LIVRAISON OFFERTE DÈS 3000 DINARS</div>
        <div className="flex-1 text-center">EXPERTISE DERMATOLOGIQUE & CAPILLAIRE</div>
        <div className="flex-1 text-right hidden md:block cursor-pointer hover:text-black transition-colors flex items-center justify-end gap-1">
          BESOIN D'AIDE ? <span className="text-[8px]">▼</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 items-center h-24 sm:h-28">

          {/* Navigation Links - Left aligned */}
          <nav className="col-span-5 hidden md:flex items-center space-x-4 lg:space-x-8 text-xs font-semibold tracking-[0.12em] text-black whitespace-nowrap" style={{fontFamily: '"Plus Jakarta Sans", sans-serif'}}>
            <a href="#" className="hover:text-emerald-700 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-emerald-700 after:transition-all">ACCUEIL</a>
            <a href="#" className="hover:text-emerald-700 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-emerald-700 after:transition-all">NOS GAMMES</a>
            <a href="#" className="hover:text-emerald-700 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-emerald-700 after:transition-all">À PROPOS</a>
            <a href="#" className="hover:text-emerald-700 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-emerald-700 after:transition-all">NOS ENGAGEMENTS</a>
          </nav>

          {/* Mobile Menu Button - Left aligned on mobile */}
          <div className="col-span-5 md:hidden flex">
            <button className="text-black hover:text-gray-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Logo - Center aligned */}
          <div className="col-span-2 flex flex-col items-center justify-center">
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl text-black leading-none tracking-wide select-none" style={{fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700}}>
                Unik<span className="text-[10px] align-super font-light relative top-[-14px] left-[1px]" style={{fontFamily: 'Inter, sans-serif'}}>®</span>
              </h1>
            </div>
            <div className="flex items-center mt-1 w-full justify-center">
              <div className="h-[1px] w-8 sm:w-10 bg-emerald-600/60"></div>
              <span className="mx-2 text-emerald-600 text-lg sm:text-xl font-medium whitespace-nowrap" style={{fontFamily: 'Allura, cursive', fontSize: '1.3rem'}}>Comme toi</span>
              <div className="h-[1px] w-8 sm:w-10 bg-emerald-600/60"></div>
            </div>
          </div>

          {/* Icons - Right aligned */}
          <div className="col-span-5 flex items-center justify-end space-x-4 sm:space-x-6">
            <button className="text-black hover:text-emerald-700 transition-colors p-1.5" aria-label="Recherche">
              <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" x2="16.65" y1="21" y2="16.65" />
              </svg>
            </button>
            <button className="text-black hover:text-emerald-700 transition-colors p-1.5" aria-label="Compte">
              <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
            <button className="text-black hover:text-emerald-700 transition-colors p-1.5 relative" aria-label="Panier">
              <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" x2="21" y1="6" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="absolute top-0 right-0 bg-black text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center transform translate-x-1.5 -translate-y-1">0</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;

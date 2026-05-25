import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Top Banner */}
      <div
        className="w-full bg-[#f9f9f9] border-b border-gray-200/60 text-[10px] sm:text-xs py-2 px-4 flex justify-between items-center text-gray-500 font-semibold tracking-widest uppercase"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        <div className="flex-1 text-left hidden md:block">LIVRAISON OFFERTE DÈS 3000 DINARS</div>
        <div className="flex-1 text-center">EXPERTISE DERMATOLOGIQUE &amp; CAPILLAIRE</div>
        <div className="flex-1 text-right hidden md:block cursor-pointer hover:text-black transition-colors">
          BESOIN D'AIDE ? <span className="text-[8px]">▼</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 items-center h-20 sm:h-24">

          {/* Navigation Links — desktop */}
          <nav
            className="col-span-5 hidden md:flex items-center space-x-4 lg:space-x-8 text-xs font-semibold tracking-[0.12em] text-black whitespace-nowrap"
            style={{ fontFamily: '"General Sans", sans-serif' }}
          >
            {['ACCUEIL', 'NOS GAMMES', 'À PROPOS', 'NOS ENGAGEMENTS'].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-emerald-700 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-emerald-700 after:transition-all after:duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Hamburger — mobile */}
          <div className="col-span-5 md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black hover:text-gray-600 focus:outline-none p-1"
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Logo — center */}
          <div className="col-span-2 flex items-center justify-center">
            <a href="#" aria-label="Unik - Accueil">
              <img
                src="/RiseGroup-18.png"
                alt="Unik - Comme toi"
                className="h-20 sm:h-24 lg:h-28 w-auto object-contain select-none"
              />
            </a>
          </div>

          {/* Icons — right */}
          <div className="col-span-5 flex items-center justify-end space-x-3 sm:space-x-5">
            <button className="text-black hover:text-emerald-700 transition-colors p-1.5" aria-label="Recherche">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" x2="16.65" y1="21" y2="16.65" />
              </svg>
            </button>
            <button className="text-black hover:text-emerald-700 transition-colors p-1.5 hidden sm:block" aria-label="Compte">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
            <button className="text-black hover:text-emerald-700 transition-colors p-1.5 relative" aria-label="Panier">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" x2="21" y1="6" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="absolute top-0 right-0 bg-black text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center transform translate-x-1.5 -translate-y-1">0</span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className="md:hidden bg-white border-t border-gray-100 px-6 py-6 flex flex-col space-y-5 animate-[fadeDown_0.2s_ease]"
          style={{ fontFamily: '"General Sans", sans-serif' }}
        >
          {['ACCUEIL', 'NOS GAMMES', 'À PROPOS', 'NOS ENGAGEMENTS'].map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold tracking-widest text-black hover:text-emerald-700 transition-colors border-b border-gray-100 pb-4"
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            className="text-xs font-semibold tracking-widest text-gray-500 hover:text-black transition-colors"
          >
            BESOIN D'AIDE ?
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

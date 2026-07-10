import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const isHome = pathname === '/';

  // Scroll animations
  const { scrollY } = useScroll();

  // Logo animation: Starts large just below the navbar, scales down and moves up to navbar
  const logoY = useTransform(scrollY, [0, 200], [isHome ? 80 : 0, 0]);
  const logoScale = useTransform(scrollY, [0, 200], [isHome ? 1.8 : 1, 1]);

  // Header background color with opacity transition
  const headerBgOpacity = useTransform(scrollY, [0, 150], [isHome ? 0 : 1, 1]);

  // Header background color
  const headerBgColor = "rgba(255, 255, 255, 1)";
  const headerBorderColor = "rgba(243, 244, 246, 1)";

  return (
    <>
      <motion.header
        className="w-full sticky top-0 z-50 backdrop-blur-sm"
        style={{ backgroundColor: headerBgColor, borderBottomColor: headerBorderColor, borderBottomWidth: 1 }}
      >
        {/* Top Banner */}
        <motion.div
          className="w-full bg-[#f9f9f9]/80 border-b border-gray-200/60 text-[10px] sm:text-xs py-2 px-4 flex justify-between items-center text-gray-500 font-semibold tracking-widest uppercase"
        >
          <div className="flex-1 text-left hidden md:block">LIVRAISON OFFERTE DÈS 3000 DINARS</div>
          <div className="flex-1 text-center">EXPERTISE DERMATOLOGIQUE &amp; CAPILLAIRE</div>
          <div className="flex-1 text-right hidden md:block cursor-pointer hover:text-black transition-colors">
            BESOIN D'AIDE ? <span className="text-[8px]">▼</span>
          </div>
        </motion.div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-12 items-center h-20 sm:h-24">

            {/* Navigation Links — desktop */}
            <motion.nav
              className="col-span-5 hidden md:flex items-center space-x-4 lg:space-x-8 text-xs font-semibold tracking-[0.12em] text-black whitespace-nowrap"
            >
              {[
                { label: 'ACCUEIL', to: '/' },
                { label: 'NOS GAMMES', to: '/catalog' },
                { label: 'À PROPOS', to: '/about' },
                { label: 'FAQ', to: '/faq' }
              ].map((item) => {
                const isActive = (item.to === '/' && pathname === '/') ||
                  (item.to === '/about' && pathname === '/about') ||
                  (item.to === '/faq' && pathname === '/faq') ||
                  (item.to === '/catalog' && (pathname === '/catalog' || pathname.startsWith('/product')));
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    className={`transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 ${isActive
                      ? 'text-black font-bold after:w-full'
                      : 'text-black hover:font-bold after:w-0 hover:after:w-full'
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </motion.nav>

            {/* Hamburger — mobile */}
            <motion.div className="col-span-4 md:hidden flex items-center">
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
            </motion.div>

            {/* Logo — center */}
            <div className="col-span-4 md:col-span-2 flex items-center justify-center relative z-50">
              <motion.div
                style={{ y: logoY, scale: logoScale, transformOrigin: 'center top' }}
              >
                <Link
                  to="/"
                  aria-label="Unik - Accueil"
                  className="focus:outline-none block"
                >
                  <img
                    src="/RiseGroup-18.png"
                    alt="Unik - Comme toi"
                    className="h-14 sm:h-20 md:h-24 lg:h-28 w-auto object-contain select-none"
                  />
                </Link>
              </motion.div>
            </div>

            {/* Icons — right */}
            <motion.div className="col-span-4 md:col-span-5 flex items-center justify-end space-x-3 sm:space-x-5">
              <button className="text-black hover:text-brand-accent transition-colors p-1.5" aria-label="Recherche">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" x2="16.65" y1="21" y2="16.65" />
                </svg>
              </button>
              <button className="text-black hover:text-brand-accent transition-colors p-1.5" aria-label="Compte">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </button>
              <button className="text-black hover:text-brand-accent transition-colors p-1.5 relative" aria-label="Panier">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span className="absolute top-0 right-0 bg-black text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center transform translate-x-1.5 -translate-y-1">0</span>
              </button>
            </motion.div>

          </div>
        </div>
      </motion.header>

      {/* Mobile Dropdown Menu (Sidebar) */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[60] md:hidden backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-white z-[70] md:hidden flex flex-col shadow-2xl"
            >
              <div className="p-6 flex justify-between items-center border-b border-gray-100">
                <img src="/RiseGroup-18.png" alt="Unik" className="h-8 object-contain" />
                <button onClick={() => setMenuOpen(false)} className="p-2 -mr-2 text-gray-500 hover:text-black focus:outline-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col px-6 py-8 space-y-6 overflow-y-auto flex-1">
                {[
                  { label: 'ACCUEIL', to: '/' },
                  { label: 'NOS GAMMES', to: '/catalog' },
                  { label: 'À PROPOS', to: '/about' },
                  { label: 'FAQ', to: '/faq' }
                ].map((item) => {
                  const isActive = (item.to === '/' && pathname === '/') ||
                    (item.to === '/about' && pathname === '/about') ||
                    (item.to === '/faq' && pathname === '/faq') ||
                    (item.to === '/catalog' && (pathname === '/catalog' || pathname.startsWith('/product')));
                  return (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className={`text-left text-base tracking-widest transition-colors pb-2 border-b border-gray-50 ${isActive ? 'text-black font-bold' : 'text-black font-semibold hover:font-bold'
                        }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <div className="pt-8 mt-auto">
                  <Link
                    to="/"
                    onClick={() => setMenuOpen(false)}
                    className="text-left text-xs font-semibold tracking-widest text-gray-500 hover:text-black transition-colors"
                  >
                    BESOIN D'AIDE ?
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

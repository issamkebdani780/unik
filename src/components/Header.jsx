const Header = () => {
  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="w-full bg-gray-50 border-b border-gray-200 text-[10px] sm:text-xs py-2 px-4 flex justify-between items-center text-gray-600 font-medium tracking-wide">
        <div className="flex-1 text-left hidden sm:block">LIVRAISON OFFERTE DÈS 3000 DINARS</div>
        <div className="flex-1 text-center">EXPERTISE DERMATOLOGIQUE & CAPILLAIRE</div>
        <div className="flex-1 text-right hidden sm:block cursor-pointer">BESOIN D'AIDE ? ⌄</div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8 text-sm font-semibold tracking-wide">
            <a href="#" className="text-black hover:text-gray-600 transition-colors">ACCUEIL</a>
            <a href="#" className="text-black hover:text-gray-600 transition-colors">NOS GAMMES</a>
            <a href="#" className="text-black hover:text-gray-600 transition-colors">À PROPOS</a>
            <a href="#" className="text-black hover:text-gray-600 transition-colors">NOS ENGAGEMENTS</a>
          </nav>

          {/* Logo */}
          <div className="flex flex-col items-center justify-center flex-1 md:flex-none">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black leading-none">Unik</h1>
            <div className="flex items-center mt-1">
              <div className="h-px w-8 bg-green-200"></div>
              <span className="mx-2 font-['Caveat',cursive] text-green-500 text-lg sm:text-xl italic">Comme toi</span>
              <div className="h-px w-8 bg-green-200"></div>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-5 sm:space-x-6">
            <button className="text-black hover:text-gray-600 transition-colors">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>
            </button>
            <button className="text-black hover:text-gray-600 transition-colors hidden sm:block">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </button>
            <button className="text-black hover:text-gray-600 transition-colors relative">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

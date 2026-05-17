import { Search, User, ShoppingBag } from 'lucide-react';

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
              <Search className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
            </button>
            <button className="text-black hover:text-gray-600 transition-colors hidden sm:block">
              <User className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
            </button>
            <button className="text-black hover:text-gray-600 transition-colors relative">
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
              <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

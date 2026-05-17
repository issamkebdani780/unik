const Footer = () => {
  return (
    <footer className="w-full bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex flex-col items-start">
              <h1 className="text-4xl font-bold tracking-tight text-black leading-none">Unik</h1>
              <div className="flex items-center mt-1">
                <div className="h-px w-6 bg-gray-300"></div>
                <span className="mx-2 font-['Caveat',cursive] text-gray-500 text-lg italic">Comme toi</span>
                <div className="h-px w-6 bg-gray-300"></div>
              </div>
            </div>
            <p className="text-sm text-gray-600 font-medium">
              L'expertise dermatologique<br />
              et capillaire, pour vous.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors">
                {/* TikTok icon approximation */}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Links - Gammes */}
          <div>
            <h4 className="text-xs font-bold tracking-widest mb-6 text-black">NOS GAMMES</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors font-medium">Gamme Capillaire</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors font-medium">Gamme Dermatologique</a></li>
            </ul>
          </div>

          {/* Links - Informations */}
          <div>
            <h4 className="text-xs font-bold tracking-widest mb-6 text-black">INFORMATIONS</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors font-medium">À propos</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors font-medium">Nos engagements</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors font-medium">Ingrédients</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors font-medium">FAQ</a></li>
            </ul>
          </div>

          {/* Links - Service Client */}
          <div>
            <h4 className="text-xs font-bold tracking-widest mb-6 text-black">SERVICE CLIENT</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors font-medium">Contact</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors font-medium">Livraison & Retours</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors font-medium">CGV</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors font-medium">Politique de confidentialité</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-100 flex justify-center text-center">
          <p className="text-xs text-gray-500 font-medium">
            © 2025 UNIK. Tous droits réservés.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

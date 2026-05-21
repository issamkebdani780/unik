import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#fafafa] pt-16 pb-8 border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          
          {/* Brand Info (Col span 4) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex flex-col items-start">
              <h2 className="text-3xl font-serif text-black leading-none tracking-wide select-none">
                Unik<span className="text-[8px] align-super font-sans font-light relative top-[-10px] left-[1px]">®</span>
              </h2>
              <div className="flex items-center mt-1">
                <div className="h-[1px] w-6 bg-emerald-600/50"></div>
                <span className="mx-2 font-caveat text-emerald-600 text-base font-medium whitespace-nowrap">Comme toi</span>
                <div className="h-[1px] w-6 bg-emerald-600/50"></div>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">
              L'expertise dermatologique<br />
              et capillaire, pour vous.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-3 pt-2">
              {/* Instagram */}
              <a href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-black hover:text-white hover:border-black transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              {/* TikTok */}
              <a href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-black hover:text-white hover:border-black transition-colors" aria-label="TikTok">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-black hover:text-white hover:border-black transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links - Gammes (Col span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] sm:text-xs font-extrabold tracking-widest text-black uppercase">NOS GAMMES</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-xs sm:text-sm text-gray-500 hover:text-emerald-700 transition-colors font-medium">Gamme Capillaire</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-gray-500 hover:text-emerald-700 transition-colors font-medium">Gamme Dermatologique</a></li>
            </ul>
          </div>

          {/* Links - Informations (Col span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] sm:text-xs font-extrabold tracking-widest text-black uppercase">INFORMATIONS</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-xs sm:text-sm text-gray-500 hover:text-emerald-700 transition-colors font-medium">A propos</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-gray-500 hover:text-emerald-700 transition-colors font-medium">Nos engagements</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-gray-500 hover:text-emerald-700 transition-colors font-medium">Ingrédients</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-gray-500 hover:text-emerald-700 transition-colors font-medium">FAQ</a></li>
            </ul>
          </div>

          {/* Links - Service Client (Col span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] sm:text-xs font-extrabold tracking-widest text-black uppercase">SERVICE CLIENT</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-xs sm:text-sm text-gray-500 hover:text-emerald-700 transition-colors font-medium">Contact</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-gray-500 hover:text-emerald-700 transition-colors font-medium">Livraison & Retours</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-gray-500 hover:text-emerald-700 transition-colors font-medium">CGV</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-gray-500 hover:text-emerald-700 transition-colors font-medium">Politique de confidentialité</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-gray-200/40 flex justify-center text-center">
          <p className="text-[10px] sm:text-xs text-gray-400 font-medium">
            © {new Date().getFullYear()} UNIK. Tous droits réservés.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

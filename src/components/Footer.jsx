import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-[#fafafa] pt-14 pb-8 border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">

          {/* Brand Info — full width on mobile */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-4 space-y-4">
            <Link to="/" aria-label="Unik - Accueil">
              <img
                src="/RiseGroup-18.png"
                alt="Unik - Comme toi"
                className="h-12 w-auto object-contain select-none"
              />
            </Link>

            <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">
              L'expertise dermatologique<br />
              et capillaire, pour vous.
            </p>

            {/* Social */}
            <div className="flex space-x-3 pt-1">
              {[
                {
                  label: 'Instagram',
                  svg: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  ),
                },
                {
                  label: 'TikTok',
                  svg: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                  ),
                },
                {
                  label: 'Facebook',
                  svg: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  ),
                },
              ].map(({ label, svg }) => (
                <a
                  key={label}
                  href="#"
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-black hover:text-white hover:border-black transition-colors"
                  aria-label={label}
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* NOS GAMMES */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <h4 className="text-[10px] font-extrabold tracking-widest text-black uppercase">NOS GAMMES</h4>
            <ul className="space-y-2.5">
              <li><Link to="/catalog?gamme=capillaire" className="text-xs sm:text-sm text-gray-500 hover:text-emerald-700 transition-colors font-medium">Gamme Capillaire</Link></li>
              <li><Link to="/catalog?gamme=dermatologique" className="text-xs sm:text-sm text-gray-500 hover:text-emerald-700 transition-colors font-medium">Gamme Dermatologique</Link></li>
            </ul>
          </div>

          {/* INFORMATIONS */}
          <div className="col-span-1 lg:col-span-3 space-y-4">
            <h4 className="text-[10px] font-extrabold tracking-widest text-black uppercase">INFORMATIONS</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'A propos', to: '/about' },
                { label: 'Nos engagements', to: '/engagements' },
                { label: 'Ingrédients', to: '/catalog' },
                { label: 'FAQ', to: '/' }
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-xs sm:text-sm text-gray-500 hover:text-emerald-700 transition-colors font-medium">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICE CLIENT */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-3 space-y-4">
            <h4 className="text-[10px] font-extrabold tracking-widest text-black uppercase">SERVICE CLIENT</h4>
            <ul className="space-y-2.5">
              {['Contact', 'Livraison & Retours', 'CGV', 'Politique de confidentialité'].map((item) => (
                <li key={item}><a href="#" className="text-xs sm:text-sm text-gray-500 hover:text-emerald-700 transition-colors font-medium">{item}</a></li>
              ))}
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-200/40 flex justify-center text-center">
          <p className="text-[10px] sm:text-xs text-gray-400 font-medium">
            © {new Date().getFullYear()} UNIK. Tous droits réservés.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

const Categories = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* Capillaire Section */}
        <div className="bg-[#f2f6eb]/60 py-16 px-8 sm:px-16 lg:px-24 flex flex-col justify-center items-start min-h-[500px] relative group overflow-hidden">
          <div className="z-10 w-full max-w-md">
            <h4 className="text-sm font-bold tracking-widest text-gray-800 mb-1">GAMME</h4>
            <h2 className="text-3xl sm:text-4xl font-bold text-green-700 tracking-tight mb-6">
              CAPILLAIRE
            </h2>
            <p className="text-gray-700 font-medium mb-10 max-w-sm">
              Des soins ciblés pour stimuler la pousse, fortifier et sublimer vos cheveux jour après jour.
            </p>
            <a href="#" className="inline-flex items-center text-sm font-bold tracking-widest border-b-2 border-black pb-1 hover:text-green-700 hover:border-green-700 transition-colors">
              DÉCOUVRIR <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
          
          {/* Products Placeholder Vide */}
          <div className="absolute right-0 bottom-0 w-1/2 h-full flex items-end justify-center pb-12 pr-8 pointer-events-none">
            <div className="relative w-full h-2/3 flex items-end justify-end space-x-2">
              <div className="w-16 h-48 bg-white shadow-lg rounded-md border border-gray-100 flex items-center justify-center translate-y-4 group-hover:-translate-y-2 transition-transform duration-500 delay-75"></div>
              <div className="w-20 h-64 bg-white shadow-lg rounded-md border border-gray-100 flex items-center justify-center group-hover:-translate-y-4 transition-transform duration-500"></div>
              <div className="w-12 h-32 bg-white shadow-lg rounded-md border border-gray-100 flex items-center justify-center translate-y-8 group-hover:translate-y-2 transition-transform duration-500 delay-150"></div>
            </div>
          </div>
        </div>

        {/* Dermatologique Section */}
        <div className="bg-[#f0f4fa]/70 py-16 px-8 sm:px-16 lg:px-24 flex flex-col justify-center items-start min-h-[500px] relative group overflow-hidden">
          <div className="z-10 w-full max-w-md">
            <h4 className="text-sm font-bold tracking-widest text-gray-800 mb-1">GAMME</h4>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 tracking-tight mb-6">
              DERMATOLOGIQUE
            </h2>
            <p className="text-gray-700 font-medium mb-10 max-w-sm">
              Des soins dermatologiques haute efficacité pour purifier, hydrater et protéger toutes les peaux.
            </p>
            <a href="#" className="inline-flex items-center text-sm font-bold tracking-widest border-b-2 border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors">
              DÉCOUVRIR <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
          
          {/* Products Placeholder Vide */}
          <div className="absolute right-0 bottom-0 w-1/2 h-full flex items-end justify-center pb-12 pr-8 pointer-events-none">
            <div className="relative w-full h-2/3 flex items-end justify-end space-x-2">
              <div className="w-14 h-40 bg-white shadow-lg rounded-md border border-gray-100 flex items-center justify-center translate-y-8 group-hover:-translate-y-1 transition-transform duration-500 delay-75"></div>
              <div className="w-16 h-32 bg-white shadow-lg rounded-md border border-gray-100 flex items-center justify-center translate-y-12 group-hover:translate-y-4 transition-transform duration-500 delay-150"></div>
              <div className="w-20 h-56 bg-white shadow-lg rounded-md border border-gray-100 flex items-center justify-center group-hover:-translate-y-3 transition-transform duration-500"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Categories;

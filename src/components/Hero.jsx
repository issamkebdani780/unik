import { CheckCircle2, Droplets, Leaf, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="w-full bg-gray-50/50 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-start space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black tracking-tight leading-tight">
                L'EXPERTISE
              </h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                <span className="text-blue-500">DERMATOLOGIQUE</span> <span className="text-black">&</span> <span className="text-green-600">CAPILLAIRE</span>
              </h3>
            </div>
            
            <p className="text-lg sm:text-xl font-medium text-black max-w-lg leading-snug">
              POUR PRENDRE SOIN DE VOUS, COMME VOUS ÊTES.
            </p>
            
            <p className="text-gray-600 text-base max-w-md">
              Des soins ciblés, développés avec exigence pour révéler votre beauté naturelle.
            </p>
            
            <button className="mt-4 bg-black text-white px-8 py-3.5 text-sm font-semibold tracking-wider hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg">
              DÉCOUVRIR NOS GAMMES
            </button>

            {/* Features Icons */}
            <div className="grid grid-cols-4 gap-4 sm:gap-8 pt-10 w-full max-w-lg">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white">
                  <ShieldCheck className="w-5 h-5 text-gray-700 stroke-[1.5]" />
                </div>
                <span className="text-[10px] sm:text-xs text-gray-600 font-medium leading-tight">Formules testées<br/>dermatologiquement</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white">
                  <Leaf className="w-5 h-5 text-gray-700 stroke-[1.5]" />
                </div>
                <span className="text-[10px] sm:text-xs text-gray-600 font-medium leading-tight">Ingrédients<br/>rigoureusement<br/>sélectionnés</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white">
                  <CheckCircle2 className="w-5 h-5 text-gray-700 stroke-[1.5]" />
                </div>
                <span className="text-[10px] sm:text-xs text-gray-600 font-medium leading-tight">Efficacité<br/>prouvée</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white">
                  <Droplets className="w-5 h-5 text-gray-700 stroke-[1.5]" />
                </div>
                <span className="text-[10px] sm:text-xs text-gray-600 font-medium leading-tight">Convient à<br/>tous types de peau<br/>et de cheveux</span>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-gray-100 flex flex-col items-center justify-center group border border-gray-100 shadow-sm">
            {/* Minimalist Vide Representation of Products */}
            <div className="absolute inset-0 flex items-center justify-center space-x-6">
               <div className="w-24 h-64 bg-white shadow-xl rounded-md flex items-center justify-center border border-gray-50 transition-transform duration-500 group-hover:-translate-y-2">
                 <span className="text-gray-300 text-sm rotate-90 tracking-widest font-bold">SERUM</span>
               </div>
               <div className="w-32 h-80 bg-white shadow-xl rounded-xl flex items-center justify-center border border-gray-50 transition-transform duration-500 group-hover:-translate-y-4">
                 <span className="text-gray-300 text-sm rotate-90 tracking-widest font-bold">SHAMPOOING</span>
               </div>
            </div>
            
            {/* Decorative transparent circles (Glassmorphism spheres from image) */}
            <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]"></div>
            <div className="absolute top-20 right-20 w-12 h-12 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]"></div>
            
            {/* Decorative leaf placeholder */}
            <div className="absolute -right-10 top-1/2 w-40 h-40 bg-green-100/30 rounded-full blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

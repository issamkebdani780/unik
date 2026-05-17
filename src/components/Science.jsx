import { FlaskConical, Leaf, ShieldCheck } from 'lucide-react';

const Science = () => {
  return (
    <section className="w-full py-20 bg-white relative overflow-hidden">
      {/* Decorative large circle simulating the petri dish background */}
      <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[600px] h-[600px] rounded-full border-[20px] border-gray-50/50 opacity-40 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 max-w-lg">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-tight">
              LA SCIENCE AU SERVICE DE VOTRE PEAU & DE VOS CHEVEUX
            </h2>
            <p className="text-gray-600 font-medium text-lg">
              Chaque formule Unik est développée avec rigueur pour offrir des résultats visibles et durables, en toute sécurité.
            </p>
            <button className="border-2 border-black text-black px-8 py-3 text-sm font-bold tracking-wider hover:bg-black hover:text-white transition-colors duration-300">
              EN SAVOIR PLUS
            </button>
          </div>

          {/* Icons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-start sm:items-center sm:text-center space-y-4 p-6 bg-gray-50/30 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center bg-white">
                <FlaskConical className="w-6 h-6 text-black stroke-[1.5]" />
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-widest mb-2">EXPERTISE<br/>SCIENTIFIQUE</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Des formules développées avec des experts en dermatologie et en trichologie.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start sm:items-center sm:text-center space-y-4 p-6 bg-gray-50/30 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center bg-white">
                <Leaf className="w-6 h-6 text-black stroke-[1.5]" />
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-widest mb-2">INGRÉDIENTS<br/>SÉLECTIONNÉS</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Des actifs de qualité, rigoureusement choisis pour leur efficacité et leur tolérance.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start sm:items-center sm:text-center space-y-4 p-6 bg-gray-50/30 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center bg-white">
                <ShieldCheck className="w-6 h-6 text-black stroke-[1.5]" />
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-widest mb-2">EFFICACITÉ<br/>PROUVÉE</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Des résultats visibles, testés et approuvés sous contrôle dermatologique.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Science;

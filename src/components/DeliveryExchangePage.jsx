import React from 'react';

const DeliveryExchangePage = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2f6b4f]">
          Livraison & Échange
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-black sm:text-4xl">
          Livraison rapide et conditions d’échange simples
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600">
          Nous mettons tout en œuvre pour vous livrer vos produits rapidement
          et dans les meilleures conditions, avec une politique d’échange claire et transparente.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-[#f4f3ee] p-6">
            <h2 className="text-lg font-semibold text-black">Livraison</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-600">
              <li>• Livraison disponible dans toute l’Algérie.</li>
              <li>• Délai estimé communiqué au moment de la commande.</li>
              <li>• Un suivi vous est proposé dès validation de votre commande.</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-[#f4f3ee] p-6">
            <h2 className="text-lg font-semibold text-black">Échange</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-600">
              <li>• Les produits doivent être retournés dans leur emballage d’origine.</li>
              <li>• Un échange est possible si le produit présente un défaut de fabrication.</li>
              <li>• Contactez-nous pour obtenir les instructions de retour.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryExchangePage;

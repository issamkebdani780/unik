import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2f6b4f]">
            Service client
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-black sm:text-4xl">
            Contactez-nous
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
            Nous sommes à votre écoute pour toutes vos questions sur nos produits,
            votre commande ou l&apos;assistance après-vente. N&apos;hésitez pas à nous contacter.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-black">Parlez à notre équipe</h2>
            <div className="mt-6 space-y-4 text-sm text-gray-600">
              <div>
                <p className="font-semibold text-black">Email</p>
                <a href="mailto:contact@unik-dz.com" className="mt-1 inline-flex text-[#2f6b4f] hover:underline">
                  contact@unik-dz.com
                </a>
              </div>
              <div>
                <p className="font-semibold text-black">Horaires</p>
                <p className="mt-1">Du lundi au vendredi, de 9h à 18h</p>
              </div>
              <div>
                <p className="font-semibold text-black">Réponse</p>
                <p className="mt-1">Nous vous répondons dans les plus brefs délais.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-[#f4f3ee] p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-black">Nous suivre</h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Retrouvez nos actualités, conseils et nouveautés sur nos réseaux sociaux.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://www.instagram.com/unik_dz?igsh=a3hyaXJqMHg3a2xh" target="_blank" rel="noreferrer" className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2f6b4f]">
                Instagram
              </a>
              <a href="https://www.facebook.com/share/1EYEMLgkNi/" target="_blank" rel="noreferrer" className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2f6b4f]">
                Facebook
              </a>
              <a href="https://www.tiktok.com/@unikdz?_r=1&_t=ZS-98BgDTvNaOl" target="_blank" rel="noreferrer" className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2f6b4f]">
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

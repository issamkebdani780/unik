import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { fetchWilayas, fetchCommunes, getImageUrl } from '../api/client';

const Checkout = () => {
  const { cartItems, subtotal, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const [wilayas, setWilayas] = useState([]);
  const [loadingWilayas, setLoadingWilayas] = useState(true);
  const [selectedWilaya, setSelectedWilaya] = useState(null);
  const [communes, setCommunes] = useState([]);
  const [selectedCommune, setSelectedCommune] = useState(null);
  const [loadingCommunes, setLoadingCommunes] = useState(false);
  const [deliveryType, setDeliveryType] = useState('home'); // 'home' or 'office'

  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    address: '',
    communeId: '',
    wilayaId: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const load = async () => {
      setLoadingWilayas(true);
      const res = await fetchWilayas();
      if (res && res.data) {
        setWilayas(res.data);
      }
      setLoadingWilayas(false);
    };
    load();
  }, []);

  // Delivery cost is only calculated once user selects a commune AND a delivery mode
  const deliverySource = selectedCommune || selectedWilaya;
  const deliveryReady = !!selectedCommune; // only show cost when commune is chosen
  const deliveryCost = deliveryReady && deliverySource
    ? deliveryType === 'home'
      ? (deliverySource.showDeliveryCostToTheHome ? deliverySource.deliveryCostToTheHome : 0)
      : (deliverySource.showDeliveryCostToTheOffice ? deliverySource.deliveryCostToTheOffice : 0)
    : 0;

  const total = subtotal + deliveryCost;

  const handleWilayaChange = async (e) => {
    const id = parseInt(e.target.value, 10);
    const wilaya = wilayas.find(w => w.id === id) || null;
    setSelectedWilaya(wilaya);
    setSelectedCommune(null);
    setCommunes([]);
    setForm(prev => ({ ...prev, wilayaId: e.target.value, communeId: '' }));
    // Default delivery type based on what's available
    if (wilaya) {
      if (wilaya.showDeliveryCostToTheHome) setDeliveryType('home');
      else if (wilaya.showDeliveryCostToTheOffice) setDeliveryType('office');
      // Fetch communes for this wilaya
      setLoadingCommunes(true);
      const res = await fetchCommunes(id);
      setCommunes(res.communes || []);
      setLoadingCommunes(false);
    }
    setErrors(prev => ({ ...prev, wilayaId: '', communeId: '' }));
  };

  const handleCommuneChange = (e) => {
    const id = parseInt(e.target.value, 10);
    const commune = communes.find(c => c.id === id) || null;
    setSelectedCommune(commune);
    setForm(prev => ({ ...prev, communeId: e.target.value }));
    // Update delivery type defaults for the commune
    if (commune) {
      if (commune.showDeliveryCostToTheHome) setDeliveryType('home');
      else if (commune.showDeliveryCostToTheOffice) setDeliveryType('office');
    }
    setErrors(prev => ({ ...prev, communeId: '' }));
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Nom requis';
    if (!form.phone.trim() || !/^(0|\+213)[5-7]\d{8}$/.test(form.phone.trim())) newErrors.phone = 'Numéro invalide (ex: 0551234567)';
    if (!form.address.trim()) newErrors.address = 'Adresse requise';
    if (!form.wilayaId) newErrors.wilayaId = 'Wilaya requise';
    if (!form.communeId) newErrors.communeId = 'Commune requise';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitting(true);
    // Simulate a submission delay (replace with real API call later)
    await new Promise(res => setTimeout(res, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  const formatPrice = (p) => Number(p).toLocaleString('fr-FR') + ' DA';

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f8f8f6] flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full text-center space-y-6">
          <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight">Commande Confirmée !</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Merci <strong>{form.fullName}</strong> ! Votre commande a bien été reçue. Notre équipe vous contactera au <strong>{form.phone}</strong> pour confirmer.
          </p>
          <button
            onClick={() => navigate('/')}
            className="w-full bg-black text-white font-bold py-4 rounded-full uppercase tracking-widest text-xs hover:bg-gray-800 transition-colors"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f8f6]">
      {/* Top bar */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-3">
          <Link to="/" className="text-xs font-bold tracking-widest text-gray-400 uppercase hover:text-black transition-colors">UNIK</Link>
          <span className="text-gray-300">/</span>
          <span className="text-xs font-bold tracking-widest text-black uppercase">Validation de la commande</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ─── LEFT: FORM ─────────────────────────────── */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-8">

            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 space-y-5">
              <h2 className="text-xs font-extrabold tracking-widest text-black uppercase border-b border-gray-100 pb-4">
                1 — Informations de contact
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold tracking-wider text-gray-500 uppercase mb-1.5">Nom complet *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleInput}
                    placeholder="Ex : Ahmed Benali"
                    className={`w-full border rounded-xl px-4 py-3 text-sm text-black bg-[#fafafa] focus:outline-none focus:ring-2 focus:ring-black transition ${errors.fullName ? 'border-red-400' : 'border-gray-200'}`}
                  />
                  {errors.fullName && <p className="text-red-500 text-[10px] mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-wider text-gray-500 uppercase mb-1.5">Numéro de téléphone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleInput}
                    placeholder="Ex : 0551234567"
                    className={`w-full border rounded-xl px-4 py-3 text-sm text-black bg-[#fafafa] focus:outline-none focus:ring-2 focus:ring-black transition ${errors.phone ? 'border-red-400' : 'border-gray-200'}`}
                  />
                  {errors.phone && <p className="text-red-500 text-[10px] mt-1">{errors.phone}</p>}
                </div>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 space-y-5">
              <h2 className="text-xs font-extrabold tracking-widest text-black uppercase border-b border-gray-100 pb-4">
                2 — Adresse de livraison
              </h2>

              {/* Wilaya */}
              <div>
                <label className="block text-[10px] font-bold tracking-wider text-gray-500 uppercase mb-1.5">Wilaya *</label>
                <div className="relative">
                  <select
                    name="wilayaId"
                    value={form.wilayaId}
                    onChange={handleWilayaChange}
                    disabled={loadingWilayas}
                    className={`w-full border rounded-xl px-4 py-3 text-sm text-black bg-[#fafafa] appearance-none focus:outline-none focus:ring-2 focus:ring-black transition ${errors.wilayaId ? 'border-red-400' : 'border-gray-200'}`}
                  >
                    <option value="">{loadingWilayas ? 'Chargement des wilayas...' : '— Sélectionner une wilaya —'}</option>
                    {wilayas.map(w => (
                      <option key={w.id} value={w.id}>{w.id < 10 ? `0${w.id}` : w.id} — {w.name}</option>
                    ))}
                  </select>
                  <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
                {errors.wilayaId && <p className="text-red-500 text-[10px] mt-1">{errors.wilayaId}</p>}
              </div>

              {/* Commune */}
              <div>
                <label className="block text-[10px] font-bold tracking-wider text-gray-500 uppercase mb-1.5">Commune *</label>
                <div className="relative">
                  <select
                    name="communeId"
                    value={form.communeId}
                    onChange={handleCommuneChange}
                    disabled={!form.wilayaId || loadingCommunes}
                    className={`w-full border rounded-xl px-4 py-3 text-sm text-black bg-[#fafafa] appearance-none focus:outline-none focus:ring-2 focus:ring-black transition ${errors.communeId ? 'border-red-400' : 'border-gray-200'} disabled:opacity-50`}
                  >
                    <option value="">
                      {!form.wilayaId ? '— Sélectionner une wilaya d\'abord —' : loadingCommunes ? 'Chargement...' : '— Sélectionner une commune —'}
                    </option>
                    {communes.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                  <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
                {errors.communeId && <p className="text-red-500 text-[10px] mt-1">{errors.communeId}</p>}
              </div>

              {/* Address */}
              {/* <div>
                <label className="block text-[10px] font-bold tracking-wider text-gray-500 uppercase mb-1.5">Adresse complète *</label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleInput}
                  placeholder="Ex : Cité 100 logements, Bâtiment B, Apt 12"
                  className={`w-full border rounded-xl px-4 py-3 text-sm text-black bg-[#fafafa] focus:outline-none focus:ring-2 focus:ring-black transition ${errors.address ? 'border-red-400' : 'border-gray-200'}`}
                />
                {errors.address && <p className="text-red-500 text-[10px] mt-1">{errors.address}</p>}
              </div> */}
            </div>

            {/* Delivery Method */}
            {(selectedWilaya || selectedCommune) && (
              <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 space-y-4">
                <h2 className="text-xs font-extrabold tracking-widest text-black uppercase border-b border-gray-100 pb-4">
                  3 — Mode de livraison
                </h2>
                <div className="space-y-3">
                  {deliverySource?.showDeliveryCostToTheHome && (
                    <label className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${deliveryType === 'home' ? 'border-black bg-gray-50' : 'border-gray-200 hover:border-gray-400'}`}>
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="deliveryType"
                          value="home"
                          checked={deliveryType === 'home'}
                          onChange={() => setDeliveryType('home')}
                          className="accent-black"
                        />
                        <div>
                          <p className="text-xs font-bold text-black">Livraison à domicile</p>
                          <p className="text-[10px] text-gray-500 mt-0.5">Livré directement chez vous</p>
                        </div>
                      </div>
                      <span className="text-sm font-extrabold text-black">{formatPrice(deliverySource.deliveryCostToTheHome)}</span>
                    </label>
                  )}
                  {deliverySource?.showDeliveryCostToTheOffice && (
                    <label className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${deliveryType === 'office' ? 'border-black bg-gray-50' : 'border-gray-200 hover:border-gray-400'}`}>
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="deliveryType"
                          value="office"
                          checked={deliveryType === 'office'}
                          onChange={() => setDeliveryType('office')}
                          className="accent-black"
                        />
                        <div>
                          <p className="text-xs font-bold text-black">Retrait au bureau (Stop-desk)</p>
                          <p className="text-[10px] text-gray-500 mt-0.5">Retrait dans un point relais</p>
                        </div>
                      </div>
                      <span className="text-sm font-extrabold text-black">{formatPrice(deliverySource.deliveryCostToTheOffice)}</span>
                    </label>
                  )}
                </div>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting || cartItems.length === 0}
              className="w-full bg-black text-white font-extrabold py-5 rounded-full uppercase tracking-widest text-xs hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {submitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Traitement en cours...
                </span>
              ) : 'Confirmer la commande'}
            </button>
          </form>

          {/* ─── RIGHT: ORDER SUMMARY ────────────────────── */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
              <h2 className="text-xs font-extrabold tracking-widest text-black uppercase border-b border-gray-100 pb-4 mb-5">
                Récapitulatif
              </h2>

              {cartItems.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-400 text-sm">Votre panier est vide.</p>
                  <button onClick={() => navigate('/catalog')} className="mt-4 text-xs font-bold text-black underline uppercase tracking-widest">Voir les produits</button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="relative flex-shrink-0">
                        <img
                          src={item.image || (item.images?.length > 0 ? getImageUrl(item.images[0]) : '')}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-xl bg-gray-100"
                        />
                        <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[9px] font-bold h-5 w-5 rounded-full flex items-center justify-center">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-gray-900 line-clamp-2 leading-snug">{item.name}</p>
                        {item.size && <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">{item.size}</p>}
                      </div>
                      <p className="text-sm font-extrabold text-black whitespace-nowrap">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  ))}
                </div>
              )}

              {cartItems.length > 0 && (
                <div className="mt-6 pt-5 border-t border-gray-100 space-y-2.5">
                  <div className="flex justify-between text-xs text-gray-500 font-medium">
                    <span>Sous-total</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 font-medium">
                    <span>Livraison</span>
                    <span className={`font-bold ${deliveryReady ? 'text-black' : 'text-gray-400'}`}>
                      {deliveryReady ? formatPrice(deliveryCost) : '—'}
                    </span>
                  </div>
                  <div className="flex justify-between text-base font-extrabold text-black pt-3 border-t border-gray-100">
                    <span>TOTAL</span>
                    <span>{deliveryReady ? formatPrice(total) : formatPrice(subtotal)}</span>
                  </div>
                  {!deliveryReady && (
                    <p className="text-[10px] text-gray-400 italic">Sélectionnez une commune et un mode de livraison pour voir le total final.</p>
                  )}
                </div>
              )}
            </div>

            {/* Trust badges */}
            <div className="bg-white rounded-2xl shadow-sm p-5 space-y-3">
              {[
                { icon: '🔒', text: 'Paiement à la livraison, 100% sécurisé' },
                { icon: '🚚', text: 'Livraison rapide partout en Algérie' }
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-xs text-gray-600 font-medium">
                  <span className="text-base">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

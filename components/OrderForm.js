'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

const PAKISTAN_CITIES = [
  'Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad',
  'Multan', 'Peshawar', 'Quetta', 'Hyderabad', 'Sialkot',
  'Gujranwala', 'Bahawalpur', 'Sargodha', 'Sukkur', 'Larkana',
  'Sheikhupura', 'Rahim Yar Khan', 'Jhang', 'Dera Ghazi Khan',
  'Gujrat', 'Abbottabad', 'Mardan', 'Kasur', 'Okara', 'Other',
];

export default function OrderForm() {
  const [form, setForm] = useState({
    name: '', phone: '', address: '', city: '', quantity: 1,
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    // Basic validation
    if (!form.name.trim() || !form.phone.trim() || !form.address.trim() || !form.city) {
      setErrorMsg('Please fill in all required fields.');
      setStatus('error');
      return;
    }
    if (!/^[0-9+\s\-]{10,15}$/.test(form.phone.trim())) {
      setErrorMsg('Please enter a valid phone number.');
      setStatus('error');
      return;
    }

    try {
      const { error } = await supabase.from('orders').insert([{
        name: form.name.trim(),
        phone: form.phone.trim(),
        address: form.address.trim(),
        city: form.city,
        quantity: parseInt(form.quantity),
      }]);

      if (error) throw error;

      setStatus('success');
      setForm({ name: '', phone: '', address: '', city: '', quantity: 1 });
    } catch (err) {
      console.error(err);
      setErrorMsg('Something went wrong. Please try again or order via WhatsApp.');
      setStatus('error');
    }
  };

  const inputClass =
    'w-full bg-dark-700/50 border border-gold-800/30 text-white/90 placeholder-white/20 px-4 py-3.5 rounded-sm text-sm font-sans focus:border-gold-500/60 transition-colors';

  const total = 1800 * form.quantity;

  if (status === 'success') {
    return (
      <div className="glass rounded-sm p-10 text-center animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-gold-600/20 border border-gold-600/40 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-3xl font-bold text-white/90 mb-3">Order Placed!</h3>
        <p className="text-white/50 font-sans text-sm mb-2">
          Your order has been received successfully.
        </p>
        <p className="text-white/40 font-sans text-xs mb-8">
          We'll contact you on your provided number within 24 hours to confirm delivery.
        </p>
        <div className="glass rounded-sm p-4 mb-8 text-left">
          <p className="text-xs text-gold-500 font-sans tracking-wider uppercase mb-2">What happens next?</p>
          <div className="space-y-2 text-xs text-white/50 font-sans">
            <div className="flex items-center gap-2">
              <span className="text-gold-500">①</span> Our team calls to confirm your order
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold-500">②</span> We dispatch within 24 hours
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold-500">③</span> Delivery in 2–4 working days
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold-500">④</span> You pay cash on delivery — simple!
            </div>
          </div>
        </div>
        <button
          onClick={() => setStatus('idle')}
          className="text-gold-500 text-sm font-sans hover:text-gold-300 underline transition-colors"
        >
          Place another order
        </button>
      </div>
    );
  }

  return (
    <div className="glass rounded-sm overflow-hidden">
      {/* Form header */}
      <div className="bg-gradient-to-r from-gold-900/40 to-transparent px-6 py-4 border-b border-gold-800/20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-sans text-gold-500 tracking-widest uppercase mb-1">Cash on Delivery</p>
            <p className="text-white/80 font-sans text-sm">Free delivery across Pakistan</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-white/30 font-sans">Per watch</p>
            <p className="font-display text-2xl font-bold text-gold-400">₨1,800</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        {/* Name */}
        <div>
          <label className="block text-xs font-sans text-white/40 tracking-wider uppercase mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Ahmed Khan"
            className={inputClass}
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-sans text-white/40 tracking-wider uppercase mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="e.g. 0300 1234567"
            className={inputClass}
            required
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-xs font-sans text-white/40 tracking-wider uppercase mb-2">
            City *
          </label>
          <select
            name="city"
            value={form.city}
            onChange={handleChange}
            className={inputClass + ' appearance-none cursor-pointer'}
            required
          >
            <option value="" disabled>Select your city</option>
            {PAKISTAN_CITIES.map(c => (
              <option key={c} value={c} className="bg-dark-800 text-white">{c}</option>
            ))}
          </select>
        </div>

        {/* Address */}
        <div>
          <label className="block text-xs font-sans text-white/40 tracking-wider uppercase mb-2">
            Delivery Address *
          </label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="House/flat number, street, area..."
            rows={3}
            className={inputClass + ' resize-none'}
            required
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-xs font-sans text-white/40 tracking-wider uppercase mb-2">
            Quantity
          </label>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setForm(p => ({ ...p, quantity: Math.max(1, p.quantity - 1) }))}
              className="w-10 h-10 rounded-sm border border-gold-800/30 text-gold-400 hover:bg-gold-900/20 transition-colors flex items-center justify-center font-sans text-lg"
            >−</button>
            <input
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              min="1"
              max="10"
              className={inputClass + ' text-center w-20 flex-none'}
            />
            <button
              type="button"
              onClick={() => setForm(p => ({ ...p, quantity: Math.min(10, p.quantity + 1) }))}
              className="w-10 h-10 rounded-sm border border-gold-800/30 text-gold-400 hover:bg-gold-900/20 transition-colors flex items-center justify-center font-sans text-lg"
            >+</button>
            <div className="flex-1 text-right">
              <p className="text-xs text-white/30 font-sans">Total</p>
              <p className="font-display text-xl font-bold text-gold-400">₨{total.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Error */}
        {status === 'error' && (
          <div className="bg-red-900/20 border border-red-700/30 rounded-sm px-4 py-3 text-red-400 text-sm font-sans">
            {errorMsg}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-4 gold-gradient text-dark-900 font-sans font-semibold text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-all shadow-lg shadow-gold-700/20 disabled:opacity-60 disabled:cursor-not-allowed mt-2 animate-pulse-gold"
        >
          {status === 'loading' ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Placing Order…
            </span>
          ) : (
            `Confirm Order — ₨${total.toLocaleString()} COD`
          )}
        </button>

        <p className="text-center text-xs text-white/25 font-sans pt-1">
          🔒 Secure · No payment online · Pay only when you receive your watch
        </p>
      </form>
    </div>
  );
}

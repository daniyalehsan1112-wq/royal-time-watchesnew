'use client';

import { useEffect, useRef } from 'react';
import OrderForm from '@/components/OrderForm';
import TrustBadges from '@/components/TrustBadges';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Features from '@/components/Features';
import StickyOrderBar from '@/components/StickyOrderBar';

export default function HomePage() {
  const orderRef = useRef(null);

  const scrollToOrder = () => {
    orderRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Intersection observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-dark-900 noise">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 glass">
        <span className="font-display text-xl tracking-widest gold-shimmer font-bold">
          ROYAL TIME
        </span>
        <button
          onClick={scrollToOrder}
          className="text-xs font-sans font-medium tracking-widest uppercase px-5 py-2 gold-gradient text-dark-900 rounded-sm hover:opacity-90 transition-opacity"
        >
          Order Now
        </button>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
        {/* Background rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full border border-gold-700/10 absolute animate-[rotate_40s_linear_infinite]" />
          <div className="w-[800px] h-[800px] rounded-full border border-gold-700/5 absolute animate-[rotate_60s_linear_infinite_reverse]" />
        </div>

        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-700/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Pre-headline tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 text-xs font-sans tracking-widest uppercase text-gold-400">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            Limited Stock Available
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
            <span className="gold-shimmer">Luxury</span>
            <br />
            <span className="text-white/90 italic">Redefined</span>
          </h1>

          <p className="font-body text-lg sm:text-xl text-white/50 max-w-md mb-4 leading-relaxed">
            Precision-crafted wrist watches — built to impress, priced to be yours.
          </p>

          {/* Price tag */}
          <div className="flex items-baseline gap-3 mb-10">
            <span className="font-display text-5xl font-bold text-gold-400">
              ₨1,800
            </span>
            <span className="text-white/30 line-through text-xl font-sans">₨3,500</span>
            <span className="text-xs font-sans bg-gold-600/20 text-gold-400 border border-gold-600/30 px-2 py-1 rounded-sm uppercase tracking-wider">
              49% OFF
            </span>
          </div>

          {/* Watch image placeholder */}
          <div className="relative mb-10 watch-ring">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-dark-700 via-dark-800 to-dark-900 border-2 border-gold-700/30 flex items-center justify-center shadow-2xl animate-float">
              {/* Decorative watch face */}
              <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-gradient-to-br from-dark-600 to-dark-800 border border-gold-600/40 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
                {/* Hour markers */}
                {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
                  <div
                    key={i}
                    className="absolute w-0.5 bg-gold-500/60"
                    style={{
                      height: i % 3 === 0 ? '12px' : '6px',
                      top: '6px',
                      left: '50%',
                      transformOrigin: '50% 90px',
                      transform: `translateX(-50%) rotate(${deg}deg)`,
                    }}
                  />
                ))}
                {/* Crown logo */}
                <div className="text-3xl mb-1">👑</div>
                <span className="font-display text-xs tracking-[0.2em] text-gold-400 uppercase">Royal</span>
                <div className="flex gap-2 mt-3">
                  {/* Hour hand */}
                  <div className="relative w-1 h-12 bg-gradient-to-t from-gold-400 to-transparent rounded-full" style={{transform:'rotate(-30deg)', transformOrigin:'bottom center'}} />
                  {/* Minute hand */}
                  <div className="relative w-0.5 h-16 bg-gradient-to-t from-white/80 to-transparent rounded-full" style={{transform:'rotate(120deg)', transformOrigin:'bottom center'}} />
                </div>
                {/* Center dot */}
                <div className="absolute w-3 h-3 rounded-full bg-gold-400 shadow-lg shadow-gold-400/50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm mx-auto">
            <button
              onClick={scrollToOrder}
              className="flex-1 py-4 gold-gradient text-dark-900 font-sans font-semibold text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-all shadow-lg shadow-gold-700/30 animate-pulse-gold"
            >
              Order Now — COD
            </button>
            <a
              href="https://wa.me/923155069934?text=Hi%2C%20I%20want%20to%20order%20Royal%20Time%20Watches%20(1800%20PKR%20COD)"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-4 bg-[#25D366]/10 border border-[#25D366]/40 text-[#25D366] font-sans font-medium text-sm tracking-wide rounded-sm hover:bg-[#25D366]/20 transition-all flex items-center justify-center gap-2"
            >
              <WhatsAppIcon />
              Order on WhatsApp
            </a>
          </div>

          {/* Delivery note */}
          <p className="mt-5 text-xs font-sans text-white/30 tracking-wider">
            📦 Free delivery in 2–4 days &nbsp;•&nbsp; 💵 Pay only on delivery
          </p>
        </div>
      </section>

      {/* ── TRUST BADGES ── */}
      <TrustBadges />

      {/* ── FEATURES ── */}
      <Features />

      {/* ── ORDER FORM ── */}
      <section ref={orderRef} id="order" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-900/5 to-transparent pointer-events-none" />
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="text-center mb-12 reveal">
            <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold-500 mb-3">Place Your Order</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white/90 mb-4">
              Claim Yours Today
            </h2>
            <p className="font-body text-white/40 text-lg">
              Fill in your details — we'll deliver right to your door. Pay on delivery.
            </p>
          </div>
          <OrderForm />
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <Reviews />

      {/* ── FAQ ── */}
      <FAQ />

      {/* ── FOOTER ── */}
      <footer className="py-12 px-6 border-t border-gold-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-display text-2xl gold-shimmer font-bold tracking-widest mb-3">
            ROYAL TIME WATCHES
          </p>
          <p className="text-white/30 text-sm font-sans mb-4">
            Premium Timepieces · Cash on Delivery · Pakistan Wide
          </p>
          <a
            href="https://wa.me/923155069934"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#25D366] font-sans hover:underline"
          >
            <WhatsAppIcon /> +92 315 506 9934
          </a>
          <p className="mt-6 text-white/15 text-xs font-sans">
            © {new Date().getFullYear()} Royal Time Watches. All rights reserved.
          </p>
        </div>
      </footer>

      {/* ── STICKY MOBILE CTA ── */}
      <StickyOrderBar onOrderClick={scrollToOrder} />
    </main>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

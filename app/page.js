'use client';

import { useEffect, useRef, useState } from 'react';
import OrderForm from '@/components/OrderForm';
import TrustBadges from '@/components/TrustBadges';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Features from '@/components/Features';
import StickyOrderBar from '@/components/StickyOrderBar';

export default function HomePage() {
  const orderRef = useRef(null);
  
  // Slide state and updated image filenames
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    '/ssstik.io_1780182061621.webp',
    '/ssstik.io_1780182066290.webp',
    '/ssstik.io_1780182070257.webp'
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const scrollToOrder = () => {
    orderRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full border border-gold-700/10 absolute animate-[rotate_40s_linear_infinite]" />
          <div className="w-[800px] h-[800px] rounded-full border border-gold-700/5 absolute animate-[rotate_60s_linear_infinite_reverse]" />
        </div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-700/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          
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

          <div className="flex items-baseline gap-3 mb-10">
            <span className="font-display text-5xl font-bold text-gold-400">₨4,900</span>
            <span className="text-white/30 line-through text-xl font-sans">₨7,300</span>
            <span className="text-xs font-sans bg-gold-600/20 text-gold-400 border border-gold-600/30 px-2 py-1 rounded-sm uppercase tracking-wider">
              49% OFF
            </span>
          </div>

          {/* ── IMAGE SLIDER ── */}
          <div className="relative mb-10 flex items-center justify-center gap-4">
            <button onClick={prevSlide} className="w-10 h-10 flex items-center justify-center bg-dark-800 text-gold-400 rounded-full border border-gold-700/30 hover:bg-dark-700 transition-colors z-20">
              &#8592;
            </button>
            
            <div className="w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center overflow-hidden rounded-xl shadow-2xl border-2 border-gold-700/30 animate-float bg-dark-800">
              <img 
                src={images[currentSlide]} 
                alt={`Royal Time Watch View ${currentSlide + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>

            <button onClick={nextSlide} className="w-10 h-10 flex items-center justify-center bg-dark-800 text-gold-400 rounded-full border border-gold-700/30 hover:bg-dark-700 transition-colors z-20">
              &#8594;
            </button>
          </div>

        </div>
      </section>

      {/* ── SECTIONS RESTORED ── */}
      <Features />
      <TrustBadges />
      
      <div ref={orderRef}>
        <OrderForm />
      </div>
      
      <Reviews />
      <FAQ />
      <StickyOrderBar />

    </main>
  );
            }

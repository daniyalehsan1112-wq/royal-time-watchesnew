'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Is Cash on Delivery really safe?',
    a: 'Absolutely. With Cash on Delivery, you pay nothing upfront. The courier collects payment only when your watch is physically handed to you. You can inspect it first — if anything is wrong, you can refuse delivery and owe nothing.',
  },
  {
    q: 'How long does delivery take?',
    a: 'We deliver across Pakistan in 2–4 working days. Major cities like Karachi, Lahore, and Islamabad typically receive orders in 2 days. Remote areas may take up to 4–5 days.',
  },
  {
    q: 'Can I return the watch if I don\'t like it?',
    a: 'Yes! If the product is defective or damaged, contact us within 48 hours of delivery via WhatsApp. We\'ll arrange a replacement or full refund. We want you to be 100% satisfied.',
  },
  {
    q: 'What if I want to order multiple watches?',
    a: 'Simply increase the quantity in the order form. We offer the same price of ₨1,800 per watch regardless of quantity. Bulk orders are welcome!',
  },
  {
    q: 'How will I know my order was received?',
    a: 'After placing your order, you\'ll see a confirmation message on screen. Our team will also call you on the provided number within 24 hours to confirm your order details.',
  },
  {
    q: 'Is the watch waterproof?',
    a: 'The watch is water-resistant for everyday use — perfect for rain and hand-washing. We don\'t recommend submerging it in water for prolonged periods.',
  },
  {
    q: 'Can I track my order?',
    a: 'Yes! Once your order is dispatched, we\'ll share a tracking number via WhatsApp or call. You can use it to track your delivery in real-time.',
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/8 last:border-none">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-sans font-medium text-white/75 text-sm pr-4 group-hover:text-white/90 transition-colors">
          {q}
        </span>
        <span className={`flex-none w-5 h-5 rounded-full border border-gold-700/40 flex items-center justify-center transition-transform ${open ? 'rotate-45 border-gold-500/60' : ''}`}>
          <svg className="w-3 h-3 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-5 animate-fade-in">
          <p className="font-sans text-white/45 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 reveal">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold-500 mb-3">FAQ</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white/90">
            Common Questions
          </h2>
        </div>
        <div className="glass rounded-sm px-6 reveal">
          {faqs.map(f => <FAQItem key={f.q} {...f} />)}
        </div>

        {/* WhatsApp CTA below FAQ */}
        <div className="mt-8 text-center reveal">
          <p className="text-white/35 text-sm font-sans mb-4">Still have questions?</p>
          <a
            href="https://wa.me/923155069934"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-sm font-sans rounded-sm hover:bg-[#25D366]/20 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

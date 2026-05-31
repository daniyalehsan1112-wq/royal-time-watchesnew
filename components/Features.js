const features = [
  {
    number: '01',
    title: 'Premium Craftsmanship',
    desc: 'Built with high-grade stainless steel and mineral glass — crafted to endure years of daily wear while looking pristine.',
    icon: '⚙️',
  },
  {
    number: '02',
    title: 'Timeless Elegance',
    desc: 'A design language that speaks luxury. Whether at a formal dinner or a business meeting, Royal Time commands attention.',
    icon: '✨',
  },
  {
    number: '03',
    title: 'Water Resistant',
    desc: 'Rated water-resistant for everyday protection. Rain, splashes, and daily life — no worries.',
    icon: '💧',
  },
  {
    number: '04',
    title: 'Cash on Delivery',
    desc: 'Zero risk. Pay only when your watch arrives at your doorstep. Trusted by thousands of customers across Pakistan.',
    icon: '💵',
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold-500 mb-3">Why Royal Time</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white/90">
            Crafted for the <span className="italic text-gold-400">discerning</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div
              key={f.number}
              className={`glass rounded-sm p-8 reveal delay-${(i + 1) * 100} group hover:border-gold-600/30 transition-colors`}
            >
              <div className="flex items-start gap-5">
                <div>
                  <span className="font-display text-4xl text-gold-800/40 font-bold leading-none">
                    {f.number}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{f.icon}</span>
                    <h3 className="font-display text-xl font-semibold text-white/85 group-hover:text-gold-300 transition-colors">
                      {f.title}
                    </h3>
                  </div>
                  <p className="font-sans text-white/40 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

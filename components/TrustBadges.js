export default function TrustBadges() {
  const badges = [
    { icon: '💵', title: 'Cash on Delivery', desc: 'Pay only when it arrives' },
    { icon: '🚚', title: 'Fast Delivery', desc: '2–4 days across Pakistan' },
    { icon: '🛡️', title: 'Secure Order', desc: 'Your data is protected' },
    { icon: '↩️', title: 'Easy Returns', desc: 'Hassle-free return policy' },
  ];

  return (
    <section className="py-12 px-6 border-y border-gold-800/15">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {badges.map((b) => (
          <div key={b.title} className="flex flex-col items-center text-center p-4 glass rounded-sm reveal">
            <span className="text-2xl mb-2">{b.icon}</span>
            <p className="font-sans font-semibold text-white/80 text-xs tracking-wide uppercase mb-1">{b.title}</p>
            <p className="font-sans text-white/35 text-xs">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

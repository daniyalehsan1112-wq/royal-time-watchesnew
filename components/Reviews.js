const reviews = [
  {
    name: 'Ahmed Raza',
    city: 'Lahore',
    rating: 5,
    text: 'Ordered two watches as gifts. The quality is outstanding for the price. My brother thought I spent 5000+ on it. Will definitely order again!',
    date: '2 weeks ago',
    avatar: 'A',
  },
  {
    name: 'Fatima Malik',
    city: 'Karachi',
    rating: 5,
    text: 'Delivered in just 3 days to Karachi. The watch looks amazing and the COD option makes it super easy. Highly recommended!',
    date: '1 month ago',
    avatar: 'F',
  },
  {
    name: 'Usman Tariq',
    city: 'Islamabad',
    rating: 5,
    text: "Bought it for my dad's birthday. He absolutely loves it. Premium feel, great packaging, and fast delivery. 10/10.",
    date: '3 weeks ago',
    avatar: 'U',
  },
  {
    name: 'Sana Javed',
    city: 'Faisalabad',
    rating: 5,
    text: 'I was skeptical at first but the watch exceeded my expectations. Cash on delivery means no risk. Very happy with my purchase!',
    date: '5 days ago',
    avatar: 'S',
  },
  {
    name: 'Bilal Hassan',
    city: 'Multan',
    rating: 5,
    text: "Best value watch I've seen in Pakistan at this price. The gold accents look stunning. Friends keep asking where I got it from.",
    date: '2 months ago',
    avatar: 'B',
  },
  {
    name: 'Zara Niazi',
    city: 'Rawalpindi',
    rating: 5,
    text: 'Third purchase from Royal Time. Every single watch has been perfect. Delivery is always on time. Trusted seller!',
    date: '1 week ago',
    avatar: 'Z',
  },
];    rating: 5,
    text: 'Best value watch I've seen in Pakistan at this price. The gold accents look stunning. Friends keep asking where I got it from.',
    date: '2 months ago',
    avatar: 'B',
  },
  {
    name: 'Zara Niazi',
    city: 'Rawalpindi',
    rating: 5,
    text: 'Third purchase from Royal Time. Every single watch has been perfect. Delivery is always on time. Trusted seller!',
    date: '1 week ago',
    avatar: 'Z',
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-24 px-6 bg-dark-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold-500 mb-3">Customer Reviews</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white/90 mb-4">
            Loved Across Pakistan
          </h2>
          <div className="flex items-center justify-center gap-2">
            <Stars />
            <span className="text-white/60 font-sans text-sm">4.9 / 5 · 500+ happy customers</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`glass rounded-sm p-6 reveal delay-${Math.min((i + 1) * 100, 500)}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full gold-gradient flex items-center justify-center text-dark-900 font-sans font-bold text-sm">
                    {r.avatar}
                  </div>
                  <div>
                    <p className="font-sans font-medium text-white/80 text-sm">{r.name}</p>
                    <p className="font-sans text-white/30 text-xs">{r.city}</p>
                  </div>
                </div>
                <span className="text-white/20 text-xs font-sans">{r.date}</span>
              </div>
              <Stars count={r.rating} />
              <p className="font-body text-white/55 text-sm leading-relaxed mt-3 italic">
                "{r.text}"
              </p>
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2">
                <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-green-400 text-xs font-sans">Verified Purchase</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

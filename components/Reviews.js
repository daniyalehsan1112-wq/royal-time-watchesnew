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
];

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-3.5 h-3.5 text-gold-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-24 px-6 bg-dark-800/30">
      {/* Rest of your component remains unchanged */}
    </section>
  );
}

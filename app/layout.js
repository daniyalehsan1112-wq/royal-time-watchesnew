import './globals.css';

export const metadata = {
  title: 'Royal Time Watches — Luxury Timepieces | COD Pakistan',
  description: 'Premium luxury wrist watches available in Pakistan. Cash on Delivery. Order now for just 1800 PKR with free delivery in 2–4 days.',
  keywords: 'watches pakistan, luxury watches, wrist watch, COD pakistan, 1800 pkr watch',
  openGraph: {
    title: 'Royal Time Watches — Luxury Timepieces',
    description: 'Premium wrist watches — 1800 PKR. Cash on Delivery across Pakistan.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⌚</text></svg>" />
      </head>
      <body>{children}</body>
    </html>
  );
}

# 👑 Royal Time Watches

A high-conversion, single-product e-commerce store for Pakistan — built with Next.js 14 (App Router) + Tailwind CSS + Supabase.

**Live features:**
- Luxury dark-gold landing page optimized for TikTok/social ads
- Cash-on-delivery order form with Supabase backend
- WhatsApp ordering integration
- Mobile sticky CTA bar
- Admin dashboard with stats, search, and CSV export
- Trust badges, customer reviews, FAQ accordion

---

## 🚀 Deploy to Vercel (3 steps)

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/royal-time-watches.git
git push -u origin main
```

### 2. Import on Vercel
- Go to [vercel.com](https://vercel.com) → New Project
- Import your GitHub repo
- Vercel auto-detects Next.js

### 3. Add Environment Variables on Vercel
In Vercel project settings → Environment Variables, add:

```
NEXT_PUBLIC_SUPABASE_URL = https://aglplnynholtocscmgif.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Click **Deploy** — done! 🎉

---

## 🗄️ Supabase Table

Make sure your `orders` table exists with these columns:

```sql
create table orders (
  id bigserial primary key,
  name text not null,
  phone text not null,
  address text not null,
  city text not null,
  quantity integer default 1,
  created_at timestamptz default now()
);

-- Allow public inserts (for COD orders)
alter table orders enable row level security;

create policy "Allow public insert" on orders
  for insert with check (true);

create policy "Allow authenticated read" on orders
  for select using (auth.role() = 'authenticated');
```

---

## 📁 Project Structure

```
royal-time/
├── app/
│   ├── layout.js          # Root layout + metadata
│   ├── page.js            # Main landing page
│   ├── globals.css        # Global styles + animations
│   └── admin/
│       ├── layout.js
│       └── page.js        # Admin orders dashboard
├── components/
│   ├── OrderForm.js       # COD order form with Supabase
│   ├── TrustBadges.js     # COD/delivery trust signals
│   ├── Features.js        # Product feature grid
│   ├── Reviews.js         # Customer testimonials
│   ├── FAQ.js             # Accordion FAQ
│   └── StickyOrderBar.js  # Mobile fixed CTA
├── lib/
│   └── supabase.js        # Supabase client
├── .env.local             # Local environment variables
├── .env.example           # Template for env vars
├── vercel.json            # Vercel config
└── tailwind.config.js
```

---

## 📱 Pages

| Route    | Description                              |
|----------|------------------------------------------|
| `/`      | Landing page + order form                |
| `/admin` | Orders dashboard (password not included) |

> **Note:** Add authentication to `/admin` before going live. For a quick solution, you can use Vercel's password protection feature on the admin route.

---

## 📞 Contact / WhatsApp
WhatsApp: +92 315 506 9934  
Pre-filled message: `Hi, I want to order Royal Time Watches (1800 PKR COD)`

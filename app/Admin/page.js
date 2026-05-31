'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function AdminPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [sortDir, setSortDir] = useState('desc');

  const fetchOrders = async () => {
    setLoading(true);
    setError('');
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: sortDir === 'asc' });

      if (error) throw error;
      setOrders(data || []);
    } catch (err) {
      setError('Failed to load orders. Check your Supabase configuration.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchOrders(); }, [sortDir]);

  const filtered = orders.filter(o =>
    [o.name, o.phone, o.city, o.address].some(f =>
      f?.toLowerCase().includes(search.toLowerCase())
    )
  );

  const totalRevenue = filtered.reduce((sum, o) => sum + (o.quantity || 1) * 1800, 0);
  const totalUnits = filtered.reduce((sum, o) => sum + (o.quantity || 1), 0);

  const formatDate = (str) => {
    if (!str) return '—';
    return new Date(str).toLocaleString('en-PK', {
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-dark-900" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      {/* Header */}
      <div className="border-b border-gold-800/20 px-6 py-5 flex items-center justify-between glass sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <span className="text-xl">👑</span>
          <div>
            <p className="font-bold text-white/90 tracking-wider text-sm uppercase">Royal Time</p>
            <p className="text-xs text-gold-500">Orders Dashboard</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={fetchOrders}
            className="text-xs text-white/40 hover:text-white/70 flex items-center gap-1.5 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh
          </button>
          <a
            href="/"
            className="text-xs px-3 py-1.5 border border-gold-800/30 text-gold-500 rounded-sm hover:bg-gold-900/20 transition-colors"
          >
            ← Back to Site
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Orders', value: filtered.length, icon: '📋' },
            { label: 'Total Units', value: totalUnits, icon: '⌚' },
            { label: 'Total Revenue', value: `₨${totalRevenue.toLocaleString()}`, icon: '💵' },
            { label: 'Avg Order', value: `₨${filtered.length ? Math.round(totalRevenue / filtered.length).toLocaleString() : 0}`, icon: '📊' },
          ].map(s => (
            <div key={s.label} className="glass rounded-sm p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-white/30 uppercase tracking-wider">{s.label}</span>
                <span className="text-lg">{s.icon}</span>
              </div>
              <p className="text-2xl font-bold text-white/90">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            placeholder="Search by name, phone, city..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-1 bg-dark-700/50 border border-gold-800/30 text-white/80 placeholder-white/20 px-4 py-2.5 rounded-sm text-sm focus:outline-none focus:border-gold-500/50"
          />
          <button
            onClick={() => setSortDir(d => d === 'desc' ? 'asc' : 'desc')}
            className="px-4 py-2.5 glass rounded-sm text-xs text-white/50 hover:text-white/80 transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
            {sortDir === 'desc' ? 'Newest First' : 'Oldest First'}
          </button>
          <button
            onClick={() => {
              if (!filtered.length) return;
              const csv = [
                ['ID', 'Name', 'Phone', 'City', 'Address', 'Quantity', 'Amount (PKR)', 'Date'].join(','),
                ...filtered.map(o => [
                  o.id,
                  `"${o.name}"`,
                  o.phone,
                  o.city,
                  `"${o.address}"`,
                  o.quantity,
                  (o.quantity || 1) * 1800,
                  formatDate(o.created_at),
                ].join(',')),
              ].join('\n');
              const blob = new Blob([csv], { type: 'text/csv' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `royal-time-orders-${Date.now()}.csv`;
              a.click();
            }}
            className="px-4 py-2.5 bg-gold-700/20 border border-gold-700/30 text-gold-400 rounded-sm text-xs hover:bg-gold-700/30 transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Export CSV
          </button>
        </div>

        {/* Table */}
        {loading ? (
          <div className="glass rounded-sm p-16 text-center">
            <div className="flex items-center justify-center gap-3 text-white/40">
              <svg className="animate-spin w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Loading orders…
            </div>
          </div>
        ) : error ? (
          <div className="glass rounded-sm p-10 text-center">
            <p className="text-red-400 text-sm mb-3">{error}</p>
            <button onClick={fetchOrders} className="text-gold-500 text-xs underline">Retry</button>
          </div>
        ) : filtered.length === 0 ? (
          <div className="glass rounded-sm p-16 text-center">
            <p className="text-white/30 text-sm">
              {search ? 'No orders match your search.' : 'No orders yet. Share the store link to start getting orders!'}
            </p>
          </div>
        ) : (
          <div className="glass rounded-sm overflow-hidden">
            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/8">
                    {['#', 'Name', 'Phone', 'City', 'Address', 'Qty', 'Amount', 'Date'].map(h => (
                      <th key={h} className="text-left px-5 py-3.5 text-xs text-white/30 font-medium tracking-widest uppercase">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((o, i) => (
                    <tr
                      key={o.id}
                      className="border-b border-white/5 last:border-none hover:bg-white/2 transition-colors"
                    >
                      <td className="px-5 py-4 text-white/25 text-xs">{o.id}</td>
                      <td className="px-5 py-4 text-white/80 text-sm font-medium">{o.name}</td>
                      <td className="px-5 py-4">
                        <a href={`tel:${o.phone}`} className="text-gold-400 text-sm hover:underline">
                          {o.phone}
                        </a>
                      </td>
                      <td className="px-5 py-4 text-white/60 text-sm">{o.city}</td>
                      <td className="px-5 py-4 text-white/40 text-xs max-w-[180px] truncate" title={o.address}>
                        {o.address}
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-block px-2 py-0.5 bg-gold-900/30 text-gold-400 text-xs rounded-sm border border-gold-700/20">
                          ×{o.quantity || 1}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-white/80 text-sm font-medium">
                        ₨{((o.quantity || 1) * 1800).toLocaleString()}
                      </td>
                      <td className="px-5 py-4 text-white/30 text-xs whitespace-nowrap">
                        {formatDate(o.created_at)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden divide-y divide-white/5">
              {filtered.map((o) => (
                <div key={o.id} className="p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-white/85">{o.name}</p>
                    <span className="text-gold-400 font-bold text-sm">₨{((o.quantity || 1) * 1800).toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-white/40">
                    <a href={`tel:${o.phone}`} className="text-gold-500 hover:underline">{o.phone}</a>
                    <span>•</span>
                    <span>{o.city}</span>
                    <span>•</span>
                    <span>×{o.quantity || 1}</span>
                  </div>
                  <p className="text-xs text-white/30 truncate">{o.address}</p>
                  <p className="text-xs text-white/20">{formatDate(o.created_at)}</p>
                </div>
              ))}
            </div>

            <div className="px-5 py-3.5 border-t border-white/5 flex items-center justify-between">
              <p className="text-xs text-white/25">{filtered.length} order{filtered.length !== 1 ? 's' : ''}</p>
              <p className="text-xs text-gold-500 font-medium">Total: ₨{totalRevenue.toLocaleString()} PKR</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

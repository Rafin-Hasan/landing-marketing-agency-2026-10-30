export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6">
        <span className="font-bold text-xl">Bloom Digital</span>
        <a href="#cta" className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition">
          Get a Quote
        </a>
      </nav>

      <header className="max-w-4xl mx-auto text-center px-6 py-24">
        <p className="uppercase tracking-wide text-emerald-600 font-semibold mb-4">Growth Marketing</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Marketing that actually moves revenue</h1>
        <p className="text-lg text-slate-600 mb-10">Performance marketing, content, and SEO for brands that are tired of vanity metrics.</p>
        <a href="#cta" className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition">
          Book a Strategy Call
        </a>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Performance Ads</h3>
          <p className="text-slate-600">Paid campaigns optimized for real ROI, not clicks.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">SEO That Compounds</h3>
          <p className="text-slate-600">Content built to rank and keep ranking.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Transparent Reporting</h3>
          <p className="text-slate-600">A live dashboard, not a monthly PDF.</p>
        </div>
      </section>

      <section id="cta" className="bg-emerald-600 text-white text-center px-6 py-20">
        <h2 className="text-3xl font-bold mb-4">Let’s grow your pipeline</h2>
        <p className="mb-8 text-emerald-100">Free 20-minute audit of your current funnel.</p>
        <a href="#" className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-100 transition">
          Book a Strategy Call
        </a>
      </section>

      <footer className="text-center py-8 text-slate-400 text-sm">
        © 2026 Bloom Digital. All rights reserved.
      </footer>
    </div>
  )
}

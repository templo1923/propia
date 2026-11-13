export default function Hero({ dict }: { dict: any }) {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 px-6 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <span className="inline-block bg-blue-900/50 text-blue-300 border border-blue-700/50 text-xs font-semibold px-3 py-1 rounded-full">
          {dict.hero.badge}
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          {dict.hero.title}
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
          {dict.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a href="#pricing" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-3 rounded-xl transition shadow-lg shadow-blue-600/30 text-center">
            {dict.hero.primaryCta}
          </a>
          <a href="#services" className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium px-8 py-3 rounded-xl transition border border-slate-700 text-center">
            {dict.hero.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}

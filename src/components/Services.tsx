export default function Services({ dict }: { dict: any }) {
  const items = [dict.services.item1, dict.services.item2, dict.services.item3, dict.services.item4];
  return (
    <section id="services" className="py-24 px-6 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">{dict.services.title}</h2>
          <p className="text-slate-400">{dict.services.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

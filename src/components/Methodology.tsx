export default function Methodology({ dict }: { dict: any }) {
  const steps = [dict.methodology.step1, dict.methodology.step2, dict.methodology.step3, dict.methodology.step4];
  return (
    <section id="methodology" className="py-24 px-6 bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">{dict.methodology.title}</h2>
          <p className="text-slate-400">{dict.methodology.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, idx) => {
            const [title, desc] = step.split(": ");
            return (
              <div key={idx} className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <h3 className="text-blue-400 font-bold text-sm tracking-wide">{title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

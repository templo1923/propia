import { siteConfig } from "@/config/site.config";

export default function Pricing({ lang, dict }: { lang: string; dict: any }) {
  return (
    <section id="pricing" className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">{dict.pricing.title}</h2>
          <p className="text-slate-400">{dict.pricing.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.pricingPlans.map((plan) => {
            const name = lang === "es" ? plan.nameEs : plan.nameEn;
            const features = lang === "es" ? plan.featuresEs : plan.featuresEn;
            return (
              <div key={plan.id} className={`p-8 rounded-2xl bg-slate-950 border ${plan.popular ? 'border-blue-500 shadow-xl shadow-blue-500/10' : 'border-slate-800'} flex flex-col justify-between space-y-6 relative`}>
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {lang === "es" ? "Más Solicitado" : "Most Popular"}
                  </span>
                )}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">{name}</h3>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-extrabold">${plan.priceUSD}</span>
                    <span className="text-slate-400 text-sm">USD ({plan.period})</span>
                  </div>
                  <ul className="space-y-3 pt-4 border-t border-slate-800 text-sm text-slate-300">
                    {features.map((feat, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-blue-400 font-bold">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#contact" className={`w-full py-3 rounded-xl font-medium text-center transition ${plan.popular ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-slate-800 hover:bg-slate-700 text-slate-200'}`}>
                  {dict.pricing.btn}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

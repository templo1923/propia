import { siteConfig } from "@/config/site.config";
import Link from "next/link";

export default function Footer({ lang, dict }: { lang: string; dict: any }) {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="space-y-3">
          <h3 className="text-white font-bold text-lg">{siteConfig.brand.name}</h3>
          <p className="text-sm">{siteConfig.brand.tagline}</p>
          <div className="text-xs space-y-1 text-slate-500 pt-2">
            <p><strong>Razón Social:</strong> {siteConfig.brand.legalName}</p>
            <p><strong>NIT:</strong> {siteConfig.brand.nit}</p>
            <p><strong>Ubicación:</strong> {siteConfig.contact.address}</p>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider">{dict.nav.services}</h4>
          <ul className="text-sm space-y-1">
            <li><a href="#services" className="hover:text-white transition">Full-Stack</a></li>
            <li><a href="#services" className="hover:text-white transition">APIs & CRM</a></li>
            <li><a href="#services" className="hover:text-white transition">Cloud & VPS</a></li>
            <li><a href="#services" className="hover:text-white transition">Fintech</a></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider">{dict.footer.legal}</h4>
          <ul className="text-sm space-y-1">
            <li><Link href={`/${lang}/terminos`} className="hover:text-white transition">{dict.footer.terms}</Link></li>
            <li><Link href={`/${lang}/privacidad`} className="hover:text-white transition">{dict.footer.privacy}</Link></li>
            <li><Link href={`/${lang}/reembolsos`} className="hover:text-white transition">{dict.footer.refunds}</Link></li>
            <li><Link href={`/${lang}/entregas`} className="hover:text-white transition">{dict.footer.delivery}</Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider">{dict.nav.contact}</h4>
          <p className="text-sm">Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-blue-400 hover:underline">{siteConfig.contact.email}</a></p>
          <p className="text-sm">Tel / WhatsApp: {siteConfig.contact.phone}</p>
          <div className="pt-2">
            <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-3 py-2 rounded transition">
              Soporte WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} {siteConfig.brand.name}. {dict.footer.rights}
      </div>
    </footer>
  );
}

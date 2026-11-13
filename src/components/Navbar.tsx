import { siteConfig } from "@/config/site.config";
import Link from "next/link";

export default function Navbar({ lang, dict }: { lang: string; dict: any }) {
  const nextLang = lang === "es" ? "en" : "es";
  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href={`/${lang}`} className="text-white font-bold text-xl tracking-tight">
          {siteConfig.brand.name}
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-sm text-slate-300">
          <a href="#services" className="hover:text-white transition">{dict.nav.services}</a>
          <a href="#pricing" className="hover:text-white transition">{dict.nav.pricing}</a>
          <a href="#methodology" className="hover:text-white transition">{dict.nav.method}</a>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href={`/${nextLang}`} className="text-xs font-semibold uppercase bg-slate-800 text-slate-300 px-2.5 py-1.5 rounded hover:bg-slate-700 transition">
            {lang.toUpperCase()} | {nextLang.toUpperCase()}
          </Link>
          <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition shadow-lg shadow-blue-600/20">
            {dict.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}

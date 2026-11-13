import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Methodology from "@/components/Methodology";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import esDict from "@/dictionaries/es.json";
import enDict from "@/dictionaries/en.json";

export default function Page({ params }: { params: { lang: string } }) {
  const lang = params.lang === "en" ? "en" : "es";
  const dict = lang === "en" ? enDict : esDict;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar lang={lang} dict={dict} />
      <main>
        <Hero dict={dict} />
        <Services dict={dict} />
        <Pricing lang={lang} dict={dict} />
        <Methodology dict={dict} />
        <ContactForm dict={dict} />
      </main>
      <Footer lang={lang} dict={dict} />
    </div>
  );
}

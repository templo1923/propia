import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Methodology from "@/components/Methodology";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import fs from "fs";
import path from "path";

async function getDictionary(lang: string) {
  const filePath = path.join(process.cwd(), "src/dictionaries", `${lang}.json`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContent);
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang === "en" ? "en" : "es";
  const dict = await getDictionary(lang);

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

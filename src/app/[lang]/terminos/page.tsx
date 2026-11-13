import { siteConfig } from "@/config/site.config";
import Link from "next/link";

export default function LegalPage({ params }: { params: { lang: string } }) {
  const lang = params?.lang === "en" ? "en" : "es";
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-slate-300 space-y-6 bg-slate-950 min-h-screen">
      <Link href={`/${lang}`} className="text-blue-400 hover:underline text-sm inline-block mb-4">
        ← Volver al inicio
      </Link>
      <h1 className="text-3xl font-bold text-white">Términos y Condiciones del Servicio</h1>
      <p className="text-sm text-slate-400">Última actualización: Noviembre 2026</p>
      
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">1. Identidad de la Empresa</h2>
        <p>Los presentes términos regulan la prestación de servicios tecnológicos ofrecidos por <strong>{siteConfig.brand.name}</strong> (operado legalmente por <strong>{siteConfig.brand.legalName}</strong>, NIT: {siteConfig.brand.nit}), con domicilio principal en {siteConfig.contact.address}.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">2. Alcance Operativo</h2>
        <p>Kiamber Corp provee servicios intangibles B2B, que incluyen desarrollo de software a medida, consultoría en infraestructura cloud, automatización de sistemas y arquitecturas de API.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">3. Disposiciones Legales y Cumplimiento</h2>
        <p>Una vez completado el pago total de los honorarios acordados, la propiedad intelectual y los códigos fuente desarrollados son transferidos al cliente, conservando {siteConfig.brand.name} los derechos sobre librerías base utilizadas.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">4. Contacto y Reclamaciones</h2>
        <p>Para cualquier notificación legal o soporte, puede escribir directamente al correo corporativo {siteConfig.contact.email} o comunicarse al teléfono {siteConfig.contact.phone}.</p>
      </section>
    </main>
  );
}

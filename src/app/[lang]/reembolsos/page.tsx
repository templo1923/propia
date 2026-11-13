import { siteConfig } from "@/config/site.config";

export default function LegalPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-slate-300 space-y-6 bg-slate-950 min-h-screen">
      <h1 className="text-3xl font-bold text-white">Política de Reembolsos y Cancelaciones</h1>
      <p className="text-sm text-slate-400">Última actualización: Noviembre 2026</p>
      
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">1. Identidad de la Empresa</h2>
        <p>Los presentes términos regulan la prestación de servicios tecnológicos ofrecidos por <strong>{siteConfig.brand.name}</strong> (operado legalmente por <strong>{siteConfig.brand.legalName}</strong>, NIT: {siteConfig.brand.nit}), con domicilio principal en {siteConfig.contact.address}.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">2. Alcance Operativo</h2>
        <p>Las solicitudes de reembolso aplican únicamente bajo las siguientes condiciones: 100% de devolución si el servicio o proyecto no ha iniciado operaciones en un plazo de 48 horas tras la confirmación del pago.</p>
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

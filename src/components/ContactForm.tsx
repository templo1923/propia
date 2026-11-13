export default function ContactForm({ dict }: { dict: any }) {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-3xl mx-auto bg-slate-950 border border-slate-800 p-8 md:p-12 rounded-3xl space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">{dict.nav.contact}</h2>
          <p className="text-slate-400 text-sm">Completa el formulario y nos pondremos en contacto contigo de inmediato.</p>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); alert("¡Formulario de prueba enviado con éxito!"); }} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300">Nombre Completo</label>
              <input required type="text" placeholder="Ej. Juan Pérez" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 text-white" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300">Correo Corporativo</label>
              <input required type="email" placeholder="correo@empresa.com" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 text-white" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300">Mensaje o Detalle del Proyecto</label>
            <textarea required rows={4} placeholder="Describe brevemente tus requerimientos..." className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 text-white" />
          </div>
          <div className="flex items-center space-x-3">
            <input required type="checkbox" id="privacy" className="w-4 h-4 rounded border-slate-800 bg-slate-900 text-blue-600 focus:ring-0" />
            <label htmlFor="privacy" className="text-xs text-slate-400">Acepto la Política de Privacidad y el Tratamiento de Datos Personales.</label>
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3.5 rounded-xl transition shadow-lg shadow-blue-600/20">
            Enviar Solicitud
          </button>
        </form>
      </div>
    </section>
  );
}

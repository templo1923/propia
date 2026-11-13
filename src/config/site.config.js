export const siteConfig = {
  brand: {
    name: "Kiamber Corp",
    legalName: "Michael Steber Bermeo Rojas",
    nit: "1085...-...",
    tagline: "Software Engineering & Cloud Infrastructure",
    industry: "Desarrollo de Sistemas Informáticos y Soluciones Cloud",
  },
  contact: {
    email: "contacto@kiambercorp.com",
    billingEmail: "soporte@kiambercorp.com",
    phone: "+57 300 000 0000",
    address: "Bogotá D.C., Colombia",
    whatsappLink: "https://wa.me/573000000000",
  },
  urls: {
    domain: "https://kiambercorp.com",
    github: "https://github.com/kiamber",
  },
  pricingPlans: [
    {
      id: "audit",
      nameEs: "Auditoría & Optimización Cloud",
      nameEn: "Cloud Audit & Optimization",
      priceUSD: 190,
      period: "Pago único",
      featuresEs: [
        "Diagnóstico de seguridad y rendimiento de servidor",
        "Configuración de DNS, SSL y caché avanzado (Cloudflare)",
        "Optimización de tiempos de carga y base de datos",
        "Informe técnico detallado de entrega"
      ],
      featuresEn: [
        "Server security and performance diagnostic",
        "DNS, SSL and advanced cache configuration (Cloudflare)",
        "Load time and database optimization",
        "Detailed technical delivery report"
      ],
      popular: false
    },
    {
      id: "integration",
      nameEs: "Integración API & Automatización",
      nameEn: "API Integration & Automation",
      priceUSD: 550,
      period: "Desde / Proyecto",
      featuresEs: [
        "Desarrollo de conectores REST API a medida",
        "Implementación de flujos CRM o mensajería automatizada",
        "Pruebas en entorno staging y documentación técnica",
        "30 días de soporte post-despliegue"
      ],
      featuresEn: [
        "Custom REST API connectors development",
        "CRM workflows or automated messaging setup",
        "Staging environment tests & technical docs",
        "30 days post-deployment support"
      ],
      popular: true
    },
    {
      id: "system",
      nameEs: "Desarrollo de Sistema a Medida",
      nameEn: "Custom Full-Stack System",
      priceUSD: 1400,
      period: "Desde / Proyecto",
      featuresEs: [
        "Arquitectura Full-Stack completa (Frontend + Backend + DB)",
        "Panel administrativo personalizado y control de roles",
        "Despliegue en producción y capacitación al equipo",
        "Garantía de código y soporte prioritario por 60 días"
      ],
      featuresEn: [
        "Complete Full-Stack architecture (Frontend + Backend + DB)",
        "Custom admin panel & role-based access control",
        "Production deployment & team training",
        "Code warranty & 60-day priority support"
      ],
      popular: false
    }
  ]
};

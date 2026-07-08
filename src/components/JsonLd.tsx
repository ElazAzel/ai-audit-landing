import { faqItems, packages } from "@/lib/data";

const SITE_URL = "https://ai-audit-landing-tau.vercel.app";

const serviceSchemas = packages.map((pkg) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: pkg.name,
  description: `${pkg.audience}. Включает: ${pkg.includes.join(", ")}. Срок: ${pkg.timeframe}.`,
  provider: {
    "@type": "Person",
    name: "Ильяс Азелханов",
    jobTitle: "AI-практик, CEO LinkMAX",
    url: SITE_URL,
  },
  offers: {
    "@type": "Offer",
    price: pkg.price,
    priceCurrency: "KZT",
    availability: "https://schema.org/InStock",
  },
}));

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ильяс Азелханов",
  jobTitle: "AI-практик, CEO LinkMAX",
  description:
    "Встраиваю AI в рабочие процессы команд. Диагностика, сценарии, промпты, демо-ассистенты.",
  url: SITE_URL,
  sameAs: [
    "https://www.instagram.com/elazart",
    "https://lnkmx.my/elazart",
    "https://wa.me/77000204791",
  ],
  telephone: "+77000204791",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Алматы",
    addressCountry: "KZ",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LinkMAX",
  url: "https://lnkmx.my/elazart",
  founder: {
    "@type": "Person",
    name: "Ильяс Азелханов",
  },
  description: "AI-аудит и внедрение AI-сценариев для бизнеса.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+77000204791",
    contactType: "WhatsApp",
    url: "https://wa.me/77000204791",
  },
  sameAs: [
    "https://www.instagram.com/elazart",
    "https://lnkmx.my/elazart",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AI-аудит | Ильяс Азелханов",
  url: SITE_URL,
  description:
    "Практический AI-аудит, воркшопы и внедрение рабочих AI-сценариев для бизнеса.",
  inLanguage: "ru",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "AI-аудит",
      item: `${SITE_URL}#pricing`,
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AI-аудит Ильяс Азелханов",
  description: "AI-аудит и внедрение AI-сценариев для бизнеса.",
  url: SITE_URL,
  telephone: "+77000204791",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Алматы",
    addressCountry: "KZ",
  },
  areaServed: ["Алматы", "Казахстан", "Онлайн"],
  priceRange: "90 000₸ - 900 000₸",
};

const schemas = [
  personSchema,
  organizationSchema,
  websiteSchema,
  breadcrumbSchema,
  localBusinessSchema,
  faqSchema,
  ...serviceSchemas,
];

export function JsonLd() {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

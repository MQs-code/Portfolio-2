import Hero from './Hero/Herosection'
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MQs Creativity",
  "alternateName": "MQs Studio",
  "url": "https://mqs-portfolio.vercel.app",
  "description": "MQs Creativity is a premium one-man software and digital design agency specializing in micro-SaaS engineering, cinematic 3D web experiences, and high-performance cross-platform mobile applications.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "Pakistan"
  },
  "founder": {
    "@type": "Person",
    "name": "Miqdam Ali",
    "jobTitle": "Founder & Engineer"
  },
  "knowsAbout": [
    "Next.js",
    "React Native",
    "Expo",
    "Tailwind CSS",
    "TypeScript",
    "React Three Fiber (R3F)",
    "GSAP",
    "Framer Motion",
    "Supabase",
    "UI/UX Motion Design",
    "Micro-SaaS Engineering",
    "Search Engine Optimization (SEO)",
    "Generative Engine Optimization (GEO)"
  ]
};
const page = () => {
  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <div>
       <Hero/>
    </div>
    </>
    
  )
}

export default page

import Hero from './Hero/Herosection'
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Miqdam Ali",
    "additionalName": "MQs",
    "jobTitle": "Frontend & Mobile App Developer",
    "url": "https://mqs-portfolio.vercel.app",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Pakistan"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "description": "Studying Intermediate in Computer Science (ICS)"
    },
    "description": "Independent Next.js and React Native developer from Pakistan specializing in micro-SaaS creation, cinematic 3D web experiences, and high-performance cross-platform mobile applications.",
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
      "PostgreSQL",
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

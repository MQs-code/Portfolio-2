// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/", 
    },
    sitemap: "https://mqs-portfolio.vercel.app/sitemap.xml",
  };
}
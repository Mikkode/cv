import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CV - Mickael WARIN - Développeur Fullstack",
    short_name: "CV Mickaël WARIN",
    description:
      "CV développeur fullstack spécialisé en Next.js, React, Node.js et TypeScript. Expertise en développement web moderne SAAS et applications performantes.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

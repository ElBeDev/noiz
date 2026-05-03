import type { MetadataRoute } from "next";
import { services } from "@/lib/services";

const BASE_URL = "https://noiz.mx";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes = services.map((s) => ({
    url: `${BASE_URL}/servicios/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...serviceRoutes,
  ];
}

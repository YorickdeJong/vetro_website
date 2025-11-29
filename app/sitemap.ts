import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.vetrocleaningservice.nl'

  // Service areas for location pages (if you add them later)
  const serviceAreas = [
    'haarlem', 'amsterdam', 'utrecht', 'bloemendaal', 'heemstede',
    'amstelveen', 'hoofddorp', 'hilversum', 'amersfoort', 'almere'
  ]

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // You can add location-specific pages here when created:
  // const locationPages = serviceAreas.map((area) => ({
  //   url: `${baseUrl}/schoonmaak-${area}`,
  //   lastModified: new Date(),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.9,
  // }))

  return [...staticPages]
}

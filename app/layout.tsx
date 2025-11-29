import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

// Service areas for SEO
const serviceAreas = [
  'Haarlem', 'Bloemendaal', 'Heemstede', 'Zandvoort', 'Aerdenhout',
  'Overveen', 'Santpoort', 'Velserbroek', 'IJmuiden', 'Beverwijk',
  'Hoofddorp', 'Nieuw-Vennep', 'Amstelveen', 'Amsterdam', 'Zaandam',
  'Purmerend', 'Almere', 'Hilversum', 'Bussum', 'Naarden', 'Huizen',
  'Amersfoort', 'Utrecht', 'Zeist', 'Baarn', 'Soest', 'Loosdrecht',
  'Weesp', 'Muiden', 'Diemen', 'Ouderkerk aan de Amstel'
]

const serviceAreasString = serviceAreas.join(', ')

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vetrocleaningservice.nl'),
  title: {
    default: 'Vetro Cleaning Service | Professionele Schoonmaak Haarlem, Amsterdam, Utrecht & Noord-Holland',
    template: '%s | Vetro Cleaning Service'
  },
  description: `Vetro Cleaning Service - Schoonmaken is een vak. Al 20+ jaar dé specialist in professionele schoonmaak voor kantoren, scholen, zorginstellingen, zwembaden en VVE's in ${serviceAreasString}. Direct contact met de eigenaar, 100% betrouwbaar. Vraag nu een gratis offerte aan!`,
  keywords: [
    // Service keywords
    'schoonmaakbedrijf', 'schoonmaakdiensten', 'professionele schoonmaak', 'bedrijfsschoonmaak',
    'kantoorschoonmaak', 'schoolschoonmaak', 'zorginstelling schoonmaak', 'zwembad schoonmaak',
    'VVE schoonmaak', 'dagelijkse schoonmaak', 'periodieke schoonmaak', 'specialistische reiniging',
    // Location keywords - Primary
    'schoonmaakbedrijf Haarlem', 'schoonmaak Haarlem', 'schoonmaakdiensten Haarlem',
    'schoonmaakbedrijf Amsterdam', 'schoonmaak Amsterdam', 'schoonmaakdiensten Amsterdam',
    'schoonmaakbedrijf Utrecht', 'schoonmaak Utrecht', 'schoonmaakdiensten Utrecht',
    'schoonmaakbedrijf Bloemendaal', 'schoonmaak Bloemendaal',
    // Location keywords - Secondary
    'schoonmaak Noord-Holland', 'schoonmaakbedrijf Noord-Holland',
    'schoonmaak Amstelveen', 'schoonmaak Hoofddorp', 'schoonmaak Heemstede',
    'schoonmaak Hilversum', 'schoonmaak Amersfoort', 'schoonmaak Almere',
    'schoonmaak Zaandam', 'schoonmaak IJmuiden', 'schoonmaak Beverwijk',
    // Long-tail keywords
    'kantoor schoonmaken Haarlem', 'school schoonmaken Amsterdam',
    'zorginstelling schoonmaken Utrecht', 'zwembad schoonmaken Noord-Holland',
    'betrouwbaar schoonmaakbedrijf', 'persoonlijk schoonmaakbedrijf',
    'schoonmaak met persoonlijk contact', 'familiebedrijf schoonmaak'
  ],
  authors: [{ name: 'Vetro Cleaning Service', url: 'https://www.vetrocleaningservice.nl' }],
  creator: 'Vetro Cleaning Service',
  publisher: 'Vetro Cleaning Service',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'><path d='M20 4L22.5 17.5L36 20L22.5 22.5L20 36L17.5 22.5L4 20L17.5 17.5L20 4Z' fill='%230d9488'/><circle cx='30' cy='8' r='2' fill='%231e3a5f'/></svg>",
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Vetro Cleaning Service | #1 Schoonmaakbedrijf Haarlem, Amsterdam & Utrecht',
    description: 'Schoonmaken is een vak. Punt. Al 20+ jaar dé specialist in professionele schoonmaak in Noord-Holland. Kantoren, scholen, zorginstellingen & meer. Direct contact met eigenaar Mitch.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://www.vetrocleaningservice.nl',
    siteName: 'Vetro Cleaning Service',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vetro Cleaning Service - Professionele Schoonmaak',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vetro Cleaning Service | Professionele Schoonmaak Noord-Holland',
    description: 'Al 20+ jaar dé specialist in professionele schoonmaak. Kantoren, scholen, zorginstellingen & meer.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.vetrocleaningservice.nl',
  },
  category: 'business',
  classification: 'Schoonmaakdiensten',
  other: {
    'geo.region': 'NL-NH',
    'geo.placename': 'Haarlem',
    'geo.position': '52.3874;4.6462',
    'ICBM': '52.3874, 4.6462',
    'revisit-after': '7 days',
    'rating': 'general',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Comprehensive structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.vetrocleaningservice.nl/#business",
        "name": "Vetro Cleaning Service",
        "alternateName": "Vetro Schoonmaak",
        "description": "Vetro Cleaning Service is al meer dan 20 jaar dé specialist in professionele schoonmaakdiensten in Noord-Holland. Van Bloemendaal tot Utrecht verzorgen wij schoonmaak voor kantoren, scholen, zorginstellingen, zwembaden en VVE's. Persoonlijk contact met eigenaar Mitch Boekelaar.",
        "url": "https://www.vetrocleaningservice.nl",
        "logo": "https://www.vetrocleaningservice.nl/logo.png",
        "image": "https://www.vetrocleaningservice.nl/og-image.jpg",
        "telephone": "+31620486660",
        "email": "info@vetrocleaningservice.nl",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Westeinde 44",
          "addressLocality": "Haarlem",
          "postalCode": "2036 JJ",
          "addressRegion": "Noord-Holland",
          "addressCountry": "NL"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 52.3874,
          "longitude": 4.6462
        },
        "areaServed": [
          { "@type": "City", "name": "Haarlem" },
          { "@type": "City", "name": "Amsterdam" },
          { "@type": "City", "name": "Utrecht" },
          { "@type": "City", "name": "Bloemendaal" },
          { "@type": "City", "name": "Heemstede" },
          { "@type": "City", "name": "Amstelveen" },
          { "@type": "City", "name": "Hoofddorp" },
          { "@type": "City", "name": "Hilversum" },
          { "@type": "City", "name": "Amersfoort" },
          { "@type": "City", "name": "Almere" },
          { "@type": "City", "name": "Zaandam" },
          { "@type": "City", "name": "IJmuiden" },
          { "@type": "City", "name": "Zandvoort" },
          { "@type": "City", "name": "Aerdenhout" },
          { "@type": "City", "name": "Overveen" },
          { "@type": "City", "name": "Santpoort" },
          { "@type": "City", "name": "Beverwijk" },
          { "@type": "City", "name": "Purmerend" },
          { "@type": "City", "name": "Bussum" },
          { "@type": "City", "name": "Naarden" },
          { "@type": "City", "name": "Zeist" },
          { "@type": "City", "name": "Baarn" },
          { "@type": "City", "name": "Soest" },
          { "@type": "AdministrativeArea", "name": "Noord-Holland" }
        ],
        "founder": {
          "@type": "Person",
          "name": "Mitch Boekelaar"
        },
        "foundingDate": "2004",
        "numberOfEmployees": {
          "@type": "QuantitativeValue",
          "value": 10
        },
        "priceRange": "$$",
        "currenciesAccepted": "EUR",
        "paymentAccepted": "Cash, Credit Card, Bank Transfer",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "07:00",
            "closes": "18:00"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Schoonmaakdiensten",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Kantoorschoonmaak",
                "description": "Dagelijkse schoonmaak van kantoorruimtes en bedrijfspanden"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Schoolschoonmaak",
                "description": "Hygiënische schoonmaak van scholen en onderwijsinstellingen"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Zorginstelling schoonmaak",
                "description": "Specialistische schoonmaak voor zorginstellingen met extra aandacht voor hygiëne"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Zwembadschoonmaak",
                "description": "Professionele reiniging van zwembaden en wellness faciliteiten"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "VVE schoonmaak",
                "description": "Schoonmaak van gemeenschappelijke ruimtes in appartementencomplexen"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Praktijk schoonmaak",
                "description": "Schoonmaak van medische en therapeutische praktijken"
              }
            }
          ]
        },
        "sameAs": [],
        "slogan": "Schoonmaken is een vak. Punt.",
        "knowsAbout": [
          "Professionele schoonmaak",
          "Kantoorschoonmaak",
          "Schoolschoonmaak",
          "Zorginstelling schoonmaak",
          "Bedrijfshygiëne"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.vetrocleaningservice.nl/#website",
        "url": "https://www.vetrocleaningservice.nl",
        "name": "Vetro Cleaning Service",
        "description": "Professionele schoonmaakdiensten in Noord-Holland",
        "publisher": {
          "@id": "https://www.vetrocleaningservice.nl/#business"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.vetrocleaningservice.nl/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "inLanguage": "nl-NL"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.vetrocleaningservice.nl/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.vetrocleaningservice.nl"
          }
        ]
      }
    ]
  }

  return (
    <html lang="nl" className={poppins.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </head>
      <body className="font-sans text-gray-900 bg-white">
        <a href="#main" className="skip-link">Ga naar inhoud</a>
        <Header />
        <main id="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

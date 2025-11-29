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

export const metadata: Metadata = {
  title: 'Vetro Cleaning Service | Professionele Schoonmaakdiensten in Haarlem',
  description: 'Vetro Cleaning Service - Schoonmaken is een vak. Meer dan 20 jaar ervaring in professionele schoonmaak voor kantoren, scholen, zorginstellingen en meer. Persoonlijk contact, betrouwbaar en flexibel.',
  keywords: 'schoonmaak, cleaning service, Haarlem, kantoren, scholen, zorginstellingen, zwembaden, VVE',
  authors: [{ name: 'Vetro Cleaning Service' }],
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'><path d='M20 4L22.5 17.5L36 20L22.5 22.5L20 36L17.5 22.5L4 20L17.5 17.5L20 4Z' fill='%230d9488'/><circle cx='30' cy='8' r='2' fill='%231e3a5f'/></svg>",
        type: 'image/svg+xml',
      },
    ],
  },
  openGraph: {
    title: 'Vetro Cleaning Service | Professionele Schoonmaakdiensten',
    description: 'Schoonmaken is een vak. Punt. Meer dan 20 jaar ervaring in professionele schoonmaak.',
    type: 'website',
    locale: 'nl_NL',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={poppins.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Vetro Cleaning Service",
              "description": "Professionele schoonmaakdiensten in Haarlem en omgeving",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Westeinde 44",
                "addressLocality": "Haarlem",
                "postalCode": "2036 JJ",
                "addressCountry": "NL"
              },
              "telephone": "+31620486660",
              "email": "info@vetrocleaningservice.nl",
              "founder": {
                "@type": "Person",
                "name": "Mitch Boekelaar"
              }
            })
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

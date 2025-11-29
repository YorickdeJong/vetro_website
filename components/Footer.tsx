import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Logo className="h-10 w-auto" variant="white" />
            </Link>
            <p className="text-white/70 text-[15px] leading-relaxed">
              Schoonmaken is een vak. Punt.<br />Al meer dan 20 jaar uw partner in professionele schoonmaak.
            </p>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-4">Diensten</h4>
            <div className="flex flex-col gap-2">
              <Link href="/#diensten" className="text-white/70 text-[15px] hover:text-white transition-colors">Kantoren</Link>
              <Link href="/#diensten" className="text-white/70 text-[15px] hover:text-white transition-colors">Schoolgebouwen</Link>
              <Link href="/#diensten" className="text-white/70 text-[15px] hover:text-white transition-colors">Zorginstellingen</Link>
              <Link href="/#diensten" className="text-white/70 text-[15px] hover:text-white transition-colors">Zwembaden</Link>
            </div>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-4">Navigatie</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-white/70 text-[15px] hover:text-white transition-colors">Home</Link>
              <Link href="/team" className="text-white/70 text-[15px] hover:text-white transition-colors">Team</Link>
              <Link href="/#over-ons" className="text-white/70 text-[15px] hover:text-white transition-colors">Over Ons</Link>
              <Link href="/#contact" className="text-white/70 text-[15px] hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-4">Contact</h4>
            <p className="text-white/70 text-[15px] leading-relaxed">
              Westeinde 44<br />2036 JJ Haarlem
            </p>
            <p className="text-white/70 text-[15px] mt-2">
              <a href="tel:+31620486660" className="hover:text-white transition-colors">+31 (0)6 20486660</a>
            </p>
            <p className="text-white/70 text-[15px]">
              <a href="mailto:info@vetrocleaningservice.nl" className="hover:text-white transition-colors">info@vetrocleaningservice.nl</a>
            </p>
          </div>
        </div>
        <div className="pt-6 border-t border-white/10 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Vetro Cleaning Service. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  )
}

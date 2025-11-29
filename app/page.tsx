import Image from 'next/image'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center pt-[72px] text-white bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(135deg, rgba(30, 58, 95, 0.9) 0%, rgba(13, 148, 136, 0.85) 100%), url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80')" }}
        aria-labelledby="hero-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest mb-4 opacity-90 animate-fade-in-up">Professionele Schoonmaak Noord-Holland</p>
            <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 animate-fade-in-up delay-100">
              Schoonmaken is een vak. Punt.
            </h1>
            <p className="text-xl mb-10 opacity-95 animate-fade-in-up delay-200">
              Al meer dan 20 jaar uw partner in professionele schoonmaak in Haarlem, Amsterdam, Utrecht en heel Noord-Holland.
              Altijd bereikbaar, altijd betrouwbaar. Dat is onze belofte.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <Link href="#contact" className="btn btn-primary">Gratis offerte aanvragen</Link>
              <Link href="#diensten" className="btn bg-transparent text-white border-2 border-white/50 hover:border-white hover:bg-white/10">
                Onze diensten
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="diensten" className="section" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <header className="section-header">
              <h2 id="services-heading" className="text-3xl md:text-4xl font-semibold">Schoonmaakdiensten in Noord-Holland</h2>
              <p className="text-gray-500">
                Van Bloemendaal tot Utrecht: wij verzorgen professionele schoonmaak voor diverse sectoren.
                Dagelijkse schoonmaak, specialistische reiniging en alles daartussenin.
              </p>
            </header>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimateOnScroll delay={0}>
              <ServiceCard
                icon={<BuildingIcon />}
                title="Kantoren"
                description="Een frisse werkplek waar uw medewerkers graag komen. Dagelijkse schoonmaak die u niet ziet, maar wel merkt."
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <ServiceCard
                icon={<SchoolIcon />}
                title="Schoolgebouwen"
                description="Gezonde leeromgeving voor leerlingen en docenten. Hygiëne op de eerste plaats, veiligheid als standaard."
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <ServiceCard
                icon={<HeartIcon />}
                title="Zorginstellingen"
                description="Waar hygiëne levensbelangrijk is. Specialistische schoonmaak met oog voor kwetsbare bewoners en patiënten."
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={300}>
              <ServiceCard
                icon={<PoolIcon />}
                title="Zwembaden"
                description="Kristalhelder water verdient een vlekkeloze omgeving. Professionele reiniging van zwembaden en wellness."
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={400}>
              <ServiceCard
                icon={<PracticeIcon />}
                title="Praktijken"
                description="Uw patiënten verdienen een steriele omgeving. Optimale hygiëne voor medische en therapeutische praktijken."
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={500}>
              <ServiceCard
                icon={<HomeIcon />}
                title="VVE's"
                description="Een verzorgde entree maakt het verschil. Representatieve gemeenschappelijke ruimtes voor uw bewoners."
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="section section-alt" aria-labelledby="usp-heading">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <header className="section-header">
              <h2 id="usp-heading" className="text-3xl md:text-4xl font-semibold">Waarom Vetro?</h2>
              <p className="text-gray-500">Dit maakt ons anders. En daar zijn we trots op.</p>
            </header>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimateOnScroll delay={0}>
              <UspItem
                icon={<PersonIcon />}
                title="Persoonlijk Contact"
                description="Bel Mitch direct. Geen wachtrijen, geen keuzemenu's. Gewoon een gesprek van mens tot mens."
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <UspItem
                icon={<ShieldIcon />}
                title="Betrouwbaarheid"
                description="Nog nooit een klant verloren. Niet één. Dat zegt meer dan welke belofte dan ook."
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <UspItem
                icon={<ClockIcon />}
                title="Flexibiliteit"
                description="'s Ochtends vroeg of 's avonds laat. Wij werken wanneer het u uitkomt."
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={300}>
              <UspItem
                icon={<EyeIcon />}
                title="Transparantie"
                description="Geen verrassingen op de factuur. Heldere afspraken, eerlijke prijzen."
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="over-ons" className="section" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80"
                  alt="Professioneel schoonmaakteam aan het werk"
                  width={800}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={150}>
              <div>
                <h2 id="about-heading" className="text-3xl md:text-4xl font-semibold mb-6">Wie Zijn Wij?</h2>
                <p className="text-gray-500 mb-4">
                  Vetro is het verhaal van Mitch Boekelaar. Bijna 20 jaar geleden begonnen als eenmanszaak,
                  inmiddels uitgegroeid tot een hecht team van 10 vakmensen die elke dag het verschil maken.
                </p>
                <p className="text-gray-500 mb-4">
                  Wij geloven dat schoonmaken een echt vak is. Geen bijbaantje, maar vakmanschap.
                  Daarom werken we alleen met mensen die net zo perfectionistisch zijn als wij.
                </p>
                <p className="text-gray-500 mb-6">
                  Bij Vetro bent u geen dossiernummer. U bent een partner. Iemand voor wie we elke dag
                  ons beste werk willen leveren. Dat is hoe we al 20 jaar werken. En dat verandert niet.
                </p>
                <Link href="/team" className="btn btn-primary">
                  Ontmoet ons team
                </Link>

                <div className="flex gap-8 mt-8 pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent">20+</div>
                    <div className="text-sm text-gray-500">Jaar ervaring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent">10</div>
                    <div className="text-sm text-gray-500">Teamleden</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent">0</div>
                    <div className="text-sm text-gray-500">Klanten verloren</div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="werkwijze" className="section section-alt" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <header className="section-header">
              <h2 id="process-heading" className="text-3xl md:text-4xl font-semibold">Zo Werken Wij</h2>
              <p className="text-gray-500">Geen ingewikkelde procedures. Gewoon drie heldere stappen.</p>
            </header>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateOnScroll delay={0}>
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
                <h3 className="text-xl font-semibold mb-3">Kennismaken</h3>
                <p className="text-gray-500">We komen langs, luisteren naar uw wensen en bekijken de situatie. Koffie is altijd welkom.</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={150}>
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
                <h3 className="text-xl font-semibold mb-3">Voorstel</h3>
                <p className="text-gray-500">U ontvangt een heldere offerte. Wat u ziet is wat u betaalt. Geen kleine lettertjes.</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={300}>
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
                <h3 className="text-xl font-semibold mb-3">Aan de Slag</h3>
                <p className="text-gray-500">Ons team komt in actie. Vakkundig, betrouwbaar, met oog voor detail. Elke dag weer.</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <header className="section-header">
              <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-semibold">Wat Klanten Zeggen</h2>
              <p className="text-gray-500">Onze klanten aan het woord.</p>
            </header>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimateOnScroll delay={0}>
              <article className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 card-hover h-full">
                <blockquote className="text-lg italic mb-6 text-gray-900 relative pl-6">
                  <span className="absolute left-0 top-0 text-3xl text-accent not-italic">&ldquo;</span>
                  Toen alles hier onder liep door een rioolverstopping heeft Mitch ons geweldig uit de brand geholpen.
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold">GR</div>
                  <div>
                    <div className="font-semibold">Gert Rootert</div>
                    <div className="text-sm text-gray-500">Directeur, Intermail BV</div>
                  </div>
                </div>
              </article>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <article className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 card-hover h-full">
                <blockquote className="text-lg italic mb-6 text-gray-900 relative pl-6">
                  <span className="absolute left-0 top-0 text-3xl text-accent not-italic">&ldquo;</span>
                  Of er nou een feestje uit de hand liep of een tentoonstelling, Mitch staat altijd klaar.
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold">HW</div>
                  <div>
                    <div className="font-semibold">Hans Wolbers</div>
                    <div className="text-sm text-gray-500">Oprichter, Lava Design</div>
                  </div>
                </div>
              </article>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Service Area / Werkgebied - Important for Local SEO */}
      <section id="werkgebied" className="section section-alt" aria-labelledby="werkgebied-heading">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <header className="section-header">
              <h2 id="werkgebied-heading" className="text-3xl md:text-4xl font-semibold">Ons Werkgebied</h2>
              <p className="text-gray-500">
                Wij verzorgen professionele schoonmaakdiensten in heel Noord-Holland en de Randstad.
                Van Bloemendaal tot Utrecht, wij komen naar u toe.
              </p>
            </header>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              {[
                'Haarlem', 'Amsterdam', 'Utrecht', 'Bloemendaal', 'Heemstede', 'Amstelveen',
                'Hoofddorp', 'Hilversum', 'Amersfoort', 'Almere', 'Zaandam', 'Zandvoort',
                'Aerdenhout', 'Overveen', 'Santpoort', 'IJmuiden', 'Beverwijk', 'Purmerend',
                'Bussum', 'Naarden', 'Zeist', 'Baarn', 'Nieuw-Vennep', 'Diemen'
              ].map((city) => (
                <div key={city} className="bg-white rounded-lg py-3 px-4 shadow-sm border border-gray-100 hover:border-accent hover:shadow-md transition-all">
                  <span className="text-gray-700 font-medium">{city}</span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-center text-gray-500 mt-8">
              Staat uw locatie er niet bij? Neem gerust <a href="#contact" className="text-accent hover:underline">contact</a> met ons op.
              Wij zijn flexibel en komen graag naar u toe!
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="section bg-gradient-to-br from-primary to-[#2d4a6f] text-white" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-semibold mb-4">Klaar voor een Schone Start?</h2>
            <p className="mb-8 opacity-90 max-w-lg mx-auto">Bel, mail of stuur een berichtje. Binnen 24 uur hoort u van ons. Dat beloven we.</p>
            <a href="mailto:info@vetrocleaningservice.nl" className="btn btn-primary">Neem Contact Op</a>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="flex items-center gap-3">
                <LocationIcon />
                <span>Westeinde 44, 2036 JJ Haarlem</span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon />
                <a href="tel:+31620486660" className="hover:opacity-80 transition-opacity">+31 (0)6 20486660</a>
              </div>
              <div className="flex items-center gap-3">
                <EmailIcon />
                <a href="mailto:info@vetrocleaningservice.nl" className="hover:opacity-80 transition-opacity">info@vetrocleaningservice.nl</a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}

// Service Card Component
function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <article className="bg-white rounded-2xl p-8 border border-gray-200 transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-2 hover:border-accent group h-full">
      <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-5 text-accent transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-500 text-[15px]">{description}</p>
    </article>
  )
}

// USP Item Component
function UspItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center p-6 group">
      <div className="w-[72px] h-[72px] bg-accent rounded-full flex items-center justify-center mx-auto mb-5 text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/30" aria-hidden="true">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-[15px]">{description}</p>
    </div>
  )
}

// Icons
function BuildingIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
    </svg>
  )
}

function SchoolIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
    </svg>
  )
}

function PoolIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
    </svg>
  )
}

function PracticeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
    </svg>
  )
}

function HomeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
    </svg>
  )
}

function PersonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-6 h-6 opacity-90" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-6 h-6 opacity-90" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-6 h-6 opacity-90" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  )
}

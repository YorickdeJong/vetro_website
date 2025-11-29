import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ons Team | Vetro Cleaning Service',
  description: 'Maak kennis met het team van Vetro Cleaning Service. Onder leiding van Mitch Boekelaar werken wij met een toegewijd team van professionals.',
}

const teamMembers = [
  {
    name: 'Mitch Boekelaar',
    role: 'Oprichter & Directeur',
    bio: 'Met bijna 20 jaar ervaring in de schoonmaakbranche is Mitch het hart en de ziel van Vetro. Hij staat bekend om zijn persoonlijke aanpak en is altijd bereikbaar voor klanten.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    initials: 'MB',
  },
  {
    name: 'Sandra van Dijk',
    role: 'Operations Manager',
    bio: 'Sandra coördineert alle dagelijkse werkzaamheden en zorgt ervoor dat elk project soepel verloopt. Haar oog voor detail is ongeëvenaard.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    initials: 'SD',
  },
  {
    name: 'Peter Jansen',
    role: 'Senior Schoonmaakspecialist',
    bio: 'Al 12 jaar onderdeel van het team. Peter is specialist in grootschalige projecten en zorginstellingen.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    initials: 'PJ',
  },
  {
    name: 'Maria Santos',
    role: 'Teamleider Kantoren',
    bio: 'Maria leidt ons kantoorschoonmaak team met passie en precisie. Haar teams krijgen consequent de beste feedback van klanten.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    initials: 'MS',
  },
  {
    name: 'Thomas de Groot',
    role: 'Specialist Zwembaden',
    bio: 'Thomas is onze expert op het gebied van zwembad- en wellnessreiniging. Gecertificeerd en altijd up-to-date met de laatste technieken.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    initials: 'TG',
  },
  {
    name: 'Fatima El Amrani',
    role: 'Teamleider Scholen',
    bio: 'Fatima begrijpt de unieke eisen van onderwijsinstellingen. Veiligheid en hygiëne voor kinderen staan bij haar altijd voorop.',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80',
    initials: 'FA',
  },
]

const values = [
  {
    title: 'Vakmanschap',
    description: 'Wij geloven dat schoonmaken een echt vak is dat vakkennis, ervaring en toewijding vereist.',
    icon: <StarIcon />,
  },
  {
    title: 'Teamwork',
    description: 'Samen bereiken we meer. Onze teams werken nauw samen om de beste resultaten te leveren.',
    icon: <TeamIcon />,
  },
  {
    title: 'Respect',
    description: 'Respect voor onze klanten, hun ruimtes en voor elkaar vormt de basis van alles wat we doen.',
    icon: <HeartIcon />,
  },
  {
    title: 'Groei',
    description: 'We investeren continu in de ontwikkeling van ons team door trainingen en opleidingen.',
    icon: <GrowthIcon />,
  },
]

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-[#2d4a6f] text-white mt-[72px]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest mb-4 text-accent">Ons Team</p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">De Mensen Achter Vetro</h1>
            <p className="text-xl opacity-90">
              Een toegewijd team van professionals die elke dag het beste van zichzelf geven.
              Maak kennis met de mensen die uw ruimtes laten stralen.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto px-6">
          <header className="section-header">
            <h2 id="team-heading" className="text-3xl md:text-4xl font-semibold">Maak Kennis Met Ons Team</h2>
            <p className="text-gray-500">
              Ons team van ongeveer 10 medewerkers vormt het hart van Vetro Cleaning Service.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <article key={member.name} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-accent font-medium text-[15px] mb-4">{member.role}</p>
                  <p className="text-gray-500 text-[15px] leading-relaxed">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-alt" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-6">
          <header className="section-header">
            <h2 id="values-heading" className="text-3xl md:text-4xl font-semibold">Onze Waarden</h2>
            <p className="text-gray-500">
              Wat ons team verbindt en drijft in alles wat we doen.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-200">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-5 text-white" aria-hidden="true">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-500 text-[15px]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="section" aria-labelledby="join-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="join-heading" className="text-3xl md:text-4xl font-semibold mb-6">Werk Bij Vetro</h2>
              <p className="text-gray-500 mb-4">
                Ben jij een professional die gelooft dat schoonmaken een echt vak is?
                Zoek je een werkgever die investeert in zijn mensen en waar je deel
                uitmaakt van een hecht team?
              </p>
              <p className="text-gray-500 mb-6">
                Wij zijn altijd op zoek naar gemotiveerde collega&apos;s die onze passie
                voor kwaliteit delen. Bij Vetro krijg je de ruimte om te groeien en
                werk je in een prettige, familiaire sfeer.
              </p>
              <div className="grid grid-cols-2 gap-4 my-8">
                <div className="flex items-center gap-2 font-medium">
                  <CheckIcon />
                  <span>Competitief salaris</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <CheckIcon />
                  <span>Opleidingsmogelijkheden</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <CheckIcon />
                  <span>Flexibele werktijden</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <CheckIcon />
                  <span>Prettige werksfeer</span>
                </div>
              </div>
              <a href="mailto:info@vetrocleaningservice.nl?subject=Sollicitatie" className="btn btn-primary">
                Stuur Je CV
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
                alt="Team samenwerking"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-primary to-[#2d4a6f] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Wilt U Ons Team Ontmoeten?</h2>
          <p className="mb-8 opacity-90 max-w-lg mx-auto">Neem contact op voor een vrijblijvend gesprek. We komen graag langs om kennis te maken.</p>
          <Link href="/#contact" className="btn btn-primary">
            Neem Contact Op
          </Link>
        </div>
      </section>
    </>
  )
}

// Icons
function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  )
}

function TeamIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  )
}

function GrowthIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-accent flex-shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

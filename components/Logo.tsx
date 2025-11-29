export default function Logo({ className = '', variant = 'default' }: { className?: string; variant?: 'default' | 'white' }) {
  const textColor = variant === 'white' ? '#ffffff' : '#1e3a5f'
  const accentColor = '#0d9488'
  const secondaryColor = variant === 'white' ? '#ffffff' : '#1e3a5f'

  return (
    <svg
      viewBox="0 0 140 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Vetro Cleaning Service"
    >
      {/* Sparkle/Shine Icon */}
      <g>
        {/* Main diamond sparkle */}
        <path
          d="M20 4L22.5 17.5L36 20L22.5 22.5L20 36L17.5 22.5L4 20L17.5 17.5L20 4Z"
          fill={accentColor}
        />
        {/* Small accent sparkles */}
        <circle cx="30" cy="8" r="2" fill={secondaryColor} />
        <circle cx="8" cy="10" r="1.5" fill={accentColor} opacity="0.6" />
        <circle cx="32" cy="30" r="1.5" fill={accentColor} opacity="0.6" />
      </g>

      {/* Vetro Text */}
      <text
        x="44"
        y="28"
        fontFamily="Poppins, system-ui, sans-serif"
        fontSize="24"
        fontWeight="700"
        fill={textColor}
      >
        Vetro
      </text>
    </svg>
  )
}

export function LogoIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Vetro"
    >
      {/* Main diamond sparkle */}
      <path
        d="M20 4L22.5 17.5L36 20L22.5 22.5L20 36L17.5 22.5L4 20L17.5 17.5L20 4Z"
        fill="#0d9488"
      />
      {/* Small accent sparkles */}
      <circle cx="30" cy="8" r="2" fill="#1e3a5f" />
      <circle cx="8" cy="10" r="1.5" fill="#0d9488" opacity="0.6" />
      <circle cx="32" cy="30" r="1.5" fill="#0d9488" opacity="0.6" />
    </svg>
  )
}

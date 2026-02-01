
import { ReactNode } from 'react'

export default function SectionTitle({ kicker, title, subtitle }: { kicker?: ReactNode, title: ReactNode, subtitle?: ReactNode }) {
  return (
    <div className="mb-8">
      {kicker && <div className="text-gold/90 text-xs tracking-[.2em] uppercase">{kicker}</div>}
      <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-white">{title}</h2>
      {subtitle && <p className="mt-2 max-w-2xl text-mist/80">{subtitle}</p>}
    </div>
  )
}

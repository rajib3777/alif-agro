import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../components/Shared/Button'
import logoAlif from '../assets/logo_alif.png'
import { Menu, X } from 'lucide-react'

const links = [
  { id: 'home', key: 'nav.home' },
  { id: 'about', key: 'nav.about' },
  { id: 'produce', key: 'nav.produce' },
  { id: 'projects', key: 'nav.projects' },
  { id: 'testimonials', key: 'nav.testimonials' },
  { id: 'blog', key: 'nav.blog' },
  { id: 'contact', key: 'nav.contact' },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return

    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }


  const toggleLang = () =>
    i18n.changeLanguage(i18n.language === 'bn' ? 'en' : 'bn')

  return (
    <header
      className={`fixed top-0 z-50 w-full transition ${
        scrolled
          ? 'bg-panel/80 backdrop-blur border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        {/* LOGO */}
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 border border-white/10">
            <img
              src={logoAlif}
              alt="Alif Agro Service Logo"
              className="h-6 w-6 object-contain"
            />
          </span>
          <div className="leading-tight text-left">
            <div className="font-extrabold text-white">
              Alif Agro Service
            </div>
            <div className="text-[11px] text-mist/70 -mt-0.5">
              Agro • Bangladesh
            </div>
          </div>
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-6 text-sm text-mist/80">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="hover:text-white transition"
            >
              {t(l.key)}
            </button>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" onClick={toggleLang}>
            {i18n.language === 'bn' ? 'EN' : 'বাংলা'}
          </Button>

          <Button
            className="hidden md:inline-flex"
            onClick={() => scrollTo('contact')}
          >
            {t('nav.contact')}
          </Button>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-panel/95 backdrop-blur border-t border-white/10">
          <div className="container-page py-4 grid gap-2">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="w-full rounded-xl px-4 py-3 text-left text-sm font-semibold text-white/85 hover:bg-white/5"
              >
                {t(l.key)}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

import { motion, AnimatePresence } from 'framer-motion'
import { useMemo, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../Shared/Button'




import heroImage from '../../assets/hero_01.png'

// ✅ Farmer carousel images (assets থেকে)
import farmer1 from '../../assets/farmers/farmer_01.png'
import farmer2 from '../../assets/farmers/farmer_02.png'
import farmer3 from '../../assets/farmers/farmer_03.png'

export default function Hero() {
  const { t } = useTranslation()
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const slides = useMemo(
    () => [
      { src: farmer1, alt: 'Smiling Bangladeshi farmer - 1' },
      { src: farmer2, alt: 'Smiling Bangladeshi farmer - 2' },
      { src: farmer3, alt: 'Smiling Bangladeshi farmer - 3' },
    ],
    []
  )

  const [index, setIndex] = useState(0)

  const next = () => setIndex((p) => (p + 1) % slides.length)
  const prev = () => setIndex((p) => (p - 1 + slides.length) % slides.length)

  // ✅ autoplay
  useEffect(() => {
    const id = window.setInterval(next, 3500) // 3.5s
    return () => window.clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section id="home" className="relative pt-24 md:pt-28">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          className="h-full w-full object-cover opacity-90"
          alt="Bangladesh field"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/30 via-bg/60 to-bg" />
      </div>

      <div className="container-page relative grain">
        <div className="grid gap-10 lg:grid-cols-12 items-center min-h-[70vh]">
          {/* Left */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-wide text-mist/80"
            >
              <img src="/2d/rice.svg" className="h-4 w-4" alt="" />
              {t('hero.kicker')}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-4 text-3xl md:text-5xl font-extrabold text-white leading-tight"
            >
              {t('hero.title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-4 max-w-2xl text-mist/80"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <Button size="lg" onClick={() => scrollTo('produce')}>
                {t('hero.ctaPrimary')}
              </Button>
              <Button size="lg" variant="ghost" onClick={() => scrollTo('video')}>
                {t('hero.ctaSecondary')}
              </Button>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
              {['10K+ Farmers', '50+ Areas', '99% Quality'].map((x) => (
                <div key={x} className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="text-white font-extrabold">{x.split(' ')[0]}</div>
                  <div className="text-xs text-mist/70">{x.slice(x.indexOf(' ') + 1)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Carousel Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-soft"
            >
              {/* ✅ Fixed size area */}
              <div className="relative h-[420px] w-full overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={slides[index].src}
                    src={slides[index].src}
                    alt={slides[index].alt}
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -18 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    draggable={false}
                  />
                </AnimatePresence>

                {/* ✅ Soft overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />

                {/* ✅ Arrows */}
                <button
                  type="button"
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-white/90 backdrop-blur hover:bg-white/15"
                  aria-label="Previous slide"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-white/90 backdrop-blur hover:bg-white/15"
                  aria-label="Next slide"
                >
                  ›
                </button>

                {/* ✅ Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setIndex(i)}
                      className={`h-2.5 w-2.5 rounded-full border border-white/30 transition ${
                        i === index ? 'bg-white/80' : 'bg-white/20 hover:bg-white/35'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom brand card */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gold text-bg flex items-center justify-center font-black">
                    A
                  </div>
                  <div>
                    <div className="text-white font-bold">Alif Agro Service</div>
                    <div className="text-xs text-mist/70">Bangladesh-first agriculture brand</div>
                  </div>
                </div>
              </div>

              {/* Decorative */}
              <img
                src="/2d/bangladesh-map.svg"
                className="absolute -right-8 -top-8 h-40 w-40 opacity-20"
                alt=""
              />
              <img src="/2d/sun.svg" className="absolute left-4 top-4 h-10 w-10 opacity-70" alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

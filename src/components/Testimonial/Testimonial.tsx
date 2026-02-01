import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../Shared/SectionTitle'

// ✅ image import from assets
import mangoFarmer from '../../assets/mango.png'



export default function Testimonial() {
  const { t, i18n } = useTranslation()
  const isBn = i18n.language === 'bn'

  const quote = isBn
    ? "“Alif Agro Service এর বীজ লাগানোর পর আমার জমিতে ফলন বেড়েছে। সাপোর্ট টিম সময়মতো মাঠে এসে সাহায্য করেছে—আমি খুব খুশি।”"
    : "“After using Alif Agro Service, my yield increased. Their support team visited on time and guided me in the field—I'm very happy.”"

  return (
    <section id="testimonials" className="py-16 md:py-20">
      <div className="container-page">
        <SectionTitle
          title={t('testimonial.title')}
          subtitle={t('testimonial.subtitle')}
          kicker="Testimonials"
        />

        <div className="grid gap-6 lg:grid-cols-12 items-stretch">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/10 shadow-soft relative"
          >
            <img
              src={mangoFarmer}
              className="h-full w-full object-cover min-h-[420px]"
              alt="Bangladeshi farmer with mango harvest"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 glass rounded-2xl p-4">
              <div className="text-white font-extrabold">Abdul Karim</div>
              <div className="text-xs text-mist/70">
                Farmer • Chapainawabganj, Bangladesh
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="lg:col-span-7 rounded-2xl border border-white/10 bg-white/5 shadow-soft relative overflow-hidden"
          >
            <img
              src="/2d/bangladesh-map.svg"
              className="absolute -right-10 -top-10 h-56 w-56 opacity-10"
              alt=""
            />

            <div className="p-8 md:p-10 relative">
              <div className="text-gold font-extrabold tracking-wide">
                Alif Agro Service REVIEW
              </div>

              {/* Quote reveal */}
              <div className="mt-4 relative">
                <motion.div
                  initial={{ clipPath: 'inset(0 100% 0 0)' }}
                  whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                >
                  <div className="text-2xl md:text-3xl font-extrabold text-white leading-snug">
                    {quote}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-6 flex items-center gap-3"
                >
                  <div className="flex text-gold">
                    {'★★★★★'.split('').map((s, i) => (
                      <span key={i}>{s}</span>
                    ))}
                  </div>
                  <div className="text-sm text-mist/70">
                    Verified farmer review
                  </div>
                </motion.div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  { k: 'Higher Yield', v: 'Field-tested performance' },
                  { k: 'On-time Support', v: 'Guidance at your farm' },
                  { k: 'Trusted Quality', v: 'Better germination rate' },
                  { k: 'Bangladesh-first', v: 'Built for local climate' },
                ].map((c) => (
                  <div
                    key={c.k}
                    className="rounded-2xl border border-white/10 bg-panel/30 p-4"
                  >
                    <div className="text-white font-bold">{c.k}</div>
                    <div className="text-sm text-mist/70 mt-1">{c.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

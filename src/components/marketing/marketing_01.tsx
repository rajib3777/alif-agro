// src/components/Marketing/marketing_01.tsx
import { motion } from 'framer-motion'
import Button from '../Shared/Button'
import marketingImg from '../../assets/alif_01.png'

type Marketing01Props = {
  imgSrc?: string
  titleBn?: string
  titleEn?: string
  subtitleBn?: string
  subtitleEn?: string
  phone?: string
  isBn?: boolean
}

export default function Marketing01({
  imgSrc = marketingImg,
  titleBn = 'সোরঘাম–সুদান ঘাস ও নেপিয়ার ঘাসের বীজ',
  titleEn = 'Sorghum–Sudan Grass Seeds',
  subtitleBn = 'উচ্চ উৎপাদন • দ্রুত বৃদ্ধি • গবাদিপশুর জন্য পুষ্টিকর সবুজ ঘাস',
  subtitleEn = 'High yield • Fast growth • Nutritious green fodder for livestock',
  phone = '01334-642219',
  isBn = true,
}: Marketing01Props) {
  return (
    <section className="py-16 md:py-20 bg-panel/20 border-y border-white/5">
      <div className="container-page">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* LEFT: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-extrabold text-white">
              <span className="h-2 w-2 rounded-full bg-gold" />
              {isBn ? 'ফিল্ড ডেমো • ট্রেনিং • সাপোর্ট' : 'Field demo • Training • Support'}
            </div>

            <h2 className="text-white font-extrabold leading-tight text-3xl md:text-4xl">
              {isBn ? titleBn : titleEn}
            </h2>

            <p className="text-mist/80 text-base md:text-lg max-w-xl">
              {isBn ? subtitleBn : subtitleEn}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="text-xs text-mist/70">{isBn ? 'কল করুন' : 'Call now'}</div>
                <div className="text-white font-extrabold text-lg tracking-wide">{phone}</div>
              </div>

              <Button
                onClick={() => {
                  const el = document.getElementById('contact')
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                {isBn ? 'যোগাযোগ করুন' : 'Contact us'}
              </Button>

              <Button
                variant="ghost"
                onClick={() => {
                  window.location.href = `tel:${phone.replace(/[^0-9+]/g, '')}`
                }}
              >
                {isBn ? 'এখনই কল' : 'Call'}
              </Button>
            </div>

            {/* Mini feature chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                isBn ? 'উচ্চ অঙ্কুরোদ্গম' : 'High germination',
                isBn ? 'ফিল্ড টেস্টেড' : 'Field tested',
                isBn ? 'টেকনিক্যাল গাইডেন্স' : 'Technical guidance',
              ].map((x) => (
                <span
                  key={x}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-mist/80"
                >
                  {x}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Image banner */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-soft">
              {/* ✅ Fixed height banner */}
              <div className="relative h-[260px] sm:h-[320px] md:h-[420px] lg:h-[520px] xl:h-[600px]">
                <img
                  src={imgSrc}
                  alt="Marketing visual"
                  className="h-full w-full object-cover object-center"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/10 to-transparent" />

                {/* badge */}
                

              </div>

              {/* footer strip */}
              <div className="p-5 flex flex-wrap items-center justify-between gap-3">
                <div className="text-sm text-mist/80">{isBn ? 'লোকেশন: বাংলাদেশ' : 'Location: Bangladesh'}</div>
                <div className="text-white font-extrabold">{isBn ? 'বিশ্বাসের সাথে বীজ নিন' : 'Get trusted seeds'}</div>
              </div>
            </div>

            {/* glow */}
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] bg-gold/10 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

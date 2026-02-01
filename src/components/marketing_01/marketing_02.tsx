// src/components/Marketing/marketing_02.tsx
import { motion } from 'framer-motion'
import Button from '../Shared/Button'
import marketingImg from '../../assets/alif_02.jpg'

type Marketing02Props = {
  imgSrc?: string
  isBn?: boolean
  phone?: string
}

export default function Marketing02({
  imgSrc = marketingImg,
  isBn = true,
  phone = '01334-642219',
}: Marketing02Props) {
  const dial = `tel:${phone.replace(/[^0-9+]/g, '')}`

  return (
    <section className="py-16 md:py-20 bg-panel/20 border-y border-white/5">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-12 items-center">
          {/* LEFT: Hero Banner */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 relative"
          >
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-soft">
              <div className="relative h-[320px] sm:h-[380px] md:h-[520px] lg:h-[560px]">
                <img
                  src={imgSrc}
                  alt="Sorghum Sudan marketing"
                  className="h-full w-full object-cover object-center"
                />

                {/* cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent" />
              </div>

              {/* footer strip */}
              <div className="p-5 flex flex-wrap items-center justify-between gap-3">
                <div className="text-sm text-mist/80">
                  {isBn ? 'লোকেশন: বাংলাদেশ' : 'Location: Bangladesh'}
                </div>
                <div className="inline-flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-white/5 text-white border border-white/10">
                    {isBn ? 'ফিল্ড টেস্টেড' : 'Field tested'}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-white/5 text-white border border-white/10">
                    {isBn ? 'হাই জার্মিনেশন' : 'High germination'}
                  </span>
                </div>
              </div>
            </div>

            {/* glow */}
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] bg-gold/10 blur-2xl" />
          </motion.div>

          {/* RIGHT: Offer + Info */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* phone card */}
            <div className="rounded-2xl border border-white/10 bg-white/5 shadow-soft p-5">
              <div className="text-xs text-mist/70">{isBn ? 'যোগাযোগ' : 'Contact'}</div>
              <div className="mt-1 text-white font-extrabold text-2xl tracking-wide">{phone}</div>
              <div className="mt-2 text-sm text-mist/80">
                {isBn
                  ? 'বীজের দাম, ডেলিভারি, এবং ফিল্ড ডেমোর জন্য এখনই কল করুন।'
                  : 'Call for price, delivery, and field demo.'}
              </div>

              <div className="mt-4 flex gap-2">
                <Button
                  onClick={() => {
                    window.location.href = dial
                  }}
                >
                  {isBn ? 'এখনই কল' : 'Call now'}
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => {
                    const el = document.getElementById('contact')
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                >
                  {isBn ? 'মেসেজ দিন' : 'Message'}
                </Button>
              </div>
            </div>

            {/* feature list */}
            <div className="rounded-2xl border border-white/10 bg-white/5 shadow-soft p-5">
              <div className="text-white font-extrabold text-lg">
                {isBn ? 'কেন সোরঘাম–সুদান?' : 'Why Sorghum–Sudan?'}
              </div>

              <ul className="mt-3 space-y-2 text-sm text-mist/80">
                <li className="flex gap-2">
                  <span className="text-gold font-black">✓</span>
                  {isBn ? 'দ্রুত বৃদ্ধি ও বেশি বায়োমাস' : 'Fast growth and high biomass'}
                </li>
                <li className="flex gap-2">
                  <span className="text-gold font-black">✓</span>
                  {isBn ? 'গবাদিপশুর জন্য পুষ্টিকর সবুজ ঘাস' : 'Nutritious fodder for livestock'}
                </li>
                <li className="flex gap-2">
                  <span className="text-gold font-black">✓</span>
                  {isBn ? 'কৃষক ট্রেনিং ও মাঠ পর্যায়ের সাপোর্ট' : 'Farmer training and field support'}
                </li>
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  isBn ? 'উচ্চ অঙ্কুরোদ্গম' : 'High germination',
                  isBn ? 'বিশ্বস্ত সরবরাহ' : 'Trusted supply',
                  isBn ? 'ফডার ফোকাস' : 'Fodder focused',
                ].map((x) => (
                  <span
                    key={x}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-mist/80"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

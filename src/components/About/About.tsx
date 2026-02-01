
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../Shared/SectionTitle'
import aboutfarm from '../../assets/farmers/farm_02.png'

export default function About() {
  const { t } = useTranslation()
  const points = [t('about.points.1'), t('about.points.2'), t('about.points.3')]

  return (
    <section id="about" className="py-16 md:py-20">
      <div className="container-page grid gap-10 lg:grid-cols-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6 }}
          className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-white/10 shadow-soft">
          <img src={aboutfarm} className="h-[420px] w-full object-cover" alt="Bangladesh field" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-4">
            <div className="text-white font-bold">“Bangladesh er mati o manush er ghran.”</div>
            <div className="text-xs text-mist/70 mt-1">— Alif Agro Service promise</div>
          </div>
          <img src="/2d/boat.svg" className="absolute -left-6 -top-6 h-20 w-20 opacity-35" alt="" />
        </motion.div>

        <div className="lg:col-span-6">
          <SectionTitle title={t('about.title')} subtitle={t('about.body')} kicker="About Alif Agro Service" />
          <div className="grid gap-3">
            {points.map((p, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .45, delay: idx * .06 }}
                className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="h-9 w-9 rounded-xl bg-gold/90 text-bg flex items-center justify-center font-black">✓</div>
                <div className="text-mist/80">{p}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { k: '12+', v: 'Years' },
              { k: '100+', v: 'Products' },
              { k: '24/7', v: 'Support' },
            ].map((c) => (
              <div key={c.k} className="rounded-2xl border border-white/10 bg-panel/40 p-5">
                <div className="text-2xl font-extrabold text-white">{c.k}</div>
                <div className="text-xs text-mist/70 mt-1">{c.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../Shared/SectionTitle'
import videoCover from '../../assets/farm_01.jpg'


export default function VideoSection() {
  const { t } = useTranslation()
  return (
    <section id="video" className="py-16 md:py-20">
      <div className="container-page">
        <SectionTitle title={t('video.title')} subtitle={t('video.subtitle')} kicker="Video" />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 shadow-soft">
          <img
            src={videoCover}
            className="h-[360px] w-full object-cover opacity-80"
            alt="Bangladesh agriculture"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg/70 via-bg/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="group flex items-center gap-3 rounded-full bg-gold text-bg px-6 py-3 font-extrabold shadow-soft">
              <span className="h-10 w-10 rounded-full bg-bg/20 flex items-center justify-center group-hover:scale-105 transition">▶</span>
              Watch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../Shared/SectionTitle'

// ✅ import images from src/assets/seeds/
import dhanImg from '../../assets/seeds/dhaner-bij.png'
import tomatoImg from '../../assets/seeds/tomato.png'
import begunImg from '../../assets/seeds/begun.png'
import morichImg from '../../assets/seeds/morich.png'
import shoshaImg from '../../assets/seeds/shosha.png'
import vuttaImg from '../../assets/seeds/vutta.png'
import napierImg from '../../assets/seeds/napier-grass.png'
import sorghumSudanImg from '../../assets/seeds/sorghum-sudan.png'

const items = [
  { nameBn: 'নেপিয়ার ঘাস', nameEn: 'Napier Grass', img: napierImg, tag: 'Top Rated' },
  { nameBn: 'সোরঘাম–সুদান ঘাস', nameEn: 'Sorghum Sudan Grass', img: sorghumSudanImg, tag: 'Best Selling' },
]

export default function Produce() {
  const { t, i18n } = useTranslation()
  const isBn = i18n.language === 'bn'

  return (
    <section id="produce" className="py-16 md:py-20 bg-panel/20 border-y border-white/5">
      <div className="container-page">
        <SectionTitle title={t('produce.title')} subtitle={t('produce.subtitle')} kicker="Produce" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <motion.div
              key={it.nameEn}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-soft"
            >
              {/* ✅ Image block: aspect ratio for tall images */}
              <div className="relative aspect-[3/4] md:aspect-[4/5]">
                <img
                  src={it.img}
                  className="h-full w-full object-cover group-hover:scale-[1.04] transition duration-500"
                  alt={isBn ? it.nameBn : it.nameEn}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />

                {/* ✅ badge */}
                <div className="absolute left-4 top-4">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-bg/60 text-white border border-white/10 backdrop-blur">
                    {it.tag}
                  </span>
                </div>

                {/* icon (optional) */}
                <img src="/2d/rice.svg" className="absolute right-4 top-4 h-8 w-8 opacity-80" alt="" />
              </div>

              <div className="p-5 flex items-center justify-between">
                <div>
                  <div className="text-white font-extrabold text-lg">{isBn ? it.nameBn : it.nameEn}</div>
                  <div className="text-xs text-mist/70">High germination • Field tested</div>
                </div>
                <div className="h-10 w-10 rounded-xl bg-gold text-bg flex items-center justify-center font-black">→</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


import { useTranslation } from 'react-i18next'
import SectionTitle from '../Shared/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import story01 from '../../assets/stories/story_01.png'
import story02 from '../../assets/stories/story_02.png'
import story03 from '../../assets/stories/story_03.png'
import story04 from '../../assets/stories/story_04.png'


const slides = [
  { img: story01, place: 'Rangpur' },
  { img: story02, place: 'Bogura' },
  { img: story03, place: 'Jashore' },
  { img: story04, place: 'Cumilla' },
]

export default function Projects() {
  const { t } = useTranslation()
  return (
    <section id="projects" className="py-16 md:py-20 bg-panel/20 border-y border-white/5">
      <div className="container-page">
        <SectionTitle title={t('projects.title')} subtitle={t('projects.subtitle')} kicker="Projects" />
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="!pb-10"
        >
          {slides.map((s) => (
            <SwiperSlide key={s.img}>
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-soft">
                <div className="relative h-52">
                  <img src={s.img} className="h-full w-full object-cover" alt={s.place} />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 glass rounded-xl px-3 py-2 text-sm text-white font-bold">
                    {s.place}
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-white font-extrabold">Field Demo & Support</div>
                  <div className="mt-1 text-sm text-mist/70">Seeds, guidance, and farmer training.</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

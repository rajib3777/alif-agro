
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import SectionTitle from '../Shared/SectionTitle'
import blog01 from '../../assets/blogs/blog_01.png'
import blog02 from '../../assets/blogs/blog_02.png'
import blog03 from '../../assets/blogs/blog_03.png'


const posts = [
  {
    img: blog02,
    date: 'Jan 2026',
    titleBn: 'নেপিয়ার ঘাস চাষে বেশি উৎপাদনের ৫টি কার্যকর কৌশল',
    titleEn: '5 effective techniques for higher Napier grass yield',
  },
  {
    img: blog01,
    date: 'Jan 2026',
    titleBn: 'সোরঘাম–সুদান ঘাস: গবাদিপশুর জন্য উচ্চ পুষ্টিমান সম্পন্ন ঘাস',
    titleEn: 'Sorghum Sudan grass: a high-nutrition fodder for livestock',
  },
  {
    img: blog03,
    date: 'Jan 2026',
    titleBn: 'সবুজ ঘাস চাষে লাভ বাড়াতে নেপিয়ার ও সোরঘাম–সুদান',
    titleEn: 'Increase profit with Napier and Sorghum Sudan fodder grass',
  },
]

export default function Blog() {
  const { t, i18n } = useTranslation()
  const isBn = i18n.language === 'bn'
  return (
    <section id="blog" className="py-16 md:py-20 bg-panel/20 border-y border-white/5">
      <div className="container-page">
        <SectionTitle title={t('blog.title')} subtitle={t('blog.subtitle')} kicker="Blog" />
        <div className="grid gap-4 md:grid-cols-3">
          {posts.map((p, idx) => (
            <motion.a key={p.img} href="#"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: .5, delay: idx * .06 }}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-soft hover:bg-white/7 transition"
            >
              <div className="relative h-44">
                <img src={p.img} className="h-full w-full object-cover group-hover:scale-[1.04] transition duration-500" alt="Blog" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <div className="text-xs text-mist/60">{p.date}</div>
                <div className="mt-1 text-white font-extrabold">{isBn ? p.titleBn : p.titleEn}</div>
                <div className="mt-2 text-sm text-mist/70">Read more →</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}


import { useTranslation } from 'react-i18next'
import SectionTitle from '../Shared/SectionTitle'
import Button from '../Shared/Button'
import { motion } from 'framer-motion'

export default function Contact() {
  const { t } = useTranslation()
  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="container-page">
        <SectionTitle title={t('contact.title')} subtitle={t('contact.subtitle')} kicker="Contact" />

        <div className="grid gap-6 lg:grid-cols-12">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6 }}
            className="lg:col-span-5 rounded-2xl border border-white/10 bg-panel/40 p-6 relative overflow-hidden shadow-soft">
            <img src="/2d/bangladesh-map.svg" className="absolute -right-12 -bottom-12 h-64 w-64 opacity-10" alt="" />
            <div className="text-white font-extrabold text-lg">Alif Agro Service</div>
            <div className="mt-3 text-sm text-mist/70 space-y-2">
              <div>📍 Dhaka, Bangladesh</div>
              <div>📞 +880 1XXXXXXXXX</div>
              <div>✉️ info@alifseeds.com</div>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-mist/70">
              Tip: Send your crop name + area. We’ll guide you with the best seed.
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6, delay: .05 }}
            onSubmit={(e) => { e.preventDefault(); alert('Submitted!') }}
            className="lg:col-span-7 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <input className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/25"
                placeholder={t('contact.form.name')} />
              <input className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/25"
                placeholder={t('contact.form.phone')} />
            </div>
            <textarea className="mt-4 min-h-[140px] w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/25"
              placeholder={t('contact.form.message')} />
            <div className="mt-4 flex justify-end">
              <Button size="lg" type="submit">{t('contact.form.submit')}</Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

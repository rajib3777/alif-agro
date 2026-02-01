
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="mt-16 border-t border-white/10 bg-panel/40">
      <div className="container-page py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="text-white font-extrabold text-lg">Alif Agro Service</div>
          <p className="mt-2 text-mist/70">{t('footer.tag')}</p>
          <div className="mt-4 flex gap-3 text-mist/70">
            <a className="hover:text-white" href="#">Facebook</a>
            <a className="hover:text-white" href="#">YouTube</a>
            <a className="hover:text-white" href="#">WhatsApp</a>
          </div>
        </div>

        <div className="text-sm text-mist/70">
          <div className="text-white font-bold">Office</div>
          <p className="mt-2">Dhaka, Bangladesh</p>
          <p className="mt-1">Sun–Thu • 10:00–18:00</p>
        </div>

        <div className="text-sm text-mist/70">
          <div className="text-white font-bold">Newsletter</div>
          <p className="mt-2">Get seasonal tips & updates.</p>
          <div className="mt-3 flex gap-2">
            <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 outline-none focus:border-white/25" placeholder="Email" />
            <button className="rounded-xl bg-gold text-bg px-4 font-semibold">Join</button>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-mist/60">
        © {new Date().getFullYear()} Alif Agro Service • Built with 🇧🇩
      </div>
    </footer>
  )
}

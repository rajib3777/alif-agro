
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Produce from '../components/Produce/Produce'
import VideoSection from '../components/VideoSection/VideoSection'
import Projects from '../components/Projects/Projects'
import Testimonial from '../components/Testimonial/Testimonial'
import Blog from '../components/Blog/Blog'
import Contact from '../components/Contact/Contact'
import Marketing01 from '../components/marketing/marketing_01'
import Marketing02 from '../components/marketing_01/marketing_02'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Produce />
        <Marketing01/>
        <VideoSection />
        <Projects />
        <Marketing02/>
        <Testimonial />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { Services } from "@/components/services"
import { Pricing } from "@/components/pricing"
import { Industries } from "@/components/industries"
import { Process } from "@/components/process"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Industries />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

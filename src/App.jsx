import Contact from "./components/Contact"
import Experience from "./components/Experience"
import GlassCursor from "./components/GlassCursor"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import SmoothScroll from "./components/SmoothScroll"
import Work from "./components/Work"

export default function App() {
  return (
    <>
      <SmoothScroll />
      <GlassCursor />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Work />
        <Contact />
      </main>
    </>
  )
}

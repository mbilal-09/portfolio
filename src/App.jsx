import Contact from "./components/Contact"
import Experience from "./components/Experience"
import GlassCursor from "./components/GlassCursor"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Skills from "./components/Skills"
import SmoothScroll from "./components/SmoothScroll"
import Work from "./components/Work"

export default function App() {
  return (
    <>
      <SmoothScroll />
      <GlassCursor />
      <Nav />
      <main className="overflow-x-clip">
        <Hero />
        <Experience />
        <Skills />
        <Work />
        <Contact />
      </main>
    </>
  )
}

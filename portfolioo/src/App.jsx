import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Team from "./components/Team"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./App.css"
import Projects from "./components/Projects"

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

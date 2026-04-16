import About from "./Components/About"
import Barbers from "./Components/Barbers"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Gallery from "./Components/Gallery"
import Hero from "./Components/Hero"
import NavigationBar from "./Components/NavigationBar"
import Services from "./Components/Services"
import Testimonials from "./Components/Testimonials"


function App() {
  return (
    <>
      <NavigationBar/>
      <Hero/>
      <About/>
      <Services/>
      <Gallery/>
      <Testimonials/>
      <Barbers/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App

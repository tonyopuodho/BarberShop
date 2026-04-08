import About from "./Components/About"
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
    </>
  )
}

export default App

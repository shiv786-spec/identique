import Navbar from "./components/nav"
import Hero from "./pages/hero";
import About from "./pages/about";
import Team from "./pages/team";
import Contact from "./pages/contact";
import Footer from "./components/footer";


const App =()=>{
  return(
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Team/>
    <Contact/>
    <Footer/>
    </>
  )
}
export default App;
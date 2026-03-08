
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import TrustBar from "../components/TrustBar/TrustBar"
import Features from "../components/Features/Features"
import Products from "../components/Products/Products"
import HowItWorks from "../components/HowItWorks/HowItWorks"
import AppShowcase from "../components/AppShowcase/AppShowcase"
import CTA from "../components/CTA/CTA"
import Footer from "../components/Footer/Footer"
import GradientBackground from "../components/Background/GradientBackground"
import BlobBackground from "../components/Background/BlobBackground"
import Particles from "../components/Background/Particles"
import MeshGradient from "../components/Background/MeshGradient"
import Offerings from "../components/Offerings/Offerings"
import AboutUs from "../components/Aboutus/Aboutus"


export default function Home() {
  return (
    <div className="relative min-h-screen  text-white">

      <MeshGradient/>
<Particles/>
<BlobBackground/>
      <Navbar/>
      <Hero/>
      <div className="relative z-10 mt-[100vh]">
      <AboutUs/>
      <Products/>
      <Offerings/>
      <TrustBar/>
      <HowItWorks/>
      <AppShowcase/>
      <Features/>
      <CTA/>
      </div>
      <Footer/>

    </div>
  )
}

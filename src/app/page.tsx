import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedProjects from "@/components/FeaturedProjects";
import Gallery from "@/components/Gallery";
import LivingSpaces from "@/components/LivingSpaces";
import Amenities from "@/components/Amenities";
import Partners from "@/components/Partners";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedProjects />
        <Gallery />
        <LivingSpaces />
        <Amenities />
        <Partners />
        <News />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

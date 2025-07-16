import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import PhamBrand from "@/components/PhamBrand";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Muhammad Faisal Abdurrahman - Informatika Student & Developer";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Portfolio Muhammad Faisal Abdurrahman - Mahasiswa Informatika ITENAS, Frontend Developer, Backend Developer, UI/UX Designer. Founder PHAM Brand dengan produk JurnalKuu, ResepKuu.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <PhamBrand />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

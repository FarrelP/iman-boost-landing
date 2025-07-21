import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/sections/HeroSection';
import AboutUsSection from '../components/sections/AboutUsSection';
import ProductSection from '../components/sections/ProductSection';
import FormatSection from '../components/sections/FormatSection';
import FAQSection from '../components/sections/FAQSection';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUsSection />
      <ProductSection />
      <FormatSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

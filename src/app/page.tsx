import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutUsSection from '../components/AboutUsSection';
import ProductSection from '../components/ProductSection';
import FormatSection from '../components/FormatSection';
import FAQSection from '../components/FAQSection';
import FooterSection from '../components/FooterSection';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUsSection />
      <ProductSection />
      <FormatSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}

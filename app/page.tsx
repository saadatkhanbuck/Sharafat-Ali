import { MarqueeDemo } from "./components/marqueedemo";
import HeroSection from "./hero/page";
import AboutPage from "./about/page";
import ProductsPage from "./product/page";
import BlogPage from "./blog/page";
import Contact from "./contact/contact"

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MarqueeDemo />
      <AboutPage />
      <ProductsPage />
      <BlogPage />
      <Contact/>
    </div>
  );
}

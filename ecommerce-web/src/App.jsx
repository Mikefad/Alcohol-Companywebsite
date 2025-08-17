import Header from "./Header";
import Hero from "./Hero";
import Compliance from "./Compliance";
import Products from "./Products";
import Features from "./Features";
import About from "./About";
import Testimonials from "./Testimonials";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div className="bg-[#f5f3f0] text-gray-800 font-sans">
      <Header />
      <Hero />
      <Compliance />
      <Products />
      <Features />
      <About />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

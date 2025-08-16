import Header from "./components/sections/Header";
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import CaseStudies from "./components/sections/CaseStudies";
import Testimonial from "./components/sections/Testimonial";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Services/>
      <About/>
      <WhyChooseUs/>
      <CaseStudies/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

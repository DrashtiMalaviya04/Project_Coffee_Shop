import Hero from "./components/Hero";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Services from "./services/Services";
import WhereToBy from "./section/WhereToBy";
import AppBanner from "./section/AppBanner";
import Footer from "./components/Footer";


function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 500,
    });
  }, []);
  return (
    <>
      <div className=" overflow-x-hidden">
        <Hero />
        <Services />
        <WhereToBy />
        <AppBanner />
        <Footer />
      </div>
    </>
  );
}

export default App;

// import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Section2 from "./components/Section2";
import { useEffect } from "react";
import AOS from "aos";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Footer from "./components/Footer";
import AboveFooter from "./components/AboveFooter";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <AboveFooter />
      <Footer />
    </div>
  );
}

export default App;

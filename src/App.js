// import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Section2 from "./components/Section2";
import { useEffect } from "react";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Header />
      <Hero />
      <Section2 />
    </div>
  );
}

export default App;

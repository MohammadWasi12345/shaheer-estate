import Image from "next/image";
import Hero from "./components/hero";
import Services from "./components/services";
import Contact from "./components/contact";
import About from "./components/about";
import Team from "./components/team";
export default function Home() {
  return (
    
    <div>
      <Hero/>
      <Services/>
      <About/>
      <Team/>
      <Contact/>

    </div>
    

      

    
   
  );
}

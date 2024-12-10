import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductSection from "@/components/Product/Product";
import Homepart from "@/components/Restaurents/homepart";
 

export default function Home() {
  return (
    <div className="bg-[#FDFDFD]">
      <Navbar></Navbar>
      <Hero></Hero>
      <Homepart></Homepart>
      <ProductSection></ProductSection>
      <Footer></Footer>
    </div>
     
    
  );
}

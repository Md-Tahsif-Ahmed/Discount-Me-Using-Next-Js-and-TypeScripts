import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductSection from "@/components/Product/Product";
 

export default function Home() {
  return (
    <div className="bg-[#FDFDFD]">
      <Navbar></Navbar>
      <Hero></Hero>
      <ProductSection></ProductSection>
      <Footer></Footer>
    </div>
     
    
  );
}

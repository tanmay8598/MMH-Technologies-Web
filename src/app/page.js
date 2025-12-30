import CTACard from "@/components/Cards/CTACard";
import Customers from "@/components/Home/Customers";
import Hero from "@/components/Home/Hero";
import MessageFromCEO from "@/components/Home/MessageFromCEO";
import Products from "@/components/Home/Products";
import Services from "@/components/Home/Services";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center  font-sans ">
      {/* pt-32 pb-15  */}
      <main className="flex min-h-screen w-full flex-col items-center justify-between sm:items-start">
        <Hero />
        <Services />
        <Products />
        <Customers />
        <MessageFromCEO />
        <CTACard />
      </main>
    </div>
  );
}

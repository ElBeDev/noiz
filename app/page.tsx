import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import SocialProof from "@/components/SocialProof";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Marquee />
      <SocialProof />
      <ContactForm />
      <Footer />
    </main>
  );
}



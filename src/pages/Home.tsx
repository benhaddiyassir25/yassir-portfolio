import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Collaborations from "../components/Collaborations";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Collaborations />
        <About />
      </main>
      <Footer />
    </div>
  );
}

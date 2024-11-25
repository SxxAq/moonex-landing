import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Comparison from "./components/Comparision.tsx";
import Features from "./components/Features.tsx";
import FAQ from "./components/FAQ.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Comparison />
      <Features />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;

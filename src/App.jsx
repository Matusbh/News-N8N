import Hero from "./components/Hero.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-background dark:bg-on-second-background ">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

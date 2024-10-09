"use Client";

import NavBar from "../components/NavBar";
import HeroBar from "../components/HeroBar";
import EnergyTimer from "../components/EnergyTimer";
import Footer from "../components/Footer";

const HomeLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <header>
        <EnergyTimer />
        <NavBar />
        <HeroBar />
      </header>
      {children}
      <footer className="footer bg-base-200 text-neutral-content items-center p-4">
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;

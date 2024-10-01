import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";
import HeroBar from "../components/HeroBar";

const HomeLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <header>
          <NavBar />
          <HeroBar />
        </header>
        {children}
        <footer className="bg-byteLightBlue">
          <div>Byte Size Habits</div>
        </footer>
      </body>
    </html>
  );
};

export default HomeLayout;

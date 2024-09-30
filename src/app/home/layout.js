import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";
import HeroBar from "../components/HeroBar";

const HomeLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-byteLightBlue">
        <header>
          <NavBar />
          <HeroBar />
        </header>
        {children}
        <footer className="bg-base-100">
          <div className="flex justify-center items-center">
            Byte Size Habits
          </div>
        </footer>
      </body>
    </html>
  );
};

export default HomeLayout;

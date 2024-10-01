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
        <footer className="bg-byteOrange relative p-0 m-0">
          <svg
            className="absolute top-0 left-0 w-full h-auto z-40"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2560 100"
            preserveAspectRatio="none"
            transform="scale(-1, 1)">
            <polygon
              points="2560 0 2560 100 0 100"
              className="fill-current text-byteOrange"></polygon>
          </svg>
          <button className="btn btn-active absolute top-5 left-2 z-50">
            Back
          </button>
        </footer>
      </body>
    </html>
  );
};

export default HomeLayout;

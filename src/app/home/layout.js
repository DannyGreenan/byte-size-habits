import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";

const HomeLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <header>
          <NavBar />
        </header>
        {children}
        <footer className="bg-green-200">
          <div className="flex justify-center items-center">
            <Image
              src={"/banner.png"}
              height={200}
              width={200}
              alt="ByteSizeHabits banner"
              className="mx-auto"
            />
          </div>
        </footer>
      </body>
    </html>
  );
};

export default HomeLayout;

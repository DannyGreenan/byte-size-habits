import NavBar from "../components/NavBar";
import HeroBar from "../components/HeroBar";

const HomeLayout = ({ children }) => {
  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: `url('/bg-subtle.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <header>
        <NavBar />
        <HeroBar />
      </header>
      {children}
      <footer className="bg-byteOrange relative p-0 m-0">
        <button className="btn btn-active absolute top-5 left-2 z-50">
          Back
        </button>
      </footer>
    </div>
  );
};

export default HomeLayout;

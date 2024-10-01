const HeroBar = () => {
  return (
    <section className="hero bg-byteLightBlue py-5">
      <div className="relative w-full max-w-4xl mx-auto">
        <div
          className="bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: "url('/banner.png')",
            height: "240px",
          }}></div>

        <div className="absolute inset-0 flex justify-between items-start px-4 py-2">
          <div className="flex items-center space-x-2 text-gray-800  bg-byteDarkBlue px-4 py-1 rounded-md shadow-2xl border-2 border-base-100">
            {" "}
            <img
              src="/happy.png"
              alt="Small Character"
              className="w-16 h-16 rounded-full border-2 border-white shadow-lg"
            />
            <span className="text-lg font-bold">Username</span>
          </div>

          <div className="flex items-center space-x-2 text-gray-800  bg-byteDarkBlue px-4 py-1 rounded-md shadow-2xl border-2 border-base-100">
            {" "}
            <span className="text-lg font-bold">Coins</span>
            <img
              src="/coins.png"
              alt="Small Character"
              className="w-16 h-16 rounded-full border-2 border-white shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBar;

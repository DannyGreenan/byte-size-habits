const HeroBar = () => {
  return (
    <section className="hero bg-byteBackground pt-5">
      <div className="relative w-full max-w-4xl mx-auto">
        <div
          className="bg-cover bg-center rounded-2xl"
          style={{
            backgroundImage: "url('/banner.png')",
            height: "322px",
          }}></div>

        <div className="absolute top-5 left-0 right-0 flex justify-between px-4 py-2">
          <div
            className="flex items-center space-x-2 text-gray-800 bg-byteDarkBlue px-4 py-1 my-2 rounded-md shadow-2xl border-2  border-byteDarkBlue"
            style={{
              backgroundImage: "url('/button-bg.png')",

              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "80px",
              width: "auto",
            }}>
            <img
              src="/happy.png"
              alt="Small Character"
              className="w-16 h-16 rounded-full border-2 border-white shadow-lg"
            />
            <span className="text-lg font-bold">Username</span>
          </div>

          <div
            className="flex items-center space-x-2 text-gray-800 bg-byteDarkBlue px-4 py-1 my-2 rounded-md shadow-2xl border-2 border-byteDarkBlue"
            style={{
              backgroundImage: "url('/button-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "80px",
              width: "auto",
            }}>
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

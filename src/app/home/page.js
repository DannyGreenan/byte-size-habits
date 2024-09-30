const Home = () => {
  return (
    <div>
      <section className="hero bg-base-200 py-5">
        <div className="relative w-full max-w-4xl mx-auto">
          <div
            className="bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: "url('/banner.png')",
              height: "200px",
            }}></div>

          <div className="absolute inset-0 flex justify-between items-center px-4 py-2">
            <div className="flex items-center space-x-2 text-gray-800">
              {" "}
              <img
                src="/happy.png"
                alt="Small Character"
                className="w-16 h-16 rounded-full border-2 border-white shadow-lg"
              />
              <span className="text-lg font-bold">Username</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-800">
              {" "}
              <span className="text-lg font-bold">User Coins</span>
              <div className="badge badge-warning flex items-center">
                <img src="/coin-icon.png" alt="Coins" className="w-8 h-8" />
                <span className="ml-2">100</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto flex flex-col items-center my-10">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="/happy.png" alt="Main PC Character" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Did you code?</h2>
            <div className="flex items-center space-x-2">
              <div className="badge badge-success">✅</div>
            </div>
          </div>
        </div>

        <div className="flex space-x-4 my-5">
          <button className="btn btn-primary">
            <img src="memory-card.png" className="w-6 h-6" alt="Feed" /> Feed
          </button>

          <button className="btn btn-secondary">
            <img src="battery.png" className="w-6 h-6" alt="Charge" /> Charge
          </button>
        </div>

        <div className="flex space-x-2">
          <div className="radial-progress text-green-500">80%</div>
          <div className="radial-progress text-yellow-500">50%</div>
        </div>
      </div>
    </div>
  );
};

export default Home;

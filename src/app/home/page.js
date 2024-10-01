const Home = () => {
  return (
    <div className="bg-byteLightBlue">
      <div className="container mx-auto flex flex-col items-center my-10  bg-byteOrange">
        <div className="card w-96  bg-byteOrange shadow-xl">
          <div className="chat chat-start justify-end">
            <div className="absolute top-5 left-21 chat-bubble chat-bubble-primary">
              Did you code today ?
            </div>
          </div>
          <figure>
            <img src="/happy.png" alt="Main PC Character" />
          </figure>

          <div className="flex flex-col space-x-4 my-5">
            <button className="btn glass btn-primary">
              <img src="/memory.png" className="w-10 h-10" alt="Feed" /> Feed
              <progress
                className="progress progress-success w-56"
                value="40"
                max="100"></progress>
            </button>{" "}
            <button className="btn glass btn-secondary">
              <img src="/battery.png" className="w-10 h-10" alt="Charge" />{" "}
              Charge
              <progress
                className="progress progress-warning w-56"
                value="70"
                max="100"></progress>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

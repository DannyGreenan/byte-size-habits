const Progress = () => {
  return (
    <section className="relative py-10">
      <div
        className="bottom-auto top-7 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}>
        <svg
          className="absolute bottom-0 overflow-hidden"
          viewBox="0 0 2560 100"
          x="0"
          y="0">
          <path
            className="text-byteOrange fill-current"
            d="M0,60 C400,100 1200,0 2560,60 L2560,100 L0,100 Z"></path>
        </svg>
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Stats</h2>
            <ul>
              <li>Total Progress: 80%</li>
              <li>Completed Goals: 15</li>
              <li>Ongoing Goals: 5</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Progress Graph</h2>
            <div className="h-64 bg-gray-100 flex justify-center items-center">
              <p>Graph goes here, Child Component ?</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Days in a Row Tracker</h2>
          <div className="grid grid-cols-7 gap-2 text-center">
            <div className="bg-green-200 p-4 rounded-lg">Mon</div>
            <div className="bg-green-200 p-4 rounded-lg">Tue</div>
            <div className="bg-green-200 p-4 rounded-lg">Wed</div>
            <div className="bg-green-200 p-4 rounded-lg">Thu</div>
            <div className="bg-red-200 p-4 rounded-lg">Fri</div>
            <div className="bg-green-200 p-4 rounded-lg">Sat</div>
            <div className="bg-green-200 p-4 rounded-lg">Sun</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;

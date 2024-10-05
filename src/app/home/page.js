"use client";
import Image from "next/image";
import InstructionsPopup from "../components/InstructionsPopup";
import HomePage from "../components/HomePage";
import EnergyBar from "../components/EnergyBar";
import { useState } from "react/";

const Home = () => {
  const [energy, setEnergy] = useState(null);
  const [pet, setPet] = useState(null);

  return (
    <div>
      <section className="relative py-10 text-black">
        <div className="container mx-auto px-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <div
                className="relative w-full h-full bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage: `url('/char-bg.png')`,
                  backgroundSize: "100% 101%",
                }}>
                <div className="flex items-center justify-center mt-auto">
                  <div className="bg-byteOrange rounded-xl p-1 w-100 mt-6 h-auto">
                    <EnergyBar
                      energy={energy}
                      setEnergy={setEnergy}
                      pet={pet}
                      setPet={setPet}
                    />
                  </div>
                </div>
                <img
                  alt="character image"
                  className="relative max-w-full rounded-lg shadow-lg"
                  src="/happy.png"
                />
              </div>
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <div className="p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-6 shadow-lg rounded-full">
                  <img
                    src="/logo.png"
                    alt="Small Character"
                    className="rounded-full border-2 border-white shadow-lg"
                  />

                  <InstructionsPopup modalInstruction="Here is the home page instruction, change the instructions text according to your need!" />
                </div>
                <HomePage setEnergy={setEnergy} setPet={setPet} />
                <ul className="list-none mt-6">
                  <li className="py-2"></li>
                  <li className="py-2"></li>
                  <li className="py-2">
                    <div className="flex items-center"></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

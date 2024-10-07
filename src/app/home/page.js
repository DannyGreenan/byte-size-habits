"use client";
import Image from "next/image";
import InstructionsPopup from "../components/InstructionsPopup";
import HomePage from "../components/HomePage";
import EnergyBar from "../components/EnergyBar";
import { useState } from "react/";
import ItemBag from "../components/ItemsBag";

const Home = () => {
  const [energy, setEnergy] = useState(null);
  const [pet, setPet] = useState(null);
  const [emotion, setEmotion] = useState("happy");

  return (
    <div>
      <section className="py-10 text-black">
        <div className="container mx-auto flex flex-wrap justify-center">
          <div className="w-full md:w-5/12 px-4 flex flex-col items-center mb-6">
            <div className="mockup-window bg-base-100 text-white border">
              <div className="flex flex-col bg-gray-100 items-center justify-center p-6">
                <div className="bg-base-200 text-white rounded-xl p-4 w-full h-auto">
                  <EnergyBar
                    energy={energy}
                    setEnergy={setEnergy}
                    pet={pet}
                    setPet={setPet}
                  />
                </div>
                <img
                  alt="character image"
                  className="relative max-w-full rounded-lg shadow-lg mt-4"
                  src={`/${emotion}.png`}
                />
                <label
                  htmlFor="my-drawer"
                  className="btn btn-primary mt-4 flex items-center">
                  <img
                    src="/logo.png"
                    alt="Small Character"
                    className="rounded-full border-2 border-white shadow-lg w-10 h-10 mr-2"
                  />
                  Show Instructions
                </label>
              </div>
            </div>
          </div>

          <div className="w-full md:w-7/12 px-4 flex flex-col items-center">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col w-full">
              <div>
                <div className="w-full">
                  <div className="mockup-window bg-base-100 text-white border mb-6">
                    <div className="flex flex-col bg-gray-100 items-center justify-center p-4">
                      <HomePage
                        setEnergy={setEnergy}
                        setPet={setPet}
                        setEmotion={setEmotion}
                      />
                    </div>
                  </div>

                  <div className="mockup-browser bg-base-100 border">
                    <div className="mockup-browser-toolbar text-white">
                      <div className="input">Item Bag</div>
                    </div>
                    <div className="flex bg-gray-100 items-center justify-center p-4">
                      <ItemBag />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <li className="p-3 text-center inline-flex items-center justify-center w-full h-20 mb-6 shadow-lg rounded-full">
                  Website Tutorials
                </li>
                <li>
                  <a>
                    <InstructionsPopup
                      modalInstruction="Here is the home page instruction, change the instructions text according to your need!"
                      title="Coding Goal"
                    />
                  </a>
                </li>
                <li>
                  <a>
                    <InstructionsPopup
                      modalInstruction="Here is the home page instruction, change the instructions text according to your need!"
                      title="Energy"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

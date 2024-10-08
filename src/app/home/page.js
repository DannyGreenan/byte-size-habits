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
        <div className="container mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-6 justify-center">
          <div className="w-full px-4 flex flex-col items-center mb-6 lg:mb-0">
            <div className="mockup-window bg-base-100 text-white border w-full">
              <div
                className="flex flex-col bg-gray-100 items-center justify-center p-6"
                style={{
                  backgroundImage: "url('/bg-char.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  minHeight: "500px",
                  height: "auto",
                }}>
                <div className="bg-base-100 text-white rounded-xl p-4 w-full h-auto">
                  <EnergyBar
                    energy={energy}
                    setEnergy={setEnergy}
                    pet={pet}
                    setPet={setPet}
                  />
                </div>
                <Image
                  alt="character image"
                  className="relative max-w-full rounded-lg mt-4"
                  src={`/${emotion}.png`}
                  height={800}
                  width={800}
                />
                <label
                  htmlFor="my-drawer"
                  className="btn btn-primary mt-4 flex items-center">
                  <Image
                    src="/logo.png"
                    alt="Small Character"
                    className="rounded-full border-2 border-white shadow-lg w-8 h-8 mr-2"
                    height={50}
                    width={50}
                  />
                  Show Instructions
                </label>
              </div>
            </div>
          </div>

          <div className="w-full px-4 flex flex-col items-center space-y-6">
            <div className="mockup-window bg-base-100 text-white border w-full">
              <div className="flex flex-col bg-byteOrange items-center justify-center p-4">
                <HomePage
                  energy={energy}
                  setEnergy={setEnergy}
                  setPet={setPet}
                  setEmotion={setEmotion}
                />
              </div>
            </div>

            <div className="mockup-browser bg-base-100 border w-full relative">
              <div className="mockup-browser-toolbar text-white">
                <div className="input">Item Bag</div>
              </div>

              <Image
                src="/item-bag.png"
                alt="Item Bag Background"
                className="w-full h-auto object-cover"
                width={1000}
                height={1000}
              />

              <div
                className="absolute inset-0 flex items-center justify-center skew-y-6"
                style={{
                  transform: "translateX(-34px) translateY(130px)",
                }}>
                <ItemBag />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

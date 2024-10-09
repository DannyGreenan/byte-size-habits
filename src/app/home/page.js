"use client";
import Image from "next/image";
import HomePage from "../components/HomePage";
import EnergyBar from "../components/EnergyBar";
import { useState, useContext } from "react/";
import ItemBag from "../components/ItemsBag";
import { EnergyContext } from "../context/EnergyContext.js";

const Home = () => {
  const { energy, setEnergy } = useContext(EnergyContext);
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
                }}
              >
                <div className="bg-base-100 text-white rounded-xl p-4 w-full h-auto">
                  <EnergyBar />
                </div>
                <Image
                  alt="character image"
                  className="relative max-w-full rounded-lg mt-4"
                  src={`/${emotion}.png`}
                  height={800}
                  width={800}
                />
              </div>
            </div>
          </div>

          <div className="w-full px-4 flex flex-col items-center space-y-6">
            <div className="mockup-window bg-base-100 text-white border w-full">
              <div className="flex flex-col bg-byteOrange items-center justify-center p-4">
                <HomePage setEmotion={setEmotion} />
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
                }}
              >
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

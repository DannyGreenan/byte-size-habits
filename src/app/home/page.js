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
                    // setEmotion={setEmotion}
                  />
                </div>
                <img
                  alt="character image"
                  className="relative max-w-full rounded-lg shadow-lg mt-4"
                  src={`/${emotion}.png`}
                />
                <label
                  htmlFor="my-drawer"
                  className="btn btn-primary mt-4 flex items-center"
                >
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
                        energy={energy}
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
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <li className="p-3 text-center inline-flex items-center justify-center w-full h-20 mb-6 shadow-lg rounded-full">
                  Website Tutorials
                </li>
                <li>
                  <a>
                    <InstructionsPopup
                      modalInstruction="Byte Size Habits is here to help you learn to code!

Whether you're just starting out or have previous coding experience Byte Size Habits allows you to set personal learning goals and improve your programming skills. 

To set your goal, simply select your preferred programming language and your virtual pet will offer you helpful resources on your chosen topic.

You can edit your goal anytime on your profile page. Mastered Javascript? Why not give Typescript a try?
"
                      title="Coding Goal"
                    />
                  </a>
                </li>
                <li>
                  <a>
                    <InstructionsPopup
                      modalInstruction="The difficulty setting corresponds to the time you allocate per day to your learning goal. 

Select Easy (30 minutes per day), Medium (45 minutes per day) or Hard (60 minutes per day).

When you’re ready to study simply go to the home page and your virtual pet will set a timer for you. You can also study in your own time but be sure to let your pet know you’ve completed your daily goal.  
"
                      title="Difficulty"
                    />
                  </a>
                </li>
                <li>
                  <a>
                    <InstructionsPopup
                      modalInstruction="Your pet wants to see you succeed at your learning goal and depends on you to keep it fully charged and happy! 

Your pet’s energy will decrease over time and the only way to restore its energy in full is to complete your daily goal. 

Don’t let your pet’s energy drop below 1%! You may not like what you see…"
                      title="Energy"
                    />
                  </a>
                </li>
                <li>
                  <a>
                    <InstructionsPopup
                      modalInstruction="Everyday you complete your learning goal you are awarded coins. 

When you have accumulated enough coins you can treat your pet to a gift from the shop. 

Hint: Your pet LOVES to help you study, if you opt to use the timer feature you will be awarded bonus coins.
"
                      title="Coins"
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

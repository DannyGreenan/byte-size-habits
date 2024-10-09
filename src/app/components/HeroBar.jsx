"use client";

import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import CoinBalance from "./CoinBalance";
import InstructionsPopup from "./InstructionsPopup";
import { PiNotebook } from "react-icons/pi";

const HeroBar = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="bg-neutral border-2 border-accent w-full max-w-4xl mx-auto m-10 rounded-2xl">
      <div className="flex justify-center">
        <section className="hero pt-5">
          <div className="relative w-full">
            <div
              className="bg-cover bg-center"
              style={{
                backgroundImage: "url('/banner.png')",
                height: "322px",
              }}></div>

            <div className="absolute top-5 left-0 right-0 flex justify-between px-4 py-2">
              <div
                className="flex items-center space-x-2 text-gray-800 bg-byteDarkBlue px-4 py-1 my-2 rounded-md shadow-2xl border-2 border-byteDarkBlue"
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
                <span className="text-lg font-bold">
                  {loggedInUser.username ? (
                    loggedInUser.username
                  ) : (
                    <span className="loading loading-spinner loading-md"></span>
                  )}
                </span>
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
                <span className="text-lg font-bold">
                  <CoinBalance />
                </span>
                <img
                  src="/coins.png"
                  alt="Small Character"
                  className="w-16 h-16 rounded-full border-2 border-white shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <div className="drawer flex">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex-1 m-auto ">
            {/* Flexbox container to align items horizontally */}
            <div className="flex justify-between items-center">
              {/* Drawer button aligned to the left */}
              <label
                htmlFor="my-drawer"
                className="btn btn-primary text-primary-content drawer-button m-1 ml-3">
                <PiNotebook size={26} />
                Tutorials
              </label>

              {/* Flexbox container for theme switcher and dropdown */}
              <div className="flex items-center space-x-4 text-primary">
                {/* Theme switcher */}
                <label className="swap swap-rotate">
                  <input
                    type="checkbox"
                    className="theme-controller hidden"
                    value="light"
                  />
                  {/* Sun icon */}
                  <svg
                    className="swap-off h-10 w-10 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>
                  {/* Moon icon */}
                  <svg
                    className="swap-on h-10 w-10 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>

                {/* Theme dropdown */}
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn m-1">
                    Theme
                    <svg
                      width="12px"
                      height="12px"
                      className="inline-block h-2 w-2 fill-current opacity-60"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 2048 2048">
                      <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">
                    <li>
                      <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Default"
                        value="default"
                      />
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Retro"
                        value="retro"
                      />
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Forest"
                        value="forest"
                      />
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Halloween"
                        value="halloween"
                      />
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Cyberpunk"
                        value="cyberpunk"
                      />
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Valentine"
                        value="valentine"
                      />
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Aqua"
                        value="aqua"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div className="drawer-side flex-3">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay "></label>
            <ul className="menu bg-base-200 text-base-content min-h-1/2 lg:w-80 w-60 lg:mt-20 rounded-xl mt-14">
              {/* Sidebar content here */}
              <li>
                <a>
                  <InstructionsPopup
                    modalInstruction="Byte Size Habits is here to help you learn to code!
            Whether you're just starting out or have previous coding experience Byte Size Habits allows you to set personal learning goals and improve your programming skills.
            To set your goal, simply select your preferred programming language and your virtual pet will offer you helpful resources on your chosen topic.
            You can edit your goal anytime on your profile page. Mastered Javascript? Why not give Typescript a try?"
                    title="Coding Goal"
                  />
                </a>
              </li>
              <li>
                <a>
                  <InstructionsPopup
                    modalInstruction="The difficulty setting corresponds to the time you allocate per day to your learning goal.
            Select Easy (30 minutes per day), Medium (45 minutes per day) or Hard (60 minutes per day).
            When you’re ready to study simply go to the home page and your virtual pet will set a timer for you."
                    title="Difficulty"
                  />
                </a>
              </li>
              <li>
                <a>
                  <InstructionsPopup
                    modalInstruction="Your pet wants to see you succeed at your learning goal and depends on you to keep it fully charged and happy! 
            Your pet’s energy will decrease over time and the only way to restore its energy in full is to complete your daily goal. 
            Don’t leave it too long as your pet will eventually power down!"
                    title="Pet Energy"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBar;

"use client";

import { useContext } from "react";
import { UserContext } from "../UserContext";

const HeroBar = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="mockup-browser bg-base-100 border w-full max-w-4xl mx-auto">
      <div className="mockup-browser-toolbar">
        <div className="input">Byte Size Habits</div>
      </div>
      <div className="bg-base-200 flex justify-center">
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
                  {loggedInUser.username}
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
                  {loggedInUser.currency}
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
    </div>
  );
};

export default HeroBar;

"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [seconds, setSeconds] = useState(60);
  const [minutes, setMinutes] = useState(24);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        setSeconds(59);
        if (minutes > 0) {
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, minutes]);

  return (
    <div>
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

        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="character image"
                className="max-w-full rounded-lg shadow-lg"
                src="/happy.png"
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <div className=" p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-6 shadow-lg rounded-full">
                  <img
                    src="/logo.png"
                    alt="Small Character"
                    className="rounded-full border-2 border-white shadow-lg"
                  />
                  Username
                </div>
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src="/happy.png"
                      />
                    </div>
                  </div>
                  <div className="chat-bubble chat-bubble-info">
                    Did you code today ?
                  </div>
                </div>
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src="/happy.png"
                      />
                    </div>
                  </div>
                  <div className="chat-bubble chat-bubble-info">
                    Ready to start a timer ?
                    <button className="btn btn-primary mx-2">Yes !</button>
                  </div>
                </div>
                <div className="m-5">
                  <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                      <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": minutes }}></span>
                      </span>
                      min
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                      <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": seconds }}></span>
                      </span>
                      sec
                    </div>
                  </div>
                </div>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <progress
                          className="progress progress-warning w-56 h-6"
                          value="70"
                          max="100"></progress>
                      </div>
                      <button className="btn m-4 hover:bg-yellow-300 hover:text-gray-900 hover:scale-105 transition-transform duration-300">
                        Charge
                        <Image src="/battery.png" height={35} width={35} />
                      </button>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <progress
                          className="progress progress-success w-56 h-6"
                          value="40"
                          max="100"></progress>
                      </div>
                      <button className="btn m-4 hover:bg-green-600 hover:text-gray-900 hover:scale-105 transition-transform duration-300">
                        Feed
                        <Image src="/memory.png" height={35} width={35} />
                      </button>
                    </div>
                  </li>
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

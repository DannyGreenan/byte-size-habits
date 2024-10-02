"use client";

import { fetchUser, patchUser } from "../profileAPI";
import { useState, useEffect } from "react";

const UserProfile = ({ params }) => {
  const [topic, setTopic] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const { user_id } = params;

  useEffect(() => {
    fetchUser(user_id, setCurrentUser, setTopic);
  }, []);

  const handleTopicChange = (e) => {
    setTopic(e.target.innerText);
  };

  const handleSubmit = () => {
    patchUser(user_id, { goal: topic });
  };

  return (
    <div>
      <section className="relative block" style={{ height: "500px" }}>
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
        <div className="absolute top-0 w-full h-full bg-center bg-cover">
          <span className="w-full h-full absolute bg-byteOrange"></span>
        </div>
      </section>
      <section className="relative py-16 bg-byteOrange">
        <div className="container mx-auto px-4">
          <div
            className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
            style={{ marginTop: "-28rem" }}>
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <img
                      alt="..."
                      src="/logo.png"
                      className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                      style={{ "max-width": "150px" }}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <button
                      className="bg-byteDarkBlue active:bg-byteLightBlue uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                      type="button"
                      style={{ transition: "all 0.15s ease 0s" }}>
                      Save Edits
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        22
                      </span>
                      <span className="text-sm text-gray-500">Commits</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        10
                      </span>
                      <span className="text-sm text-gray-500">Codewars</span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        3
                      </span>
                      <span className="text-sm text-gray-500">
                        Days in a Row
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                  Username
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>
                  Name
                </div>
                <div className="mb-2 text-gray-700 mt-10">
                  <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                  Current Topic/Goal
                </div>
                <div className="mb-2 text-gray-700">
                  <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                  Difficulty
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-gray-300 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      Edit your Profile
                    </p>
                  </div>

                  <select className="select w-full max-w-xs m-6">
                    <option disabled>Pick your Goal</option>
                    <option value="">TypeScript</option>
                    <option value="">Next.js</option>
                    <option value="">JavaScript</option>
                    <option value="">Python</option>
                    <option value="">Supabase</option>
                  </select>

                  <input
                    type="range"
                    min={0}
                    max="100"
                    value="25"
                    className="range"
                    step="25"
                  />
                  <div className="flex w-full justify-between px-2 text-xs">
                    <span>
                      <p>|</p>
                      <p>Easy</p>
                    </span>
                    <span>
                      <p>|</p>
                      <p>Medium</p>
                    </span>
                    <span>
                      <p>|</p>
                      <p>Hard</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;

"use client";

import { UserContext } from "@/app/context/UserContext";
import { patchUser } from "../../models/profile.model";
import { useEffect, useState } from "react";
import { useContext } from "react";
import ItemBag from "@/app/components/ItemsBag";
import { CgProfile } from "react-icons/cg";
import { SiCodewars } from "react-icons/si";
import { IoSpeedometerOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFire } from "react-icons/fa";

const UserProfile = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [editLoading, setEditLoading] = useState(false);
  const [editedMsg, setEditedMsg] = useState(false);
  const [goal, setGoal] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState(0);

  useEffect(() => {
    setSelectedDifficulty(loggedInUser.difficulty);
    setGoal(loggedInUser.goal);
  }, []);

  const handleDifficultyChange = (number) => {
    setSelectedDifficulty(number);
    setEditedMsg(false);
  };

  function handleGoal(event) {
    setGoal(event.target.value);
    setEditedMsg(false);
  }

  const handleSubmit = () => {
    setEditLoading(true);
    patchUser(loggedInUser.user_id, {
      goal,
      difficulty: selectedDifficulty,
    }).then((user) => {
      setLoggedInUser(user);
      setEditLoading(false);
      setEditedMsg(true);
    });
  };

  return (
    <div>
      <section className="relative py-2">
        <div className="container mx-auto px-10 py-6">
          <div className="mockup-window bg-base-100 border-2 border-base-100 w-full mb-6 shadow-xl flex justify-between items-end">
            <button className="btn btn-square btn-outline btn-sm my-6 mx-2 -mt-10">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div
              className="bg-byteOrange px-6 py-10 w-full"
              style={{
                backgroundImage: "url('/profile-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                minHeight: "200px",
                height: "auto",
              }}>
              <div className="">
                <div className="">
                  <div>
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                        <div className="relative">
                          <img
                            alt="..."
                            src="/logo.png"
                            className="shadow-xl rounded-full h-auto align-middle border-4 border-base-100 absolute -m-16 -ml-20 lg:-ml-16"
                            style={{ maxWidth: "150px" }}
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                        <div className="py-6 px-3 mt-32 sm:mt-0">
                          <button
                            className="btn btn-primary btn-lg btn-wide uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                            type="button"
                            style={{ transition: "all 0.15s ease 0s" }}
                            onClick={handleSubmit}>
                            {editLoading ? (
                              <span className="loading loading-dots loading-sm"></span>
                            ) : (
                              "Save Edits"
                            )}
                          </button>
                          <p>{editedMsg ? "Account edited" : null}</p>
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4 lg:order-1"></div>
                    </div>
                    <div className="text-center mt-12"></div>{" "}
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="stats shadow">
                        <div className="stat">
                          <div className="stat-figure text-primary">
                            <CgProfile size={30} />
                          </div>
                          <div className="stat-title">Username</div>
                          <div className="stat-value">
                            {loggedInUser.username}
                          </div>
                          <div className="stat-desc">Logged in profile</div>
                        </div>
                        <div className="stat">
                          <div className="stat-figure text-primary">
                            <FaCode size={30} />
                          </div>
                          <div className="stat-title">Goal</div>
                          <div className="stat-value"> {loggedInUser.goal}</div>
                          <div className="stat-desc">Current Goal</div>
                        </div>
                        <div className="stat">
                          <div className="stat-figure text-primary">
                            <IoSpeedometerOutline size={30} />
                          </div>
                          <div className="stat-title">Difficulty</div>
                          <div className="stat-value">
                            {" "}
                            {loggedInUser.difficulty + "Mins"}
                          </div>
                          <div className="stat-desc">
                            Current Difficulty Time
                          </div>
                        </div>
                        <div className="stat">
                          <div className="stat-figure text-primary">
                            <SiCodewars size={30} />
                          </div>
                          <div className="stat-title">CodeWars</div>
                          <div className="stat-value">
                            {loggedInUser.Codewars}
                          </div>
                          <div className="stat-desc">Challenges Complete</div>
                        </div>
                        <div className="stat">
                          <div className="stat-figure text-primary">
                            <FaGithub size={30} />
                          </div>
                          <div className="stat-title">GitHub</div>
                          <div className="stat-value">
                            {loggedInUser.Github}
                          </div>
                          <div className="stat-desc">↗︎ Commits Pushed</div>
                        </div>
                        <div className="stat">
                          <div className="stat-figure text-primary">
                            <FaFire size={30} />
                          </div>
                          <div className="stat-title">Streak</div>
                          <div className="stat-value">
                            {" "}
                            {loggedInUser.streak ? loggedInUser.streak : 0}
                          </div>
                          <div className="stat-desc">Days in a Row</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="">
              <div>
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-12/12 px-4 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 justify-center">
                    <div className="mockup-browser bg-base-100 border-2 border-base-100 w-full lg:w-1/2 ">
                      <div className="mockup-browser-toolbar">
                        <div className="input">Edit Goal</div>
                        <button className="btn btn-square btn-outline btn-sm">
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="bg-byteOrange px-4 py-6 flex justify-center items-center">
                        <select
                          className="select w-full select-lg max-w-xs"
                          onChange={handleGoal}>
                          <option value={goal} defaultValue>
                            {goal ? goal : "Goal"}
                          </option>
                          <option value="Typescript">TypeScript</option>
                          <option value="Next.js">Next.js</option>
                          <option value="JavaScript">JavaScript</option>
                          <option value="Python">Python</option>
                          <option value="Supabase">Supabase</option>
                        </select>
                      </div>
                    </div>

                    <div className="mockup-browser bg-base-100 border-2 border-base-100 w-full lg:w-1/2">
                      <div className="mockup-browser-toolbar">
                        <div className="input">Edit Difficulty</div>
                        <button className="btn btn-square btn-outline btn-sm">
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="bg-byteOrange">
                        <ul>
                          <div className="stats shadow w-fit bg-byteOrange">
                            <li
                              onClick={() => handleDifficultyChange(30)}
                              className={`cursor-pointer ${
                                selectedDifficulty === 30
                                  ? "text-primary"
                                  : "text-gray-500"
                              }`}>
                              <div className={`stat `}>
                                <div className="stat-figure text-secondary">
                                  <div className="w-16 rounded-full">
                                    <img src="/happy.png" alt="Happy Avatar" />
                                  </div>
                                </div>

                                <div className={`stat-value `}>Easy</div>
                                <div className="stat-title text-gray-600">
                                  30 Minutes
                                </div>
                                <div className="stat-desc text-primary">
                                  20 Coin Reward
                                </div>
                              </div>
                            </li>
                            <li
                              onClick={() => handleDifficultyChange(45)}
                              className={`cursor-pointer ${
                                selectedDifficulty === 45
                                  ? "text-primary"
                                  : "text-gray-500"
                              }`}>
                              <div className="stat">
                                <div className="stat-figure text-primary">
                                  <div className="w-16 rounded-full">
                                    <img
                                      src="/worry.png"
                                      alt="Worried Avatar"
                                    />
                                  </div>
                                </div>
                                <div className="stat-value">Medium</div>
                                <div className="stat-title text-gray-600">
                                  45 Minutes
                                </div>
                                <div className="stat-desc text-primary">
                                  30 Coin Reward
                                </div>
                              </div>
                            </li>

                            <li
                              onClick={() => handleDifficultyChange(60)}
                              className={`cursor-pointer ${
                                selectedDifficulty === 60
                                  ? "text-primary"
                                  : "text-gray-500"
                              }`}>
                              <div className="stat">
                                <div className="stat-figure text-secondary">
                                  <div className="w-16 rounded-full">
                                    <img src="/angry.png" alt="Angry Avatar" />
                                  </div>
                                </div>
                                <div className="stat-value">Hard</div>
                                <div className="stat-title text-gray-600">
                                  60 Minutes
                                </div>
                                <div className="stat-desc text-primary">
                                  50 Coin Reward
                                </div>
                              </div>
                            </li>
                          </div>
                        </ul>
                      </div>

                      {/* <div className="bg-gray-100 px-4 py-6">
                        {selectedDifficulty ? (
                          <ul className="space-y-4">
                            <li>
                              <input
                                type="radio"
                                name="radio-2"
                                value={30}
                                className="radio radio-primary"
                                onClick={handleDifficultyChange}
                                defaultChecked={selectedDifficulty === 30}
                              />
                              <label className="mr-4"> Easy</label>
                            </li>
                            <li>
                              <input
                                type="radio"
                                name="radio-2"
                                value={45}
                                className="radio radio-primary"
                                onClick={handleDifficultyChange}
                                defaultChecked={selectedDifficulty === 45}
                              />
                              <label className="mr-4"> Medium</label>
                            </li>
                            <li>
                              <input
                                type="radio"
                                name="radio-2"
                                value={60}
                                className="radio radio-primary"
                                onClick={handleDifficultyChange}
                                defaultChecked={selectedDifficulty === 60}
                              />

                              <label className="mr-4"> Hard</label>
                            </li>
                          </ul>
                        ) : null}
                      </div> */}
                    </div>
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

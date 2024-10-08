"use client";

import { UserContext } from "@/app/UserContext";
import { patchUser } from "../../models/profile.model";
import { useEffect, useState } from "react";
import { useContext } from "react";
import ItemBag from "@/app/components/ItemsBag";

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

  const handleDifficultyChange = (e) => {
    setSelectedDifficulty(e.target.value);
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
      <section className="relative py-16">
        <div className="container mx-auto px-10 py-6">
          <div className="mockup-browser bg-base-100 border w-full mb-6 shadow-xl">
            <div className="mockup-browser-toolbar content-start"></div>
            <div className="bg-gray-100 px-6 py-10">
              <div className="">
                <div className="">
                  <div>
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                        <div className="relative">
                          <img
                            alt="..."
                            src="/logo.png"
                            className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                            style={{ maxWidth: "150px" }}
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                        <div className="py-6 px-3 mt-32 sm:mt-0">
                          <button
                            className="bg-byteDarkBlue active:bg-byteLightBlue uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                            type="button"
                            style={{ transition: "all 0.15s ease 0s" }}
                            onClick={handleSubmit}
                          >
                            {editLoading ? (
                              <span className="loading loading-dots loading-sm"></span>
                            ) : (
                              "Save Edits"
                            )}
                          </button>
                          <p>{editedMsg ? "Account edited" : null}</p>
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4 lg:order-1">
                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                          <div className="mr-4 p-3 text-center">
                            <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                              {loggedInUser.Github}
                            </span>
                            <span className="text-sm text-gray-500">
                              Git Commits
                            </span>
                          </div>
                          <div className="mr-4 p-3 text-center">
                            <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                              {loggedInUser.Codewars}
                            </span>
                            <span className="text-sm text-gray-500">
                              Codewars
                            </span>
                          </div>
                          <div className="lg:mr-4 p-3 text-center">
                            <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                              {loggedInUser.streak ? loggedInUser.streak : 0}
                            </span>
                            <span className="text-sm text-gray-500">
                              Days in a Row
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-12">
                      <h3 className="text-4xl font-semibold leading-normal text-gray-800 mb-2">
                        {loggedInUser.username}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="px-6">
              <div>
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 justify-center">
                    <div className="mockup-browser bg-base-100 border w-full lg:w-1/2">
                      <div className="mockup-browser-toolbar">
                        <div className="input">Edit Goal</div>
                      </div>
                      <div className="bg-gray-100 px-4 py-6">
                        <select
                          className="select w-full select-lg select-info max-w-xs"
                          onChange={handleGoal}
                        >
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
                    {/* 
                    <div className="mockup-browser bg-base-100 border w-full lg:w-1/2">
                      <div className="mockup-browser-toolbar">
                        <div className="input">Item Bag</div>
                      </div>
                      <div className="bg-gray-100 px-4 py-6">
                        <ItemBag />
                      </div>
                    </div> */}

                    <div className="mockup-browser bg-base-100 border w-full lg:w-1/2">
                      <div className="mockup-browser-toolbar">
                        <div className="input">Edit Difficulty</div>
                      </div>
                      <div className="bg-gray-100 px-4 py-6">
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
                      </div>
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

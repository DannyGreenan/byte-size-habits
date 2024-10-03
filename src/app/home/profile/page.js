"use client";

import { UserContext } from "@/app/UserContext";
import { patchUser } from "../../models/profile.model";
import { useEffect, useState } from "react";
import { useContext } from "react";

const UserProfile = () => {
  const [topic, setTopic] = useState("");
  const { loggedInUser } = useContext(UserContext);
  const [goal, setGoal] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");

  useEffect(() => {
    setSelectedDifficulty(loggedInUser.difficulty);
  }, []);

  console.log(selectedDifficulty, "selected Diff");

  function handleGoal(event) {
    setGoal(event.target.value);
  }

  const handleSubmit = () => {
    patchUser(user_id, { goal: topic });
  };

  return (
    <div>
      <section className="relative block" style={{ height: "500px" }}></section>
      <section
        className="relative py-16"
        style={{
          backgroundImage: `url('/background.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
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
                      style={{ maxWidth: "150px" }}
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
              <div className="mt-10 py-10 border-t border-gray-300 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      Edit your Profile
                    </p>
                  </div>

                  <select
                    className="select w-full select-lg select-info max-w-xs m-6"
                    onChange={handleGoal}>
                    <option disabled defaultValue>
                      {loggedInUser.goal}
                    </option>
                    <option value="Typescript">TypeScript</option>
                    <option value="Next.js">Next.js</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Python">Python</option>
                    <option value="Supabase">Supabase</option>
                  </select>

                  {selectedDifficulty ? (
                    <ul>
                      <li>
                        <label>Easy</label>
                        <input
                          type="radio"
                          name="radio-2"
                          className="radio radio-primary"
                          defaultChecked={selectedDifficulty === "Easy"}
                        />
                      </li>
                      <li>
                        <label>Medium</label>
                        <input
                          type="radio"
                          name="radio-2"
                          className="radio radio-primary"
                          defaultChecked={selectedDifficulty === "Medium"}
                        />
                      </li>
                      <li>
                        <label>Hard</label>
                        <input
                          type="radio"
                          name="radio-2"
                          className="radio radio-primary"
                          defaultChecked={selectedDifficulty === "Hard"}
                        />
                      </li>
                    </ul>
                  ) : null}
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

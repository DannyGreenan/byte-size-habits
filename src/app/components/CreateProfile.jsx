"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { addUser } from "../models/profile.model";
import { UserContext } from "@/app/UserContext";

const CreateProfile = ({ setCreate }) => {
  const { newUser, setNewUser } = useContext(UserContext);
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [goal, setGoal] = useState("");

  const userPlaceholder = {};

  function handleGoal(event) {
    setGoal(event.target.value);
    console.log(userPlaceholder);
  }
  function handleUsername(event) {
    setNewUsername(event.target.value);
    console.log(userPlaceholder);
  }

  function handleDifficulty(event) {
    userPlaceholder.difficulty = setSelectedDifficulty(event.target.value);
    console.log(userPlaceholder);
  }
  const router = useRouter();
  async function handleSubmit(event) {
    event.preventDefault();
    const actualUser = await addUser(userPlaceholder);
    setNewUser(actualUser);
    return router.replace("/home");
  }

  const handleCreateClick = () => {
    setCreate(false);
  };

  return (
    <div
      className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-base-100 font-nunito font-extrabold"
      style={{
        backgroundImage: `url('/background.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="w-full md:w-1/2 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="p-8 bg-base-200 rounded-lg shadow-lg space-y-6 w-full max-w-md h-full bg-opacity-80 backdrop-blur-lg">
          <div
            className="w-full h-32 bg-no-repeat bg-center rounded-t-lg"
            style={{
              backgroundImage: `url('/create-profile.jpeg')`,
              backgroundSize: "cover",
              height: "35vh",
              borderRadius: "0.5rem",
            }}></div>

          <div className="form-control w-full">
            <label htmlFor="create_username" className="label">
              <span className="label-text font-nunito font-extrabold">
                Username
              </span>
            </label>
            <input
              id="create_username"
              type="text"
              onChange={handleUsername}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Pick your Goal</span>
            </label>
            <select
              onChange={handleGoal}
              className="select select-bordered w-full">
              <option disabled defaultValue>
                Pick your Goal
              </option>
              <option value="Typescript">TypeScript</option>
              <option value="Next.js">Next.js</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="Supabase">Supabase</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Difficulty</span>
            </label>
            <div className="flex justify-between">
              <button
                className={`btn m-1 w-1/3 ${
                  selectedDifficulty === "Easy" ? "btn-success" : "btn-ghost"
                }`}
                type="button"
                onClick={handleDifficulty}
                value="Easy">
                Easy (30 min)
              </button>
              <button
                className={`btn m-1 w-1/3 ${
                  selectedDifficulty === "Medium" ? "btn-warning" : "btn-ghost"
                }`}
                type="button"
                onClick={handleDifficulty}
                value="Medium">
                Med (45 min)
              </button>
              <button
                className={`btn m-1 w-1/3 ${
                  selectedDifficulty === "Hard" ? "btn-error" : "btn-ghost"
                }`}
                type="button"
                onClick={handleDifficulty}
                value="Hard">
                Hard (1 hour)
              </button>
            </div>
          </div>
          <button type="submit" className="btn btn-outline btn-accent w-full">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-outline btn-accent w-full"
            onClick={handleCreateClick}>
            Back to Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;

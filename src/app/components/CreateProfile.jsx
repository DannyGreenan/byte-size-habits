"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { addUser, fetchAllUsers } from "../models/profile.model";
import { UserContext } from "@/app/UserContext";
import { addPet } from "../models/pet.model";

const CreateProfile = ({ setCreate }) => {
  const { setLoggedInUser } = useContext(UserContext);
  const [selectedDifficulty, setSelectedDifficulty] = useState(30);
  const [newUsername, setNewUsername] = useState("");
  const [goal, setGoal] = useState("TypeScript");

  const [createError, setCreateError] = useState(false);

  function handleGoal(event) {
    setGoal(event.target.value);
  }
  function handleUsername(event) {
    setCreateError(false);
    setNewUsername(event.target.value);
  }
  function handleDifficulty(event) {
    setSelectedDifficulty(event.target.value);
  }

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    setCreateError(false);
    const userPlaceholder = {
      goal: goal,
      username: newUsername,
      difficulty_time: selectedDifficulty,
      last_activity: Date.now(),
      stored_items: [],
    };

    const newPetStats = {
      hunger: 100,
      energy: 100,
      daily_habit_complete: false,
    };

    fetchAllUsers()
      .then((allUsers) => {
        return allUsers.filter((user) => user.username === newUsername);
      })
      .then((foundUsers) => {
        if (foundUsers.length !== 1) {
          return addPet(newPetStats);
        } else {
          setCreateError(true);
        }
      })
      .then((pet) => {
        userPlaceholder.pet_id = pet.pet_id;
        return addUser(userPlaceholder);
      })
      .then((user) => {
        setLoggedInUser(user);
        router.push("/home");
      })
      .catch((error) => {
        setCreateError(true);
      });
  };

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
              <span
                className={`label-text font-nunito font-extrabold ${
                  createError ? "text-red-400" : ""
                }`}>
                Username {createError ? "Taken" : ""}
              </span>
            </label>
            <input
              id="create_username"
              type="text"
              onChange={handleUsername}
              className="input input-bordered w-full"
              required
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
                  selectedDifficulty === 30 ? "btn-success" : "btn-ghost"
                }`}
                type="button"
                onClick={handleDifficulty}
                value={30}>
                Easy (30 min)
              </button>
              <button
                className={`btn m-1 w-1/3 ${
                  selectedDifficulty === 45 ? "btn-warning" : "btn-ghost"
                }`}
                type="button"
                onClick={handleDifficulty}
                value={45}>
                Med (45 min)
              </button>
              <button
                className={`btn m-1 w-1/3 ${
                  selectedDifficulty === 60 ? "btn-error" : "btn-ghost"
                }`}
                type="button"
                onClick={handleDifficulty}
                value={60}>
                Hard (1 hour)
              </button>
            </div>
          </div>
          <button
            type="submit"
            className={`btn btn-outline ${
              createError ? "btn-error" : ""
            } btn-accent w-full`}>
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

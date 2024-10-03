"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { addUser } from "../models/profile.model";
import { UserContext } from "@/app/UserContext";
import HeroBar from "../components/HeroBar";

const CreateProfile = () => {
  const { newUser, setNewUser } = useContext(UserContext);
  const userPlaceholder = {};

  function handleGoal(event) {
    userPlaceholder.goal = event.target.value;
    console.log(userPlaceholder);
  }
  function handleUsername(event) {
    userPlaceholder.username = event.target.value;
    console.log(userPlaceholder);
  }

  function handleDifficulty(event) {
    userPlaceholder.difficulty = event.target.value;
    console.log(userPlaceholder);
  }
  const router = useRouter();
  async function handleSubmit(event) {
    event.preventDefault();
    const actualUser = await addUser(userPlaceholder);
    setNewUser(actualUser);
    return router.replace("/home");
  }

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
                className="btn btn-outline btn-primary m-1 w-1/3 btn-success"
                type="button"
                onClick={handleDifficulty}
                value="Easy">
                Easy (30 min)
              </button>
              <button
                className="btn btn-outline btn-primary m-1 w-1/3 btn-warning"
                type="button"
                onClick={handleDifficulty}
                value="Medium">
                Med (45 min)
              </button>
              <button
                className="btn btn-outline w-1/3 m-1 btn-error"
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
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;

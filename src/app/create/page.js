"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { addUser } from "../models/profile.model";
import { UserContext } from "@/app/providers";

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="create_username">username</label>
      <input id="create_username" type="text" onChange={handleUsername}></input>
      <select onChange={handleGoal} className="select w-full max-w-xs m-6">
        <option disabled defaultValue={true}>
          Pick your Goal
        </option>
        <option value="Typescript">TypeScript</option>
        <option value="Next.js">Next.js</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
        <option value="Supabase">Supabase</option>
      </select>
      <label>difficulty</label>

      <button
        className="bg-byteDarkBlue active:bg-byteLightBlue uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
        type="button"
        style={{ transition: "all 0.15s ease 0s" }}
        onClick={handleDifficulty}
        value="Easy">
        easy (30 minutes)
      </button>
      <button
        className="bg-byteDarkBlue active:bg-byteLightBlue uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
        type="button"
        style={{ transition: "all 0.15s ease 0s" }}
        onClick={handleDifficulty}
        value="Medium">
        medium (45 minutes)
      </button>
      <button
        className="bg-byteDarkBlue active:bg-byteLightBlue uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
        type="button"
        style={{ transition: "all 0.15s ease 0s" }}
        onClick={handleDifficulty}
        value="hard">
        hard (1 hour)
      </button>
      <button
        type="submit"
        className="bg-byteDarkBlue active:bg-byteLightBlue uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
        style={{ transition: "all 0.15s ease 0s" }}
        onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default CreateProfile;

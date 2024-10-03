"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchUser, patchUser } from "@/app/models/profile.model";
import { getPet, patchPet } from "@/app/models/pet.model";

export default function Home() {
  const [timerTriggered, setTimerTriggered] = useState(false);
  const [energy, setEnergy] = useState(0);
  const [energyError, setEnergyError] = useState(false);
  const [lastActivity, setLastActivity] = useState(null);
  const [user, setUser] = useState(null);
  const [pet, setPet] = useState(null);
  const [topic, setTopic] = useState(null);

  const currentUser = 45;
  const displayEnergyValue = true;

  // below can be replaced with context
  useEffect(() => {
    if (!user) fetchUser(currentUser, setUser, setTopic);
    if (user) getPet(user.pet_id, setPet);
  }, [user]);

  useEffect(() => {
    console.log("----------------------------------------");
    console.log(energy, "in the effect");
    console.log("----------------------------------------");
    const currentTime = Date.now();
    let currentEnergy = 0;
    if (user) setLastActivity(user.last_activity);
    if (user && pet && lastActivity && !timerTriggered) {
      console.log("I RAN!!");
      if (!energy) currentEnergy = pet.energy;
      setTimerTriggered(true);
      const timeDifferenceInMinutes = (currentTime - lastActivity) / 1000 / 60;
      if (timeDifferenceInMinutes > 0) {
        console.log("----------------------------------------");
        console.log(energy, "in the first block");
        console.log("----------------------------------------");
        setEnergyError(false);
        const minutesElapsed = Math.floor(timeDifferenceInMinutes);
        const newEnergyLevel =
          currentEnergy - minutesElapsed >= 0
            ? currentEnergy - minutesElapsed
            : 0;
        patchPet(pet.pet_id, { energy: newEnergyLevel }, setEnergy, "energy");
        patchUser(currentUser, { last_activity: currentTime });
      }
    } else if (user && pet && lastActivity && timerTriggered) {
      console.log("----------------------------------------");
      console.log(energy, "in the second block");
      console.log("----------------------------------------");
      setInterval(() => {
        setEnergyError(false);
        const newEnergyLevel = energy - 1 >= 0 ? energy - 1 : 0;
        patchPet(pet.pet_id, { energy: newEnergyLevel }, setEnergy, "energy");
        patchUser(currentUser, { last_activity: currentTime });
        setLastActivity(currentTime);
      }, 10000);
    }
  }, [energy, user, pet]);

  const energyHandler = () => {
    console.log(energy, "in the handler");
    if (energy >= 100)
      return setEnergyError("McByteSize is already fully charged!!");
    const newEnergyLevel = energy + 10 >= 100 ? 100 : energy + 10;
    patchPet(pet.pet_id, { energy: newEnergyLevel }, setEnergy, "energy");
    patchUser(currentUser, { last_activity: Date.now() });
  };

  return (
    <>
      {displayEnergyValue ? <p>Remaining energy: {energy}</p> : null}
      {energyError ? <p>{energyError}</p> : null}
      <div className="flex items-center">
        <div>
          <progress
            className="progress progress-success w-56 h-6"
            value={energy}
            max="100"
          ></progress>
        </div>
        <button
          onClick={energyHandler}
          className="btn m-4 hover:bg-green-600 hover:text-gray-900 hover:scale-105 transition-transform duration-300"
        >
          Feed
          <Image src="/memory.png" height={35} width={35} />
        </button>
      </div>
    </>
  );
}

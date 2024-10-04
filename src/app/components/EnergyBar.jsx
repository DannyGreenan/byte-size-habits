"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { patchUser } from "@/app/models/profile.model";
import { getPet, patchPet } from "@/app/models/pet.model";
import { useContext } from "react";
import { UserContext } from "../UserContext";

export default function EnergyBar() {
  const [timerTriggered, setTimerTriggered] = useState(false);
  const [energy, setEnergy] = useState(null);
  const [energyError, setEnergyError] = useState(false);
  const [lastActivity, setLastActivity] = useState(null);

  const { loggedInUser } = useContext(UserContext);

  const [pet, setPet] = useState(null);

  useEffect(() => {
    getPet(loggedInUser.pet_id, setPet);
  }, []);

  useEffect(() => {
    const currentTime = Date.now();
    let currentEnergy = 0;
    if (loggedInUser) setLastActivity(loggedInUser.last_activity);
    if (loggedInUser && pet && lastActivity && !timerTriggered) {
      if (!energy) currentEnergy = pet.energy;
      setTimerTriggered(true);
      const timeDifferenceInMinutes = (currentTime - lastActivity) / 1000 / 60;
      if (timeDifferenceInMinutes > 0) {
        setEnergyError(false);
        const minutesElapsed = Math.floor(timeDifferenceInMinutes);
        const newEnergyLevel =
          currentEnergy - minutesElapsed >= 0
            ? currentEnergy - minutesElapsed
            : 0;
        patchPet(pet.pet_id, { energy: newEnergyLevel }, setEnergy, "energy");
        patchUser(loggedInUser, { last_activity: currentTime });
      }
    } else if (loggedInUser && pet && lastActivity && timerTriggered) {
      setTimeout(() => {
        setEnergyError(false);
        if (energy === null) return;
        const newEnergyLevel = energy - 1 >= 0 ? energy - 1 : 0;
        patchPet(pet.pet_id, { energy: newEnergyLevel }, setEnergy, "energy");
        patchUser(loggedInUser, { last_activity: currentTime });
        setLastActivity(currentTime);
      }, 10000);
    }
    console.log("Current Energy", energy);
  }, [energy, pet, loggedInUser]);

  return (
    <>
      {energyError ? <p>McByteSize is already fully charged!!</p> : null}
      {energy === 0 ? <p>Please charge me... I'm out of juice!!</p> : null}
      <div className="flex items-center justify-center">
        <div>
          {energy === null ? (
            <span>Loading</span>
          ) : (
            <progress
              className={`progress ${energy < 25 ? "progress-error" : ""} ${
                energy > 25 && energy < 60
                  ? "progress-warning"
                  : "progress-success"
              } w-56 h-6`}
              value={energy}
              max="100"
            ></progress>
          )}
        </div>
      </div>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import { getPet, patchPet } from "./pet.model";

export default function fetchPet({ params }) {
  const { pet_id } = params;
  const [pet, setPet] = useState(null);
  const [petHunger, setPetHunger] = useState(null);
  const [petHungerIsFull, setPetHungerIsFull] = useState(false);
  const [petEnergy, setPetEnergy] = useState(null);
  const [petEnergyIsFull, setPetEnergyIsFull] = useState(false);
  const [dailyHabitStatus, setDailyHabitStatus] = useState(false);

  useEffect(() => {
    getPet(pet_id, setPet);
  }, [petHunger, petEnergy, dailyHabitStatus]);

  const hungerHandler = () => {
    if (pet.hunger >= 100) return setPetHungerIsFull(true);
    const adjust = { hunger: pet.hunger + 10 };
    setPetHunger(pet.hunger + 10);
    patchPet(pet_id, adjust, setPetHunger, "hunger");
  };

  const energyHandler = () => {
    if (pet.energy >= 100) return setPetEnergyIsFull(true);
    const adjust = { energy: pet.energy + 10 };
    setPetEnergy(pet.energy + 10);
    patchPet(pet_id, adjust, setPetEnergy, "energy");
  };

  const dailyHabitHandler = () => {
    const adjust = { daily_habit_complete: !pet.daily_habit_complete };
    patchPet(pet_id, adjust, setDailyHabitStatus, "daily_habit_complete");
  };

  if (!pet) return <div>Loading...</div>;

  /* display error */

  return (
    <div>
      <h1>Pet ID: {pet.pet_id}</h1>
      <p>Pet Satiated: {petHunger ? petHunger : pet.hunger}</p>
      <p>Pet Energy: {petEnergy ? petEnergy : pet.energy}</p>
      <p>Daily Habit Complete? {pet.daily_habit_complete ? "yes" : "no"}</p>
      <br></br>
      <button onClick={hungerHandler}>Increase Hunger</button>
      {petHungerIsFull ? <p>I'm too full</p> : null}
      <br></br>
      <button onClick={energyHandler}>Increase Energy</button>
      {petEnergyIsFull ? <p>I'm too charged</p> : null}
      <br></br>
      <button onClick={dailyHabitHandler}>Toggle daily challange</button>
    </div>
  );
}

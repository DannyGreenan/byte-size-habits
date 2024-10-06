"use client";

import { useContext, useState, useEffect } from "react";
import { UserContext } from "../UserContext";
import { patchUser } from "../models/profile.model";
import { patchPet } from "../models/pet.model";

const HomePage = ({ setEnergy, setPet, setEmotion }) => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [hasCoded, setHasCoded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [seconds, setSeconds] = useState(1000);
  const [minutes, setMinutes] = useState(0);
  const [runTimer, setRunTimer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        setSeconds(59);
        if (minutes > 0) {
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    if (minutes === 0 && seconds === 0) {
      console.log("timer has finished");
      setHasCoded(true);
      patchUser(loggedInUser.user_id, {
        progress: loggedInUser.progress + loggedInUser.difficulty_time,
        currency: loggedInUser.currency + 20,
        streak: loggedInUser.streak + 1,
      }).then((user) => {
        const userStringified = JSON.stringify(loggedInUser);
        localStorage.setItem("user", userStringified);
        setLoggedInUser(user);
        patchPet(user.pet_id, { energy: 100 }).then((patchedPet) => {
          setEnergy(100);
          setPet(patchedPet);
        });
      });
    } else {
      setHasCoded(false);
    }
    return () => clearInterval(timer);
  }, [seconds, minutes, runTimer]);

  const haveYouCodedHandler = (event) => {
    setIsLoading(true);
    if (event.target.value === "yes") {
      setEmotion("joy");
      setHasCoded(true);
      const userUpdate = {
        progress: loggedInUser.progress + loggedInUser.difficulty_time,
        currency: loggedInUser.currency + 20,
        streak: loggedInUser.streak + 1,
        last_activity: Date.now(),
      };
      patchUser(loggedInUser.user_id, userUpdate).then((user) => {
        const userStringified = JSON.stringify(loggedInUser);
        localStorage.setItem("user", userStringified);
        setLoggedInUser(user);
        patchPet(user.pet_id, { energy: 100 }).then((patchedPet) => {
          setEnergy(100);
          setPet(patchedPet);

          setTimeout(() => {
            setIsLoading(false);
          }, 4000);
        });
      });
    } else {
      setHasCoded(false);
      setEmotion("sad");
    }
    setIsVisible(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  };

  const handleTimer = (event) => {
    if (event.target.value === "yes") {
      setEmotion("joy");
      setMinutes(loggedInUser.difficulty_time - 1);
      setSeconds(59);
      setRunTimer(true);
    } else {
      setEmotion("cry");
    }
  };

  return (
    <>
      <div className="chat chat-start flex items-center">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="/happy.png" />
          </div>
        </div>

        <div className="chat-bubble flex items-center">
          Did you code today?
          {!isVisible ? (
            <div className="flex ml-4">
              <button
                value="yes"
                onClick={haveYouCodedHandler}
                className="btn btn-primary mx-2">
                Yes
              </button>
              <button
                value="no"
                onClick={haveYouCodedHandler}
                className="btn btn-primary mx-2">
                No
              </button>
            </div>
          ) : null}
        </div>
      </div>

      {isVisible && !hasCoded ? (
        <>
          <div className="chat chat-start flex items-center">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="/happy.png"
                />
              </div>
            </div>
            <div className="chat-bubble flex items-center">
              {isLoading ? (
                <span className="loading loading-dots loading-xs"></span>
              ) : (
                <>
                  Would you like to study now and start a timer?
                  <div className="flex ml-4">
                    <button
                      value="yes"
                      onClick={handleTimer}
                      className="btn btn-primary mx-2">
                      Yes
                    </button>
                    <button
                      value="maybe-later"
                      onClick={handleTimer}
                      className="btn btn-primary mx-2">
                      Maybe later
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="chat chat-start flex items-center">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="/happy.png"
                />
              </div>
            </div>
            <div className="chat-bubble">
              {isLoading ? (
                <span className="loading loading-dots loading-xs"></span>
              ) : (
                <div>
                  <span>
                    {"I found some resources to help you study..." + "   "}
                  </span>

                  <a
                    className="link link-info"
                    href={`https://devdocs.io/${loggedInUser.goal.toLowerCase()}/`}>
                    {loggedInUser.goal + "  " + "Docs"}
                  </a>
                </div>
              )}
            </div>
          </div>
        </>
      ) : null}

      {isVisible && hasCoded ? (
        <div className="chat chat-start flex items-center">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src="/happy.png" />
            </div>
          </div>
          <div className="chat-bubble">
            Well done, go celebrate and eat cake!!
          </div>
        </div>
      ) : null}

      {isVisible && runTimer ? (
        <div className="m-5">
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": minutes }}></span>
              </span>
              min
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": seconds }}></span>
              </span>
              sec
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default HomePage;

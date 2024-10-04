"use client";

import { useContext, useState, useEffect } from "react";
import { UserContext } from "../UserContext";
import { patchUser } from "../models/profile.model";
import { patchPet } from "../models/pet.model";

const HomePage = () => {
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);
    const [hasCoded, setHasCoded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [seconds, setSeconds] = useState(1000);
    const [minutes, setMinutes] = useState(0);
    const [runTimer, setRunTimer] = useState(false);

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
  
      // 
      if(minutes === 0 && seconds === 0) {
          console.log("timer has finished");
            setHasCoded(true);
            patchUser(loggedInUser.user_id, {progress: loggedInUser.progress + loggedInUser.difficulty_time, currency: loggedInUser.currency + 20, streak: loggedInUser.streak + 1})
            .then((user)=> {
                setLoggedInUser(user);
                patchPet(user.pet_id, {energy: 100})
            })
      } else {
        setHasCoded(false);  
      }
      return () => clearInterval(timer);
    }, [seconds, minutes, runTimer]);

const haveYouCodedHandler = (event) => {
    if (event.target.value === 'yes') {
        setHasCoded(true);
        patchUser(loggedInUser.user_id, {progress: loggedInUser.progress + loggedInUser.difficulty_time, currency: loggedInUser.currency + 20, streak: loggedInUser.streak + 1})
        .then((user)=> {
            setLoggedInUser(user);
            patchPet(user.pet_id, {energy: 100})
        })
    } else {
        setHasCoded(false);
    }
    setIsVisible(true)
}

const handleTimer = (event) => {

  if (event.target.value === 'yes') {
    setMinutes(loggedInUser.difficulty_time - 1)
    setSeconds(59)
    setRunTimer(true)
  }
}
// console.log(loggedInUser)


  return (
    <>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="/happy.png" />
          </div>
        </div>

        <div className="chat-bubble chat-bubble-info">
            Did you code today?
        {!isVisible ? <>
        <button value='yes' onClick={haveYouCodedHandler} className="btn btn-primary mx-2">Yes</button>
        <button value='no' onClick={haveYouCodedHandler} className="btn btn-primary mx-2">No</button>
        </> : null}
        </div>
      </div>
      <div className='chat chat-start'>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="/happy.png" />
          </div>
        </div>

        {isVisible && !hasCoded ? <div className="chat-bubble chat-bubble-info">
          I found some resources to help you study...
        </div> : null
        }
      <div className='chat chat-start'>
{/*         <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="/happy.png" />
          </div>
        </div> */}


        {isVisible && !hasCoded ? 
        <div className="chat-bubble chat-bubble-info">
          Would you like to study now and start a timer?
          <button value='yes' onClick={handleTimer} className="btn btn-primary mx-2">Yes</button>
        <button value='maybe-later' onClick={handleTimer} className="btn btn-primary mx-2">Maybe later</button>
        </div> : null}
      </div>
      

         {isVisible && hasCoded ? <div className="chat-bubble chat-bubble-info">
          Well done, go celebrate and eat cake!!
        </div> : null}

        {isVisible && runTimer ? <div className="m-5">
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
          </div> : null}
      </div>
    </>
  );
};

export default HomePage;

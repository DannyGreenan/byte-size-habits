"use client";

import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { patchUser } from "../models/profile.model";

const HomePage = () => {
    const {loggedInUser} = useContext(UserContext);
    const [hasCoded, setHasCoded] = useState(false);
    const [hideChat, setHideChat] = useState(true);

const handleClick = (event) => {
    // console.log(event.target.value)
    if (event.target.value === 'yes') {
        setHasCoded(true);
        patchUser(loggedInUser.user_id, {total_progress: 0, todays_progress: 0, currency: loggedInUser.currency + 20, streak: loggedInUser.streak + 1, weekly_progress: 0})
    } else {
        setHasCoded(false);
        setHideChat(false);
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
        <div className="chat-bubble chat-bubble-info">Did you code today?
        <button value='yes' onClick={handleClick} className="btn btn-primary mx-2">Yes</button>
        <button value='no' onClick={handleClick} className="btn btn-primary mx-2">No</button>
        </div>
      </div>
      <div className='chat chat-start invisible'>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="/happy.png" />
          </div>
        </div>
        <div className="chat-bubble chat-bubble-info">
          Would you like to study now?<button value='yes' onClick={handleClick} className="btn btn-primary mx-2">Yes</button>
        <button value='maybe-later' onClick={handleClick} className="btn btn-primary mx-2">Maybe later</button>
        </div>
        <div className="chat-bubble chat-bubble-info">
          Would you like to start the timer?<button value='yes' onClick={handleClick} className="btn btn-primary mx-2">Yes</button>
        </div>
      </div>
    </>
  );
};

export default HomePage;

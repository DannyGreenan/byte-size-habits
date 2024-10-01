"use client";

import { fetchUser, patchUser } from "../profileAPI";
import { useState, useEffect } from "react";

const UserProfile = ({ params }) => {
  const [topic, setTopic] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const { user_id } = params;

  useEffect(() => {
    fetchUser(user_id, setCurrentUser, setTopic);
  }, []);

  const handleTopicChange = (e) => {
    setTopic(e.target.innerText);
  };

  const handleSubmit = () => {
    patchUser(user_id, { goal: topic });
  };

  return (
    <div>
      <div>
        <p id={currentUser.user_id}>{currentUser.username}</p>
        <details className="dropdown items-center">
          <summary className="btn m-1">{topic ? topic : "topic"}</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <a value="Typescript" onClick={handleTopicChange}>
                TypeScripts
              </a>
            </li>
            <li>
              <a value="Next.js" onClick={handleTopicChange}>
                Next.js
              </a>
            </li>
          </ul>
        </details>
      </div>
      <button className="btn" onClick={handleSubmit}>
        Save Changes
      </button>
    </div>
  );
};

export default UserProfile;

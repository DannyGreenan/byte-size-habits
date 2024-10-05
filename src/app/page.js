"use client";

import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { useRouter } from "next/navigation";
import CreateProfile from "./components/CreateProfile";
import { fetchUser } from "./models/profile.model";

export default function Login() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [create, setCreate] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const router = useRouter();

  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleCreateClick = () => {
    setCreate(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginError(false);
    fetchUser(input)
      .then((user) => {
        const userStringified = JSON.stringify(user);
        localStorage.setItem("user", userStringified);
        setLoggedInUser(user);
        router.push("/home");
      })
      .catch((error) => {
        setLoginError(true);
      });
  };

  return (
    <>
      {!create ? (
        <div
          className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-base-100 font-nunito font-extrabold"
          style={{
            backgroundImage: `url('/background.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full md:w-1/2 flex justify-center">
            <form
              onSubmit={handleSubmit}
              className="p-8 bg-base-200 rounded-lg shadow-lg space-y-6 w-full max-w-md h-full bg-opacity-80 backdrop-blur-lg"
            >
              <div
                className="w-full h-32 bg-no-repeat bg-center rounded-t-lg"
                style={{
                  backgroundImage: `url('/login.png')`,
                  backgroundSize: "cover",
                  height: "35vh",
                  borderRadius: "0.5rem",
                }}
              ></div>

              <div className="form-control w-full">
                <label htmlFor="enter_username" className="label">
                  <span
                    className={`label-text ${loginError ? "text-red-400" : ""}`}
                  >{`Username ${loginError ? "does not exist" : ""}`}</span>
                </label>
                <input
                  id="enter_username"
                  type="text"
                  onChange={handleInput}
                  className={`input input-bordered w-full ${
                    loginError ? "input-error" : ""
                  }`}
                />
              </div>

              <button
                type="submit"
                className="btn btn-outline btn-accent w-full"
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-outline btn-accent w-full"
                onClick={handleCreateClick}
              >
                Create Profile
              </button>
            </form>
          </div>
        </div>
      ) : null}
      {create ? <CreateProfile setCreate={setCreate} /> : null}
    </>
  );
}

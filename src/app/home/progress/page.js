"use client";

import { TiMessage, TiTickOutline } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import ChartComponent from "@/app/components/chart";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "@/app/context/UserContext";
import Image from "next/image";

const Progress = () => {
  const [chartColumns, setChartColumns] = useState([]);
  const [chartRows, setChartRows] = useState([]);
  const { loggedInUser } = useContext(UserContext);
  const gitCommits = loggedInUser.Github;
  const codeWarsChallenges = loggedInUser.Codewars;
  const streak = loggedInUser.streak;

  let userProgress = [];
  if (Object.keys(loggedInUser).length > 0)
    userProgress = loggedInUser.progress;
  const leetCodeChallenges = loggedInUser.Leetcode;
  let length = userProgress.length;

  const style = {
    backgroundImage: `url('/button-bg.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    height: "150px",
    width: "250px",
  };
  const textUtil =
    "absolute bottom-3 left-1/2 transform -translate-x-1/2 title-font font-medium font-bold text-xl text-black text-center z-10 leading-5";
  const imageUtil =
    "absolute top-2 left-1/2 transform -translate-x-1/2 object-cover z-10";
  const boxUtil = "border-2 border-byteDarkBlue px-10 py-5 rounded-2xl ";
  const flexUtil = "flex flex-row items-center justify-center relative ";
  function daysAndTimes(userProgress, length) {
    if (userProgress.length > 6) {
      length = 7;
    }
    const days = [];
    const times = [];
    for (let i = 0; i < length; i++) {
      const dateStr = userProgress[i].date.slice(0, 10);
      if (userProgress[i].time !== null) {
        days.push(dateStr);
        times.push(userProgress[i].time);
      }
    }
    const daysAndTimesObj = { days: days, times: times };
    return daysAndTimesObj;
  }

  useEffect(() => {
    if (Object.keys(loggedInUser).length === 0) return;
    const daysTimesObj = daysAndTimes(userProgress, length);
    setChartColumns(daysTimesObj.days);
    setChartRows(daysTimesObj.times);
  }, [loggedInUser]);

  const daysAndTimesObj = daysAndTimes(userProgress, length);
  const totalTimes = daysAndTimesObj.times.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue;
    },
    0
  );
  const totalDays = daysAndTimesObj.days.length;
  const averageTime = parseInt(totalTimes / totalDays);

  const myData = {
    labels: chartColumns,
    datasets: [
      {
        label: false,
        data: chartRows,
        borderColor: "#88A2F2",
        tension: 0.4,

        fillColor: "rgba(151,187,205,0.5)",
        strokeColor: "rgba(151,187,205,0.5)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
      },
    ],
  };

  const handleLastWeek = () => {
    if (loggedInUser.progress.length > 16) {
      length = 15;
    }
    const daysTimesObj = daysAndTimes(userProgress, length);

    setChartColumns(daysTimesObj.days);
    setChartRows(daysTimesObj.times);
  };
  const handleLastMonth = () => {
    if (loggedInUser.progress.length > 30) {
      length = 31;
    }
    const daysTimesObj = daysAndTimes(userProgress, length);
    setChartColumns(daysTimesObj.days);
    setChartRows(daysTimesObj.times);
  };
  const handleAllData = () => {
    const daysTimesObj = daysAndTimes(userProgress, userProgress.length);
    setChartColumns(daysTimesObj.days);
    setChartRows(daysTimesObj.times);
  };
  const handleThisWeek = () => {
    if (loggedInUser.progress.length > 8) {
      length = 8;
    }
    const daysTimesObj = daysAndTimes(userProgress, length);
    setChartColumns(daysTimesObj.days);
    setChartRows(daysTimesObj.times);
  };

  return (
    <section className="relative py-10">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="mockup-browser bg-base-100 border">
            <div className="mockup-browser-toolbar">
              <div className="input">Coding Stats</div>
            </div>

            <div className="container px-5 py-8 mx-auto bg-gray-100">
              <div className="grid sm:grid-rows-1 lg:grid-cols-2  grid-flow-row justify-center items-center mx-2 bg-gray-100 gap-y-5 gap-x-2">
                <div className="p-0 md:w-100 h-100 sm:w-50 w-auto h-auto">
                  <div className=" transform transition duration-500 hover:scale-110">
                    <div className={flexUtil}>
                      <div className={boxUtil} style={style}></div>
                      <Image
                        src="/github.png"
                        className={imageUtil}
                        alt="GitHub logo"
                        width={65}
                        height={65}
                      />
                      <p className={textUtil}>Git commits: {gitCommits}</p>
                    </div>
                  </div>
                </div>

                <div className=" transform transition duration-500 hover:scale-110">
                  <div className={flexUtil}>
                    <div className={boxUtil} style={style}></div>
                    <Image
                      src="/codewars.png"
                      className={imageUtil}
                      alt="Codewars logo"
                      width={65}
                      height={65}
                    />
                    <p className={textUtil}>
                      Codewars Challenges: {codeWarsChallenges}
                    </p>
                  </div>
                </div>

                <div className=" transform transition duration-500 hover:scale-110">
                  <div className={flexUtil}>
                    <div className={boxUtil} style={style}></div>
                    <Image
                      src="/leetcode.png"
                      className={imageUtil}
                      alt="Leetcode logo"
                      width={65}
                      height={65}
                    />
                    <p className={textUtil}>
                      LeetCode Challenges: {leetCodeChallenges}
                    </p>
                  </div>
                </div>

                <div className=" transform transition duration-500 hover:scale-110">
                  <div className={flexUtil}>
                    <div className={boxUtil} style={style}></div>
                    <Image
                      src="/squint.png"
                      className={imageUtil}
                      alt="VERY happy computer pet"
                      width={65}
                      height={65}
                    />
                    <p className={textUtil}>Streak: {streak}</p>
                  </div>
                </div>

                <div className=" transform transition duration-500 hover:scale-110">
                  <div className={flexUtil}>
                    <div className={boxUtil} style={style}></div>
                    <Image
                      src="/happy.png"
                      className={imageUtil}
                      alt="Happy computer pet"
                      width={65}
                      height={65}
                    />
                    <p className={textUtil}>Average time: {averageTime} mins</p>
                  </div>
                </div>

                <div className=" transform transition duration-500 hover:scale-110">
                  <div className={flexUtil}>
                    <div className={boxUtil} style={style}></div>
                    <Image
                      src="/joy.png"
                      className={imageUtil}
                      alt="Joyous computer pet"
                      width={65}
                      height={65}
                    />
                    <p className={textUtil}>Total time: {totalTimes} mins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mockup-browser bg-base-100 border">
            <div className="mockup-browser-toolbar">
              <div className="input">Progress Chart</div>
            </div>
            <div className="bg-gray-100 p-6 shadow-md py-14">
              <h2 className="text-xl font-bold mb-4">Progress Graph</h2>
              <div className="h-24.5 bg-gray-100 flex flex-col justify-center items-center ">
                <ChartComponent data={myData} />
                <div className="h-23 bg-gray-100 flex flex-row justify-center items-center">
                  <button
                    onClick={handleThisWeek}
                    className="btn btn-primary mx-2"
                  >
                    This Week
                  </button>
                  <button
                    onClick={handleLastWeek}
                    className="btn btn-primary mx-2"
                  >
                    Last Week
                  </button>
                  <button
                    onClick={handleLastMonth}
                    className="btn btn-primary mx-2"
                  >
                    Last Month
                  </button>
                  <button
                    onClick={handleAllData}
                    className="btn btn-primary mx-2"
                  >
                    All Progress
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 mockup-browser bg-base-100 border">
          <div className="mockup-browser-toolbar">
            <div className="input">Days in a Row Tracker</div>
          </div>
          <div className="bg-gray-100 p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4">Days in a Row Tracker</h2>
            <div className="grid grid-cols-7 gap-4 text-center">
              {userProgress.map((userData) => (
                <section key={userData.date}>
                  <div
                    className={`p-4 rounded-full flex flex-col items-center ${
                      userData.time
                        ? "bg-gradient-to-r from-success to-white text-success-content"
                        : "bg-gradient-to-r from-error to-white text-error-content"
                    }`}
                  >
                    <div className="text-2xl">
                      {userData.time ? <TiTickOutline /> : <ImCross />}
                    </div>
                    <div>{userData.date}</div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;

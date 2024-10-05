"use client";

import LineChart from "../../components/linechart";
import { TiTickOutline } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const Progress = () => {
  return (
    <section className="relative py-10">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="mockup-browser bg-base-100 border">
            <div className="mockup-browser-toolbar">
              <div className="input">https://daisyui.com</div>
            </div>
            <div className="bg-gray-100 p-6 shadow-md">
              <h2 className="text-xl font-bold mb-4">Stats</h2>
              <ul>
                <li>Total Progress: 80%</li>
                <li>Completed Goals: 15</li>
                <li>Ongoing Goals: 5</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 shadow-md">
              <h2 className="text-xl font-bold mb-4">Stats</h2>
              <ul>
                <li>Git Commits: 2</li>
                <li>Codewars Challenges: 6</li>
                <li>Streak: 9</li>
              </ul>
            </div>
          </div>

          <div className="mockup-browser bg-base-100 border">
            <div className="mockup-browser-toolbar">
              <div className="input">https://daisyui.com</div>
            </div>
            <div className="bg-gray-100 p-6 shadow-md">
              <h2 className="text-xl font-bold mb-4">Progress Graph</h2>
              <div className="h-26 bg-gray-100 flex justify-center items-center">
                <LineChart className="py-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 mockup-browser bg-base-100 border">
          <div className="mockup-browser-toolbar">
            <div className="input">https://daisyui.com</div>
          </div>
          <div className="bg-gray-100 p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4">Days in a Row Tracker</h2>
            <div className="grid grid-cols-7 gap-4 text-center">
              <div className="bg-gradient-to-r from-green-400 to-green-600 p-4 rounded-full text-white flex flex-col items-center">
                <div className="text-2xl">
                  <TiTickOutline />
                </div>
                <div>Mon</div>
              </div>
              <div className="bg-gradient-to-r from-green-400 to-green-600 p-4 rounded-full text-white flex flex-col items-center">
                <div className="text-2xl">
                  <TiTickOutline />
                </div>
                <div>Tue</div>
              </div>
              <div className="bg-gradient-to-r from-green-400 to-green-600 p-4 rounded-full text-white flex flex-col items-center">
                <div className="text-2xl">
                  <TiTickOutline />
                </div>
                <div>Wed</div>
              </div>
              <div className="bg-gradient-to-r from-green-400 to-green-600 p-4 rounded-full text-white flex flex-col items-center">
                <div className="text-2xl">
                  <TiTickOutline />
                </div>
                <div>Thu</div>
              </div>
              <div className="bg-gradient-to-r from-red-400 to-red-600 p-4 rounded-full text-white flex flex-col items-center">
                <div className="text-2xl">
                  <ImCross />
                </div>
                <div>Fri</div>
              </div>
              <div className="bg-gradient-to-r from-green-400 to-green-600 p-4 rounded-full text-white flex flex-col items-center">
                <div className="text-2xl">
                  <TiTickOutline />
                </div>
                <div>Sat</div>
              </div>
              <div className="bg-gradient-to-r from-green-400 to-green-600 p-4 rounded-full text-white flex flex-col items-center">
                <div className="text-2xl">
                  <TiTickOutline />
                </div>
                <div>Sun</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;

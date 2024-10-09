'use client';

import { TiMessage, TiTickOutline } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';
import ChartComponent from '@/app/components/chart';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '@/app/context/UserContext';
import Image from 'next/image';

const Progress = () => {
	const [chartColumns, setChartColumns] = useState([]);
	const [chartRows, setChartRows] = useState([]);
	const days = [];
	const times = [];
	const { loggedInUser } = useContext(UserContext);

	useEffect(() => {
		if (Object.keys(loggedInUser).length === 0) return;
		const userProgress = loggedInUser.progress;
		let length = 0;
		if (userProgress.length > 6) {
			length += 7;
		} else {
			length += userProgress.length;
		}
		for (let i = 0; i < length; i++) {
			const dateStr = userProgress[i].date.slice(0, 10);
			days.push(dateStr);
			times.push(userProgress[i].time);
		}
		setChartColumns(days);
		setChartRows(times);
	}, [loggedInUser]);

	const myData = {
		labels: chartColumns,
		datasets: [
			{
				label: false,
				data: chartRows,
				borderColor: '#88A2F2',
				tension: 0.4,

				fillColor: 'rgba(151,187,205,0.5)',
				strokeColor: 'rgba(151,187,205,0.5)',
				pointColor: 'rgba(151,187,205,1)',
				pointStrokeColor: '#fff',
				pointHighlightFill: '#fff',
				pointHighlightStroke: 'rgba(151,187,205,1)',
			},
		],
	};

	const newDays = [];
	const newTimes = [];
	const handleLastWeek = () => {
		let length = 0;
		if (loggedInUser.progress.length > 16) {
			length += 15;
		} else {
			length += loggedInUser.progress.length;
		}
		for (let i = 8; i < length; i++) {
			const dateStr = loggedInUser.progress[i].date.slice(0, 10);
			newDays.push(dateStr);
			newTimes.push(loggedInUser.progress[i].time);
		}
		setChartColumns(newDays);
		setChartRows(newTimes);
	};
	const handleLastMonth = () => {
		let length = 0;
		if (loggedInUser.progress.length > 30) {
			length += 31;
		} else {
			length += loggedInUser.progress.length;
		}
		for (let i = 0; i < loggedInUser.progress.length; i++) {
			const dateStr = loggedInUser.progress[i].date.slice(0, 10);
			newDays.push(dateStr);
			newTimes.push(loggedInUser.progress[i].time);
		}
		setChartColumns(newDays);
		setChartRows(newTimes);
	};
	const handleAllData = () => {
		for (let i = 0; i < loggedInUser.progress.length; i++) {
			const dateStr = loggedInUser.progress[i].date.slice(0, 10);
			newDays.push(dateStr);
			newTimes.push(loggedInUser.progress[i].time);
		}
		setChartColumns(newDays);
		setChartRows(newTimes);
	};
	const handleThisWeek = () => {
		let length = 0;
		if (loggedInUser.progress.length > 8) {
			length += 8;
		} else {
			length += loggedInUser.progress.length;
		}
		for (let i = 0; i < length; i++) {
			const dateStr = loggedInUser.progress[i].date.slice(0, 10);
			newDays.push(dateStr);
			newTimes.push(loggedInUser.progress[i].time);
		}
		setChartColumns(newDays);
		setChartRows(newTimes);
	};
	return (
		<section className='relative py-10'>
			<div className='container mx-auto p-4'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
					<div className='mockup-browser bg-base-100 border'>
						<div className='mockup-browser-toolbar'>
							<div className='input'>https://daisyui.com</div>
						</div>
						{/* working in this one b? */}

						<div className='container px-5 py-24 mx-auto bg-gray-100'>
							<div className='grid grid-cols-3 grid-flow-row justify-center items-center mx-auto  bg-gray-100 flex-auto'>
								<div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
									<div>
										<div
											className=' border-4 border-indigo-950 px-20 py-6 rounded-2xl transform transition duration-500 hover:scale-110 '
											style={{
												backgroundImage: `url('/plain-screen.png')`,
												backgroundSize: 'cover',
												backgroundPosition: 'center',
												backgroundRepeat: 'no-repeat',
											}}
										></div>
										<Image
											src={'/github.png'}
											className='object-cover shadow-lg black p-30 z-10'
											alt='GitHub logo '
											width={20}
											height={20}
										/>
										<p className='title-font font-medium text-3xl text-white flex text-center items-center justify-center'>
											Downloads
										</p>
									</div>
								</div>
								<div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
									<div className="border-4 border-indigo-950 px-20 py-6 rounded-2xl transform transition duration-500 hover:scale-110 bg-[url('/plain-screen.png')] bg-cover">
										<p className='title-font font-medium text-3xl text-white flex text-center items-center justify-center'>
											Users
										</p>
									</div>
								</div>
								<div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
									<div className="border-4 border-indigo-950 px-20 py-6  rounded-2xl transform transition duration-500 hover:scale-110 bg-[url('/plain-screen.png')] bg-cover">
										<p className='title-font font-medium text-3xl text-white flex text-center items-center justify-center'>
											Files
										</p>
									</div>
								</div>
								<div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
									<div className="border-4 border-indigo-950 px-20 py-6  rounded-2xl transform transition duration-500 hover:scale-110 bg-[url('/plain-screen.png')] bg-cover">
										<p className='title-font font-medium text-3xl text-white flex text-center items-center justify-center'>
											Places
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* <div className="bg-gray-100 p-6 shadow-md">
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
            </div> */}
					</div>

					<div className='mockup-browser bg-base-100 border'>
						<div className='mockup-browser-toolbar'>
							<div className='input'>Progress Chart</div>
						</div>
						<div className='bg-gray-100 p-6 shadow-md'>
							<h2 className='text-xl font-bold mb-4'>Progress Graph</h2>
							<div className='h-24.5 bg-gray-100 flex flex-col justify-center items-center '>
								<ChartComponent data={myData} />
								<div className='h-23 bg-gray-100 flex flex-row justify-center items-center'>
									<button
										onClick={handleThisWeek}
										className='btn btn-primary mx-2'
									>
										This Week
									</button>
									<button
										onClick={handleLastWeek}
										className='btn btn-primary mx-2'
									>
										Last Week
									</button>
									<button
										onClick={handleLastMonth}
										className='btn btn-primary mx-2'
									>
										Last Month
									</button>
									<button
										onClick={handleAllData}
										className='btn btn-primary mx-2'
									>
										All Progress
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='mt-8 mockup-browser bg-base-100 border'>
					<div className='mockup-browser-toolbar'>
						<div className='input'>https://daisyui.com</div>
					</div>
					<div className='bg-gray-100 p-6 shadow-md'>
						<h2 className='text-xl font-bold mb-4'>Days in a Row Tracker</h2>
						<div className='grid grid-cols-7 gap-4 text-center'>
							<div className='bg-gradient-to-r from-green-400 to-green-600 p-4 rounded-full text-white flex flex-col items-center'>
								<div className='text-2xl'>
									<TiTickOutline />
								</div>
								<div>Mon</div>
							</div>
							<div className='bg-gradient-to-r from-green-400 to-green-600 p-4 rounded-full text-white flex flex-col items-center'>
								<div className='text-2xl'>
									<TiTickOutline />
								</div>
								<div>Tue</div>
							</div>
							<div className='bg-gradient-to-r from-green-400 to-green-600 p-4 rounded-full text-white flex flex-col items-center'>
								<div className='text-2xl'>
									<TiTickOutline />
								</div>
								<div>Wed</div>
							</div>
							<div className='bg-gradient-to-r from-green-400 to-green-600 p-4 rounded-full text-white flex flex-col items-center'>
								<div className='text-2xl'>
									<TiTickOutline />
								</div>
								<div>Thu</div>
							</div>
							<div className='bg-gradient-to-r from-red-400 to-red-600 p-4 rounded-full text-white flex flex-col items-center'>
								<div className='text-2xl'>
									<ImCross />
								</div>
								<div>Fri</div>
							</div>
							<div className='bg-gradient-to-r from-green-400 to-green-600 p-4 rounded-full text-white flex flex-col items-center'>
								<div className='text-2xl'>
									<TiTickOutline />
								</div>
								<div>Sat</div>
							</div>
							<div className='bg-gradient-to-r from-green-400 to-green-600 p-4 rounded-full text-white flex flex-col items-center'>
								<div className='text-2xl'>
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

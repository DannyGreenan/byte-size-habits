'use client';

import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { EnergyContext } from '../context/EnergyContext.js';
import { patchUser } from '../models/profile.model';
import { patchPet } from '../models/pet.model';
import { FaUserGraduate } from "react-icons/fa";

const HomePage = ({ setEmotion }) => {
	const { loggedInUser, setLoggedInUser } = useContext(UserContext);
	const { energy, setEnergy } = useContext(EnergyContext);
	const [hasCoded, setHasCoded] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [taskComplete, setTaskComplete] = useState(false);
	const [seconds, setSeconds] = useState(1000);
	const [minutes, setMinutes] = useState(0);
	const [runTimer, setRunTimer] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [codeTodayQuestion, setCodeTodayQuestion] = useState("");
	const [timerQuestion, setTimerQuestion] = useState("");
	const [isLoadingQuestion, setIsLoadingQuestion] = useState(false);
	const [showTimerQuestion, setShowTimerQuestion] = useState(false);

	const getCurrencyAmount = (difficultyTime, timerOn = false) => {
		return timerOn ? difficultyTime : difficultyTime - 10;
	};

	useEffect(() => {
		if (!runTimer) return;
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
			setHasCoded(true);
			setIsVisible(false);
			setTaskComplete(true);
			setRunTimer(false);

			const newDate = new Date();
			const dateSrt = newDate.toISOString();
			const progressDate = dateSrt.slice(0, 10);

			const totalProgress = loggedInUser.progress;
			let progressUpdate = {};
			const todaysIndex = totalProgress.findIndex(item => item.date === progressDate)
			
			if (todaysIndex !== -1) totalProgress[todaysIndex].time += loggedInUser.difficulty 
			else {
				progressUpdate = {
					date: progressDate,
					time: loggedInUser.difficulty,
				};
				totalProgress.push(progressUpdate);
			}
			
			// streak count here ---------------------------------------------------------------
			let streak = 0
			totalProgress.reverse().forEach((dateKey, index) => {
			  if (new Date(progressDate) - new Date(dateKey.date) === index * 86400000) streak++
			})

			console.log("------------->",totalProgress.reverse());
			const userUpdate = {
				progress: totalProgress.reverse(),
				currency:
				loggedInUser.currency + getCurrencyAmount(loggedInUser.difficulty),
				streak: streak,
				last_activity: Date.now(),
			};
			
			patchUser(loggedInUser.user_id, userUpdate).then((user) => {
				const userStringified = JSON.stringify(user);
				localStorage.setItem('user', userStringified);
				setLoggedInUser(user);
				patchPet(user.pet_id, { energy: 100 }).then((patchedPet) => {
					setEnergy(100);
				});
			});
		}
		return () => clearInterval(timer);
	}, [seconds, minutes, runTimer]);

	useEffect(() => {
		if (energy === 0) setEmotion('dead');
		if (energy > 0 && energy <= 20) setEmotion('angry');
		if (energy > 20 && energy <= 40) setEmotion('worry');
		if (energy > 40 && energy <= 60) setEmotion('peaceful');
		if (energy > 60 && energy <= 80) setEmotion('joy');
		if (energy > 80 && energy <= 100) setEmotion('squint');
	}, [energy]);
	
	const haveYouCodedHandler = (event) => {
		setIsLoading(true);
		if (event.target.value === 'yes') {
			setCodeTodayQuestion(`Yes I have done ${loggedInUser.difficulty} minutes of studying ${loggedInUser.goal} already today.`)
			setEmotion('joy');
			setHasCoded(true);
			setTaskComplete(true);
			
			const newDate = new Date();
			const dateSrt = newDate.toISOString();
			const progressDate = dateSrt.slice(0, 10);

			const totalProgress = loggedInUser.progress;
			let progressUpdate = {};
			const todaysIndex = totalProgress.findIndex(item => item.date === progressDate)
			
			if (todaysIndex !== -1) totalProgress[todaysIndex].time += loggedInUser.difficulty 
			else {
				progressUpdate = {
					date: progressDate,
					time: loggedInUser.difficulty,
				};
				totalProgress.push(progressUpdate);
			}

				let streak = 0
				totalProgress.reverse().forEach((dateKey, index) => {
					// 24h * 60m * 60s * 1000ms  === 86400000ms
				 	if (new Date(progressDate) - new Date(dateKey.date) === index * 86400000) streak++
				})
			
			const userUpdate = {
				progress: totalProgress.reverse(),
				currency:
				loggedInUser.currency + getCurrencyAmount(loggedInUser.difficulty),
				streak: streak,
				last_activity: Date.now(),
			};
			
			patchUser(loggedInUser.user_id, userUpdate).then((user) => {
				const userStringified = JSON.stringify(user);
				localStorage.setItem('user', userStringified);
				setLoggedInUser(user);
				patchPet(user.pet_id, { energy: 100 }).then((patchedPet) => {
					setEnergy(100);
				});
			});
		} else {
			setCodeTodayQuestion("No, I haven't had time yet.")
			setHasCoded(false);
			setEmotion('sad');
		}
		setIsVisible(true);
		setTimeout(() => {
			setIsLoading(false);
			setIsLoadingQuestion(true);
			setShowTimerQuestion(true);
		}, 3000);

		setTimeout(() => {
			setIsLoadingQuestion(false);
		}, 6000);
	};

	const handleTimer = (event) => {
		if (event.target.value === 'yes') {
			setTimerQuestion(`Yes, I am ready to study ${loggedInUser.goal}`)
			setEmotion('love');
			setMinutes(loggedInUser.difficulty - 1);
			setSeconds(59);
			setRunTimer(true);
		} else {
			setEmotion('cry');
			setTimerQuestion(`Maybe later, I can't possible spare ${loggedInUser.difficulty} minutes.`)
		}
	};

	return (
		<>
			{!taskComplete ? (
				<div className='chat chat-start flex items-center self-start'>
					<div className='chat-image avatar'>
						<div className='w-10 rounded-full'>
							<img alt='Tailwind CSS chat bubble component' src='/happy.png' />
						</div>
					</div>

					<div className='chat-bubble flex items-center'>
						Did you code today?
						{!isVisible ? (
							<div className='flex ml-4'>
								<button
									value='yes'
									onClick={haveYouCodedHandler}
									className='btn btn-primary mx-2'
								>
									Yes
								</button>
								<button
									value='no'
									onClick={haveYouCodedHandler}
									className='btn btn-primary mx-2'
								>
									No
								</button>
							</div>
						) : null}
					</div>
				</div>
			) : (
				<div className='chat chat-start flex items-center self-start'>
					<div className='chat-image avatar'>
						<div className='w-10 rounded-full'>
							<img alt='Tailwind CSS chat bubble component' src='/happy.png' />
						</div>
					</div>

					<div className='chat-bubble flex items-center'>
						You already coded today!! :D
					</div>
				</div>
			)}

			{codeTodayQuestion ? <div className='chat chat-end flex items-center self-end'>
					<div className='chat-bubble flex items-center chat-bubble-primary btn-primary-content'>
						{codeTodayQuestion}
					</div>
					<div className='chat-image avatar'>
						<div className='w-10'>
						<FaUserGraduate size={30} color='black' />
						</div>
					</div>
				</div> : null}

			{taskComplete ? (
				<div className='chat chat-start flex items-center self-start'>
					<div className='chat-image avatar'>
						<div className='w-10 rounded-full'>
							<img alt='Tailwind CSS chat bubble component' src='/happy.png' />
						</div>
					</div>
					<div className='chat-bubble'>
						Well done, go celebrate and eat cake!!
					</div>
				</div>
			) : null}

			{isVisible && !hasCoded ? (
				<>
					<div className='chat chat-start flex items-center self-start'>
						<div className='chat-image avatar'>
							<div className='w-10 rounded-full'>
								<img
									alt='Tailwind CSS chat bubble component'
									src='/happy.png'
								/>
							</div>
						</div>
						<div className='chat-bubble'>
							{isLoading ? (
								<span className='loading loading-dots loading-xs'></span>
							) : (
								<div>
									<span>
										{'I found some resources to help you study...' + '   '}
									</span>

									<a
										className='link link-info'
										href={Object.keys(loggedInUser).length > 0 ?`https://devdocs.io/${loggedInUser.goal.toLowerCase()}/` : 0}
									>
										{loggedInUser.goal + '  ' + 'Docs'}
									</a>
								</div>
							)}
						</div>
					</div>
				</>
			) : null}

			{showTimerQuestion ? (
				<div className='chat chat-start flex items-center self-start'>
					<div className='chat-image avatar'>
						<div className='w-10 rounded-full'>
							<img alt='Tailwind CSS chat bubble component' src='/happy.png' />
						</div>
					</div>
					<div className='chat-bubble flex items-center'>
						{isLoadingQuestion ? (
							<span className='loading loading-dots loading-xs'></span>
						) : (
							<>
								Would you like to study now and start a timer?
								{runTimer ? null : (
									<div className='flex ml-4'>
										<button
											value='yes'
											onClick={handleTimer}
											className='btn btn-primary mx-2'
										>
											Yes
										</button>
										<button
											value='maybe-later'
											onClick={handleTimer}
											className='btn btn-primary mx-2'
										>
											Maybe later
										</button>
									</div>
								)}
							</>
						)}
					</div>
				</div>
			) : null}

			{timerQuestion ? <div className='chat chat-end flex items-center self-end'>
					<div className='chat-bubble flex items-center chat-bubble-primary btn-primary-content'>
						{timerQuestion}
					</div>
					<div className='chat-image avatar'>
						<div className='w-10'>
						<FaUserGraduate size={30} color='black' />
						</div>
					</div>
				</div> : null}

			{isVisible && runTimer ? (
				<div className='m-5'>
					<div className='grid grid-flow-col gap-5 text-center auto-cols-max'>
						<div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
							<span className='countdown font-mono text-5xl'>
								<span style={{ '--value': minutes }}></span>
							</span>
							min
						</div>
						<div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
							<span className='countdown font-mono text-5xl'>
								<span style={{ '--value': seconds }}></span>
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

'use client';

import { useContext } from 'react';
import { UserContext } from '../UserContext';
import CoinBalance from './CoinBalance';
import InstructionsPopup from './InstructionsPopup';
import { PiNotebook } from "react-icons/pi";

const HeroBar = () => {
	const { loggedInUser } = useContext(UserContext);

	return (
		<div className='bg-base-100 border w-full max-w-4xl mx-auto m-10 rounded-2xl'>
			<div className='flex justify-center'>
				<section className='hero pt-5'>
					<div className='relative w-full'>
						<div
							className='bg-cover bg-center'
							style={{
								backgroundImage: "url('/banner.png')",
								height: '322px',
							}}
						></div>

						<div className='absolute top-5 left-0 right-0 flex justify-between px-4 py-2'>
							<div
								className='flex items-center space-x-2 text-gray-800 bg-byteDarkBlue px-4 py-1 my-2 rounded-md shadow-2xl border-2 border-byteDarkBlue'
								style={{
									backgroundImage: "url('/button-bg.png')",
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									height: '80px',
									width: 'auto',
								}}
							>
								<img
									src='/happy.png'
									alt='Small Character'
									className='w-16 h-16 rounded-full border-2 border-white shadow-lg'
								/>
								<span className='text-lg font-bold'>
									{loggedInUser.username}
								</span>
							</div>

							<div
								className='flex items-center space-x-2 text-gray-800 bg-byteDarkBlue px-4 py-1 my-2 rounded-md shadow-2xl border-2 border-byteDarkBlue'
								style={{
									backgroundImage: "url('/button-bg.png')",
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									height: '80px',
									width: 'auto',
								}}
							>
								<span className='text-lg font-bold'>
									<CoinBalance />
								</span>
								<img
									src='/coins.png'
									alt='Small Character'
									className='w-16 h-16 rounded-full border-2 border-white shadow-lg'
								/>
							</div>
						</div>
					</div>
				</section>
			</div>

			<div className="drawer">
								<input id="my-drawer" type="checkbox" className="drawer-toggle" />
								<div className="drawer-content m-auto">
									{/* Page content here */}
									<label htmlFor="my-drawer" className="btn btn-info btn-outline drawer-button font-nunito font-extrabold m-1">
										<PiNotebook 
											size={26}
										/>Tutorials</label>
								</div>
								<div className="drawer-side">
									<label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
									<ul className="menu bg-base-200 text-base-content min-h-1/2 w-80 mt-16">
									{/* Sidebar content here */}
									<li><a><InstructionsPopup
                      modalInstruction="Byte Size Habits is here to help you learn to code!

						Whether you're just starting out or have previous coding experience Byte Size Habits allows you to set personal learning goals and improve your programming skills. 

						To set your goal, simply select your preferred programming language and your virtual pet will offer you helpful resources on your chosen topic.

						You can edit your goal anytime on your profile page. Mastered Javascript? Why not give Typescript a try?
						"
											title="Coding Goal"
                    /></a></li>
									<li><a>                    <InstructionsPopup
                      modalInstruction="The difficulty setting corresponds to the time you allocate per day to your learning goal. 

						Select Easy (30 minutes per day), Medium (45 minutes per day) or Hard (60 minutes per day).

						When you’re ready to study simply go to the home page and your virtual pet will set a timer for you. You can also study in your own time but be sure to let your pet know you’ve completed your daily goal.  
						"
                      title="Difficulty"
                    /></a></li>
					                <li>
                  <a>
                    <InstructionsPopup
                      modalInstruction="Your pet wants to see you succeed at your learning goal and depends on you to keep it fully charged and happy! 

Your pet’s energy will decrease over time and the only way to restore its energy in full is to complete your daily goal. 

Don’t let your pet’s energy drop below 1%! You may not like what you see…"
                      title="Energy"
                    />
                  </a>
                </li>
				<li>
                  <a>
                    <InstructionsPopup
                      modalInstruction="Everyday you complete your learning goal you are awarded coins. 

When you have accumulated enough coins you can treat your pet to a gift from the shop. 

Hint: Your pet LOVES to help you study, if you opt to use the timer feature you will be awarded bonus coins.
"
                      title="Coins"
                    />
                  </a>
                </li>
									</ul>
								</div>
							</div>

		</div>
	);
};

export default HeroBar;

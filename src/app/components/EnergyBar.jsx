import React, { useContext } from 'react';
import { EnergyContext } from '../context/EnergyContext.js';

export default function EnergyBar({}) {
	const { energy } = useContext(EnergyContext);

	return (
		<>
			<div className='flex justify-between'>
				<h3>Energy:</h3>
				<span>{energy}%</span>
			</div>
			<div className='flex items-center justify-center'>
				<div>
					{energy === null ? (
						<span>Loading</span>
					) : (
						<progress
							className={`progress ${energy < 25 ? 'progress-error' : ''} ${
								energy > 25 && energy < 60
									? 'progress-warning'
									: 'progress-success'
							} w-56 h-6`}
							value={energy}
							max='100'
						></progress>
					)}
				</div>
			</div>
			{energy === 0 ? (
				<p className='label-text font-extrabold text-red-600'>
					Please charge me... I'm out of juice!!
				</p>
			) : null}
		</>
	);
}

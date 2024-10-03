import { useEffect, useState } from 'react';
import Modal from 'react-modal';

const InstructionsPopup = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			Modal.setAppElement('body'); // We need this for acessibility compliance by preventing the rest of the app from being accessible to screen readers while the modal is open
		}
	}, []);

	const openModal = () => {
		setIsOpen(true);
		console.log('Modal state:', isOpen);
	};

	const closeModal = () => setIsOpen(false);

	return (
		<div>
			<button onClick={openModal}>Show Instruction</button>
			<Modal
				isOpen={isOpen}
				onRequestClose={closeModal}
				contentLabel='Instruction Popup'
				className='bg-white p-5 max-w-lg mx-auto rounded-lg z-50'
				overlayClassName='fixed inset-0 bg-black bg-opacity-75 z-50'
			>
				<h2>Instructions</h2>
				<p>Here are some important instruction for the user...</p>
				<button onClick={closeModal}>Press to Close</button>
			</Modal>
		</div>
	);
};

export default InstructionsPopup;

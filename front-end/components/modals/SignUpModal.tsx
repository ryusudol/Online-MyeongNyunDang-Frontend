import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import SignUpForm from './SignUpForm';

interface PropsType {
	show: boolean;
	onClose: () => void;
}

const SignUpModal = ({ show, onClose }: PropsType): JSX.Element | null => {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	const handleCloseClick = () => {
		onClose();
	};

	const modalContent = show ? (
		<div className="fixed top-0 left-0 flex items-center justify-center w-full h-full">
			<div className="z-[2] bg-white w-[450px] h-[570px] rounded-[15px] py-10 px-[60px]">
				<div className="flex justify-end text-3xl cursor-pointer">
					<div onClick={handleCloseClick}>X</div>
				</div>

				<div>
					<h1 className="m-0 text-2xl font-bold">회원가입</h1>
					<SignUpForm onClose={onClose} />
				</div>
			</div>
			<div
				className="fixed top-0 left-0 w-full h-full bg-black/[0.5]"
				onClick={handleCloseClick}
			/>
		</div>
	) : null;

	if (isBrowser) {
		const portalDiv = document.getElementById('modal-root') as HTMLElement;
		return ReactDOM.createPortal(modalContent, portalDiv);
	} else {
		return null;
	}
};

export default SignUpModal;

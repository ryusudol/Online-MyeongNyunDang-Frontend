import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import LogInForm from './LoginForm';

interface PropsType {
	show: boolean;
	onClose: () => void;
	onOpenSignUp: () => void;
}

const LoginModal = ({
	show,
	onClose,
	onOpenSignUp,
}: PropsType): JSX.Element | null => {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	const modalContent = show ? (
		<div className="fixed top-0 left-0 flex items-center justify-center w-full h-full">
			<div className="z-[2] bg-white w-[450px] h-[450px] rounded-[15px] py-10 px-[60px]">
				<div className="flex justify-end text-3xl cursor-pointer">
					<div onClick={onClose}>X</div>
				</div>

				<div>
					<h1 className="m-0 text-2xl font-bold">로그인</h1>
					<LogInForm onClose={onClose} onOpenSignUp={onOpenSignUp} />
				</div>
			</div>
			<div
				className="fixed top-0 left-0 w-full h-full bg-black/[0.5]"
				onClick={onClose}
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

export default LoginModal;

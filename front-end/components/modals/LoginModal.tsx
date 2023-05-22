import React, { ReactPortal, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import LogInForm from './LoginForm';

interface LogInModalProps {
	show: boolean;
	onClose: () => void;
	children?: React.ReactNode;
	onOpenSignUp: () => void;
}

function LoginModal({
	show,
	onClose,
	onOpenSignUp,
	children,
}: LogInModalProps): null | ReactPortal {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	const handleCloseClick = (e: any) => {
		e.preventDefault();
		onClose();
	};

	const modalContent = show ? (
		<div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
			<div className="z-[2] bg-white w-[450px] h-[450px] rounded-[15px] py-10 px-[60px]">
				<div className="flex justify-end text-3xl cursor-pointer">
					<div onClick={handleCloseClick}>X</div>
				</div>

				<div>
					<h1 className="m-0">로그인</h1>
					<LogInForm onClose={onClose} onOpenSignUp={onOpenSignUp} />
				</div>
			</div>
			<div
				className="fixed top-0 left-0 w-full h-full bg-black/[0.5]"
				onClick={handleCloseClick}
			/>
		</div>
	) : null;

	if (isBrowser) {
		const portalDiv = document.getElementById('modal-root')!;
		return ReactDOM.createPortal(modalContent, portalDiv);
	} else {
		return null;
	}
}

export default LoginModal;

//header의 로그인, 회원가입을 사용할 수 있는 커스텀 훅
import React, { useCallback, useState } from 'react';
import LoginModal from '@components/modals/LoginModal';
import SignUpModal from '@components/modals/SignUpModal';

type returnType = {
	showModal: boolean;
	onOpenLoginModal: () => void;
	onOpenSignUp: () => void;
	renderModal: () => JSX.Element;
};

export const useModal = (): returnType => {
	const [showLogInModal, setShowLogInModal] = useState(false);
	const [showSignUpModal, setShowSignUpModal] = useState(false);

	const onCloseLoginModal = () => {
		setShowLogInModal(false);
	};

	const onCloseSignUpModal = () => {
		setShowSignUpModal(false);
	};

	const onOpenSignUp = useCallback(() => {
		if (showLogInModal) setShowLogInModal(false);
		setShowSignUpModal(true);
	}, [showLogInModal]);

	const onOpenLoginModal = () => {
		if (showSignUpModal) setShowSignUpModal(false);
		setShowLogInModal(true);
	};

	const showModal = showLogInModal || showSignUpModal;

	const renderModal = useCallback(() => {
		return (
			<>
				<LoginModal
					show={showLogInModal}
					onClose={onCloseLoginModal}
					onOpenSignUp={onOpenSignUp}
				/>
				<SignUpModal onClose={onCloseSignUpModal} show={showSignUpModal} />
			</>
		);
	}, [showLogInModal, showSignUpModal, onOpenSignUp]);

	return { showModal, onOpenLoginModal, onOpenSignUp, renderModal };
};

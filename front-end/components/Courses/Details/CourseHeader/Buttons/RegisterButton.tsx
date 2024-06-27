import React from 'react';

import WithdrawalButton from './WithdrawalButton';
import { ICourseDetail } from 'types/Course';
import EnrollButton from './EnrollButton';

type PropsType = {
	courseId: number;
	courseDetail: ICourseDetail;
	onOpenLoginModal: () => void;
};

const RegisterButton = ({
	courseId,
	courseDetail,
	onOpenLoginModal,
}: PropsType): JSX.Element => {
	const { has_enrolled: isEnrolled, is_logged_in: isLoggedIn } = courseDetail;

	return (
		<div className="flex justify-between w-full">
			<EnrollButton
				courseId={courseId}
				isLoggedIn={isLoggedIn}
				isEnrolled={isEnrolled}
				onOpenLoginModal={onOpenLoginModal}
			/>
			{isEnrolled && <WithdrawalButton courseId={courseId} />}
		</div>
	);
};

export default RegisterButton;

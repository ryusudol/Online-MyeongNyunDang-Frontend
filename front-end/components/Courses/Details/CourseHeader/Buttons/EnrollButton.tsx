import React from 'react';
import { useRouter } from 'next/router';

import { useCourseEnrollmentUpdate } from 'query/hooks/QnA/index';
import { HTTP_STATUS_CODE } from 'constants/http';

type PropsType = {
	courseId: number;
	isLoggedIn: boolean;
	isEnrolled: boolean;
	onOpenLoginModal: () => void;
};

const EnrollButton = ({
	courseId,
	isLoggedIn,
	isEnrolled,
	onOpenLoginModal,
}: PropsType): JSX.Element => {
	const router = useRouter();
	const mutation = useCourseEnrollmentUpdate();

	const handleEnrollBtnClick = async (isLoggedIn: boolean) => {
		if (!isLoggedIn) {
			onOpenLoginModal();
			return;
		}

		mutation.mutate(courseId, {
			onSuccess: (data) => {
				if (data.statusCode === HTTP_STATUS_CODE.CREATED) {
					router.reload();
				} else {
					alert(
						'알수없는 오류로 강의 신청에 실패 했습니다. 다시 시도해주세요.',
					);
				}
			},
			onError: () => {
				alert('오류로 인해 신청에 실패했습니다. 다시 시도해주세요.');
			},
		});
	};

	const enrolledStyle = (isEnrolled: boolean) => {
		const enrolledStyle = isEnrolled
			? 'opacity-[0.6] select-none'
			: 'opacity-[1.0] cursor-pointer';

		return (
			'transition-all bg-[#7dad47] hover:bg-[#8dbd58] text-xl border-0 rounded w-[150px] h-10 ' +
			enrolledStyle
		);
	};

	return (
		<button
			className={`${enrolledStyle(isEnrolled)}`}
			onClick={() => handleEnrollBtnClick(isLoggedIn)}
			disabled={isEnrolled}
		>
			{isEnrolled ? '수강 중' : '수강 신청'}
		</button>
	);
};

export default EnrollButton;

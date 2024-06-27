import React, { SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { selectIsLoggined } from 'store/feature/common/commonSelector';
import { userLoginAuthState } from 'constants/commonState';
import { defaultErrorImage } from 'constants/index';
import { ICourseInfo } from 'types/Course/index';
import Image from 'next/image';

const CourseCard = ({ course }: { course: ICourseInfo }): JSX.Element => {
	const router = useRouter();
	const isLoggedIn = useSelector(selectIsLoggined);

	const handleImgError = (e: SyntheticEvent<HTMLImageElement>) => {
		(e.target as HTMLImageElement).src = defaultErrorImage;
	};

	const onCardClick = () => {
		if (isLoggedIn === userLoginAuthState.LOGGINED)
			router.push(`/courses/${course.id}`);
		else router.push('/login');
	};

	return (
		<div onClick={onCardClick}>
			<div className="relative overflow-hidden rounded-md transition hover:scale-[1.02] cursor-pointer bg-[var(--color-Surface)]">
				<Image
					width={'300'}
					height={'180'}
					src={course.thumbnail}
					onError={handleImgError}
					alt="course thumbnail"
					layout="responsive"
				/>
				<div className="flex flex-col justify-around h-32 px-4 pt-3 pb-3">
					<div className="text-base font-semibold leading-5">
						{course.title}
					</div>
					<div className="my-3 text-sm font-semibold">{course.summary}</div>
					<div className="text-sm font-semibold">{course.instructor}</div>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
// Todo: course.instructor에 정보가 없음

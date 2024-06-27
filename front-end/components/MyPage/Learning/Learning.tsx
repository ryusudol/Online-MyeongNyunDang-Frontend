import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { useCurrentLeaningCourseListFetch } from 'query/hooks/MyPage';
import NoContent from '@components/NoContent';
import LearningCard from './LearningCard';

interface ILectureStatusCount {
	finishedLectureCount: number;
	maxLectureCount: number;
}

const Learning = (): JSX.Element => {
	const [learningLectureCount, setLearningLectureCount] =
		useState<ILectureStatusCount[]>();

	const result = useCurrentLeaningCourseListFetch();
	const [currentLearningCourseList, finishedLectureList, lectureCountList] = [
		result[1].data,
		result[2].data,
		result[3].data,
	];
	const isLoading = result.some((elem) => elem.isLoading);

	const showLectureProgressStatus = ({
		finishedLectureCount,
		maxLectureCount,
	}: {
		finishedLectureCount: number;
		maxLectureCount: number;
	}) => {
		if (!maxLectureCount) return;

		let percentage = ~~((finishedLectureCount / maxLectureCount) * 100);
		if (!finishedLectureCount) percentage = 0;

		return `${finishedLectureCount}개 / ${maxLectureCount}개 (${percentage}%)`;
	};

	useEffect(() => {
		if (isLoading) return;

		const learningLectureCount = currentLearningCourseList?.reduce(
			(prev: ILectureStatusCount[], cur) => {
				const id = cur.course.id;

				const maxLectureCount = +(
					lectureCountList?.find((value) => id === value.courseId)
						?.lectures_count ?? 0
				);
				const finishedLectureCount = +(
					finishedLectureList?.find((value) => id === value.courseId)
						?.finishedLecture ?? 0
				);

				prev.push({ finishedLectureCount, maxLectureCount });
				return prev;
			},
			[],
		);

		setLearningLectureCount(learningLectureCount);
	}, [
		isLoading,
		currentLearningCourseList,
		finishedLectureList,
		lectureCountList,
	]);

	if (isLoading)
		return (
			<Image
				src={'/images/sky_2.gif'}
				width={300}
				height={300}
				alt="loading gif"
			/>
		);
	if (!currentLearningCourseList || currentLearningCourseList.length === 0)
		return <NoContent text="현재 수강 중인 강좌가 없습니다." />;

	return (
		<div className="min-h-screen bg-white">
			<LearningCard
				courses={currentLearningCourseList}
				learningLectureCount={learningLectureCount}
				showLectureProgressStatus={showLectureProgressStatus}
			/>
		</div>
	);
};

export default Learning;

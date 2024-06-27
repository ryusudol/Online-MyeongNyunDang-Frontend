import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { durationToHhMmSs } from 'utils/durationToHhMmSs';
import myPageAPI from '../../apis/MyPage/index';
import { ILatestLecture } from 'types/MyPage';
import CourseHeader from './CourseHeader';

export const RecentLecture = (): JSX.Element => {
	const [lectures, setLectures] = useState<ILatestLecture[]>();

	useEffect(() => {
		async function func() {
			const recentLectures = await myPageAPI.fetchRecentLectures();
			setLectures(recentLectures);
		}
		func();
	}, []);

	const isValidate = (curTime: number, duration: number) => {
		return duration !== 0 && duration >= curTime;
	};

	const getProgressPercentage = (
		curTime: number = 0,
		duration: number = 0,
	): number => {
		if (!isValidate(curTime, duration)) return 0;

		return ~~((curTime / duration) * 100);
	};

	const showTimeProgress = (curTime: number = 0, duration: number = 0) => {
		if (!isValidate(curTime, duration)) return '';

		return `${durationToHhMmSs(curTime)} / ${durationToHhMmSs(
			duration,
		)} (${getProgressPercentage(curTime, duration)}%)`;
	};

	return (
		<>
			<CourseHeader title={'최근 수강 강의'} />
			<div className="grid gap-x-4 gap-y-4 grid-cols-5 py-5 px-[35px]">
				{lectures ? (
					lectures.slice(0, 5).map((elem) => {
						const percentage = getProgressPercentage(
							elem.lastTime,
							elem.lecture.duration,
						);

						return (
							<Link
								href={`/lectures/${elem.lecture.id}?courseId=${elem.lecture.course.id}`}
								key={elem.id}
								passHref
							>
								<div className="relative w-full overflow-hidden cursor-pointer rounded-lg transition hover:scale-[1.03] bg-[var(--color-Surface)]">
									<Image
										className="w-full aspect-video"
										src={elem.lecture.course.thumbnail}
										alt="course thumbnail"
										width={300}
										height={180}
										layout="responsive"
									/>
									<div className={`w-full right-0 left-0 h-1 bg-[#717171]`}>
										<div
											className={`absolute h-1 w-[${percentage}] bg-red-600`}
										></div>
									</div>
									<div className="flex flex-col justify-around px-3 pt-2 pb-3">
										<span className="text-sm font-semibold overflow-ellipsis text-[#696969]">
											{elem.lecture.course.title}
										</span>
										<span className="mb-2 overflow-hidden font-semibold text-ellipsis whitespace-nowrap">
											{elem.lecture.title}
										</span>
										<span className="text-ellipsis text-sm overflow-hidden whitespace-nowrap text-black/[0.5]">
											{showTimeProgress(elem.lastTime, elem.lecture.duration)}
										</span>
									</div>
								</div>
							</Link>
						);
					})
				) : (
					<div className="w-[400px] flex items-center justify-center my-4">
						<span className="px-8 py-4 text-xl font-semibold text-white rounded-lg bg-gradient-to-r from-green-700 to-green-800">
							최근 수강 강의 정보가 없습니다.
						</span>
					</div>
				)}
			</div>
		</>
	);
};

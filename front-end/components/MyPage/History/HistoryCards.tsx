import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { ILatestLecture } from 'types/MyPage';
import { durationToHhMmSs } from 'utils/durationToHhMmSs';

type PropsType = {
	lectures: ILatestLecture[];
};

const HistoryCards = ({ lectures }: PropsType): JSX.Element => {
	const router = useRouter();

	const isValid = (curTime: number, duration: number) => {
		return duration !== 0 && duration >= curTime;
	};

	const getProgressPercentage = (
		curTime: number = 0,
		duration: number = 0,
	): number => {
		if (!isValid(curTime, duration)) return 0;

		return ~~((curTime / duration) * 100);
	};

	const showTimeProgress = (curTime: number = 0, duration: number = 0) => {
		if (!isValid(curTime, duration)) return '';

		return `${durationToHhMmSs(curTime)} / ${durationToHhMmSs(
			duration,
		)} (${getProgressPercentage(curTime, duration)}%)`;
	};

	const handleClick = (courseId: number, lectureId: number) => () => {
		router.push({ pathname: `/lectures/${lectureId}`, query: { courseId } });
	};

	return (
		<div className="grid w-full min-h-full grid-cols-5 grid-rows-4 p-14 gap-x-8 gap-y-8">
			{lectures.slice(0, 20).map((elem, idx) => {
				const percentage = getProgressPercentage(
					elem.lastTime,
					elem.lecture.duration,
				);

				return (
					<div
						className="rounded-md w-full overflow-hidden relative cursor-pointer transition hover:scale-[1.01] bg-white"
						onClick={handleClick(elem.lecture.course.id, elem.lecture.id)}
						key={idx}
					>
						<Image
							className="w-full rounded-tl-lg rounded-tr-lg aspect-video"
							src={elem.lecture.course.thumbnail}
							width={230}
							height={138}
							alt="Thumbnail Img"
						/>
						<div className="px-4 py-2 bg-[var(--color-Surface)] rounded-bl-lg rounded-br-lg relative bottom-[5px]">
							<div className="overflow-hidden text-lg font-semibold text-ellipsis whitespace-nowrap">
								{elem.lecture.title}
							</div>
							<div className="text-ellipsis overflow-hidden whitespace-nowrap text-black/[0.5] font-semibold text-base">
								{showTimeProgress(elem.lastTime, elem.lecture.duration)}
							</div>
						</div>
						<div className="absolute bottom-[72px] right-0 left-0 h-1 bg-[#717171]">
							<div
								className={`absolute w-[${percentage}%] h-full bg-[#ff0000]`}
							></div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default HistoryCards;

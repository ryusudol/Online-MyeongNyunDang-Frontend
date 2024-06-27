import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { durationToHhMmSs } from 'utils/durationToHhMmSs';
import { useCourseDetailLectureFetch } from 'query/hooks/CourseDetail/index';

import { RxHamburgerMenu } from 'react-icons/rx';

interface ILecturePicker {
	courseId: number;
	lectureId: string;
}

export const LecturePicker = ({
	courseId,
	lectureId,
}: ILecturePicker): JSX.Element => {
	const [sidebarOpen, setSidebaropen] = useState(true);
	const handleViewSidebar = () => {
		setSidebaropen(!sidebarOpen);
	};
	const sidebarClass = sidebarOpen
		? 'h-screen overflow-y-scroll left-0 bg-[var(--color-Primary)] min-w-[300px]'
		: 'h-screen overflow-y-scroll w-0 transition ';

	const router = useRouter();

	const { data: lectureList, isLoading } =
		useCourseDetailLectureFetch(courseId);

	const [moveToAnotherLecture, setMoveToAnotherLecture] = useState(+lectureId);
	const handleMoveToAnotherLecture = (lectureId: number) => {
		router.push({ pathname: `/lectures/${lectureId}`, query: { courseId } });
		setMoveToAnotherLecture(lectureId);
	};

	const getBackgroundColorClass = (id: number) => {
		return id === moveToAnotherLecture
			? 'bg-[var(--color-onPrimary)] text-[var(--color-onSurface)] hover:text-[var(--color-onSurface)]'
			: '';
	};
	if (isLoading)
		return (
			<Image
				src={'/images/sky_2.gif'}
				width={300}
				height={300}
				alt="loading gif"
			/>
		);
	return (
		<div className="flex flex-col bg-[var(--color-Primary)] ">
			<button onClick={handleViewSidebar} className={`p-3 left-0`}>
				<RxHamburgerMenu className="text-white hover:opacity-50" size="25px" />
			</button>
			<div className={`${sidebarClass}`}>
				{lectureList?.map((elem, idx) => {
					return (
						<div key={idx}>
							<div className="px-3 py-1 text-xl font-bold text-white">
								{elem?.title}
							</div>
							<div className="p-2 ">
								{elem?.lectures.map((item, _idx: number) => {
									return (
										<div
											className={`${getBackgroundColorClass(
												item.id,
											)} text-[var(--color-onPrimary-200)] rounded-lg hover:text-white cursor-pointer flex justify-between list-none p-[10px] `}
											key={_idx}
											onClick={() => handleMoveToAnotherLecture(item.id)}
										>
											<li>{item.title}</li>
											<li>{durationToHhMmSs(item.duration)}</li>
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

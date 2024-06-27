import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { useCompletedCourseFetch } from 'query/hooks/MyPage';
import NoContent from '@components/NoContent';

const Completed = (): JSX.Element => {
	const router = useRouter();

	const { data: completedCourseList, isLoading } = useCompletedCourseFetch();

	if (isLoading)
		return (
			<Image
				src={'/images/sky_2.gif'}
				width={300}
				height={300}
				alt="loading gif"
			/>
		);
	if (!completedCourseList || completedCourseList.length === 0)
		return <NoContent text="수강 완료한 강좌가 없습니다." />;

	const handleClick = (courseId: number) => () => {
		router.push(`/courses/${courseId}`);
	};

	return (
		<div className="bg-[var(--color-mrgreen-9)] w-full ">
			<div className="bg-[var(--color-Surface)]">
				<div className="grid grid-cols-4 p-5 mx-56 mb-32 tbl:mx-auto dt:grid-cols-3 tbl:grid-cols-3 mbl:grid-cols-1 gap-x-4 gap-y-4">
					{completedCourseList?.map((elem, index) => (
						<div
							className="rounded-md w-full mt-5 overflow-hidden relative cursor-pointer transition hover:scale-[1.03] bg-white"
							onClick={handleClick(elem.course.id)}
							key={index}
						>
							<Image
								className="aspect-video"
								src={elem.course.thumbnail}
								width={300}
								height={300}
								alt="Thumbnail Img"
							/>
							<div className="overflow-hidden text-base text-ellipsis whitespace-nowrap">
								{elem.course.title}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Completed;

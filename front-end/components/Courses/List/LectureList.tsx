import React from 'react';
import { useRouter } from 'next/router';

import CourseCard from './CourseCard';
import { useCourseListFetch } from 'query/hooks/CourseList';
import NoContent from '@components/NoContent';

type RouterQueryString = {
	keyword: string;
	category2sId: string;
	difficulty: string;
};

const skeleton_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const LectureList = (): JSX.Element => {
	const router = useRouter();
	const { keyword, category2sId, difficulty } =
		router.query as RouterQueryString;
	const { data: courseList, isLoading } = useCourseListFetch({
		keyword,
		category2sId,
		difficulty,
	});

	if (!courseList || courseList.length === 0)
		return <NoContent text="컨텐츠를 불러오는데 실패하였습니다." />;

	// skeleton screen
	if (isLoading)
		return (
			<div
				role="status"
				className="grid grid-cols-4 mb-12 px-7 gap-x-5 gap-y-14 animate-pulse"
			>
				{skeleton_num.map((_, idx) => (
					<div key={idx} className="px-1">
						<div
							// className="max-w-sm p-4 rounded-md shadow md:p-6 "
							className="relative h-full px-3 overflow-hidden transition rounded-md"
						>
							{/* 그림 */}
							<div className="w-[300px] h-32 flex items-center justify-center mb-3 bg-gray-300 rounded-md dark:bg-gray-700"></div>
							{/* 썸네일 외 정보 */}
							<div className="flex flex-col justify-between h-20 pt-1 pb-3">
								{/* 제목 */}
								<div>
									<div className="h-3 mb-3 bg-gray-200 rounded-full w-44 dark:bg-gray-700"></div>
									<div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-36"></div>
								</div>
								{/* 강사, 명수 */}
								<div className="flex items-center justify-between">
									<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[20%]"></div>
									<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[15%]"></div>
								</div>
							</div>
						</div>
					</div>
				))}
				<span className="sr-only">Loading...</span>
			</div>
		);

	return (
		<div className="grid grid-cols-5 gap-x-10 gap-y-10">
			{!!courseList.length ? (
				courseList.map((course, index) => (
					<CourseCard course={course} key={index} />
				))
			) : (
				<div>검색 결과가 없습니다!!!</div>
			)}
		</div>
	);
};

export default LectureList;

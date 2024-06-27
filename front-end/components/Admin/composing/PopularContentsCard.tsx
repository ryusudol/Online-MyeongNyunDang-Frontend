import React, { useState } from 'react';

import CardHeader from './CardHeader';
import CardPager from './CardPager';
import {
	ICourseOrdersInfo,
	ICourseRetrieveInfo,
} from '../../../types/Admin/Index';

type PropsType = {
	order: number;
	title: string;
	courses: ICourseRetrieveInfo[];
};

const shownContentsCnt = 10;

const PopularContentsCard = ({
	order,
	title,
	courses,
}: PropsType): JSX.Element => {
	const [objs, setObjs] = useState<Array<ICourseOrdersInfo>>([]);
	const [currPage, setCurrPage] = useState(1);
	const [courseData, setCourseData] = useState<ICourseRetrieveInfo[]>(courses);

	if (!courseData) {
		return (
			<div>
				Failed to retrieve data. Please refresh to retrieve data again . . .
			</div>
		);
	}

	const startingIndex = shownContentsCnt * (currPage - 1);
	const endIndex = shownContentsCnt * currPage;

	const onOrderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const elementId = +e.currentTarget.id;

		if (
			e.currentTarget.valueAsNumber !== 1 &&
			e.currentTarget.valueAsNumber !== 2 &&
			e.currentTarget.valueAsNumber !== 3 &&
			e.currentTarget.valueAsNumber !== 4 &&
			e.currentTarget.valueAsNumber !== 5 &&
			e.currentTarget.value !== ''
		) {
			e.currentTarget.value = '';
			return;
		}

		if (e.target.value === '') {
			const remainedContent = objs.filter(
				(obj) => obj.courseId !== courseData[elementId].course.id,
			);
			const arr = [...remainedContent];
			setObjs(arr);
		} else {
			const obj = {
				courseId: courseData[elementId].course.id,
				order,
				sequence: e.target.valueAsNumber,
			};
			const arr = [...objs];
			arr.push(obj);
			setObjs(arr);
		}
	};

	const onPagerClick = (num: number) => {
		setCurrPage(num);
	};

	return (
		<div className="flex flex-col justify-between p-8 bg-white shadow-xl rounded-xl">
			<div>
				<CardHeader
					title={title}
					objs={objs}
					setCourses={(courses) => setCourseData(courses)}
				/>
				<table className="w-full h-fit">
					<thead>
						<tr className="flex justify-center text-lg select-none">
							<th className="text-base w-1/12">순위</th>
							<th className="text-base w-1/5">등록일자</th>
							<th className="text-base w-1/3">강좌명</th>
							<th className="text-base w-1/6 ">강사명</th>
							<th className="text-base w-1/12">수강생</th>
							<th className="text-base w-1/12">순서</th>
						</tr>
					</thead>
					<tbody className="flex flex-col">
						{courseData.slice(startingIndex, endIndex).map((course, idx) => {
							return (
								<tr
									key={idx}
									className="flex items-center justify-center mt-6 text-center"
								>
									<td className="w-1/12">{idx + 1}</td>
									<td className="w-1/5">
										{course.courseCreatedAt.split('T')[0]}
									</td>
									<td className="w-1/3">{course.courseTitle}</td>
									<td className="w-1/6 ">{course.instructorName}</td>
									<td className="w-1/12">{course.enrollmentCount}</td>
									<input
										placeholder={`${idx + 1}`}
										onChange={onOrderChange}
										className="w-1/12 text-center rounded-lg outline-none border-[1px] border-solid border-[#aeaeae]"
										id={`${idx}`}
										type="number"
										min="0"
										max="5"
									/>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			<CardPager
				page={currPage}
				setPage={onPagerClick}
				contentsCnt={courseData.length}
				firstContentIdOnNextPage={endIndex}
			/>
		</div>
	);
};

export default PopularContentsCard;

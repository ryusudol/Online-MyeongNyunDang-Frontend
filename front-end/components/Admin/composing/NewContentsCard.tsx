import React, { useState } from 'react';

import CardPager from './CardPager';
import CardHeader from './CardHeader';
import { ICourseOrdersInfo, INewCourseInfo } from '../../../types/Admin/Index';

type PropsType = { title: string; courses: INewCourseInfo[] };

const NewContentsCard = ({ title, courses }: PropsType): JSX.Element => {
	const [objs, setObjs] = useState<Array<ICourseOrdersInfo>>([]);
	const [currPage, setCurrPage] = useState(1);

	if (!courses) return <div>Failed to retrieve data . . .</div>;

	const contentsCnt = courses.length;
	const firstContentIdOnNextPage = 10 * currPage;

	const onOrderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const elementId = +e.currentTarget.id;

		if (
			e.target.valueAsNumber !== 1 &&
			e.target.valueAsNumber !== 2 &&
			e.target.valueAsNumber !== 3 &&
			e.target.valueAsNumber !== 4 &&
			e.target.valueAsNumber !== 5 &&
			e.target.value !== ''
		) {
			alert('강좌 순서 값은 1에서 5 사이 값으로 입력해주시기 바랍니다.');
			e.target.value = '';
			return;
		}

		if (e.target.value === '') {
			const remainedContent = objs.filter(
				(obj) => obj.courseId !== courses[elementId].id,
			);
			const arr = [...remainedContent];
			setObjs(arr);
		} else {
			const obj = {
				courseId: courses[elementId].id,
				order: 1,
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
		<div className="flex flex-col justify-between h-full p-10 bg-white shadow-xl rounded-xl">
			<div>
				<CardHeader
					title={title}
					objs={objs}
					setCourses={() => {
						return;
					}}
				/>
				<table className="w-full h-fit">
					<thead>
						<tr className="flex justify-center text-lg select-none">
							<th className="text-base w-1/5">등록일자</th>
							<th className="text-base w-1/3">강좌명</th>
							<th className="text-base w-1/6 ">강사명</th>

							<th className="w-1/12">순서</th>
						</tr>
					</thead>
					<tbody className="flex flex-col">
						{courses.map((course, idx) => {
							return (
								<tr
									key={idx}
									className="flex items-center justify-center mt-6 text-center"
								>
									<td className="w-1/5">{course.createdAt.split('T')[0]}</td>
									<td className="w-1/3">{course.title}</td>
									<td className="w-1/6 ">{course.instructor}</td>
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
				contentsCnt={contentsCnt}
				firstContentIdOnNextPage={firstContentIdOnNextPage}
			/>
		</div>
	);
};

export default NewContentsCard;

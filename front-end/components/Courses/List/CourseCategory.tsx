import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { ICourseCategory } from 'types/Course';

type PropsType = {
	categories: ICourseCategory[];
};

const CourseCategory = ({ categories }: PropsType): JSX.Element => {
	const router = useRouter();

	const [isClickedCategory, setIsClickedCategory] = useState<boolean[]>([]);

	useEffect(() => {
		const categoryLength = categories.length;

		setIsClickedCategory(new Array(categoryLength).fill(false));
	}, [categories]);

	const handleCardClick = (clickedIndex: number) => () => {
		if (!clickedIndex) router.push('/courses');

		const clickedCategory = isClickedCategory.map((value, index) =>
			clickedIndex === index ? !value : value,
		);

		setIsClickedCategory(clickedCategory);
	};

	return (
		<ul>
			{categories.map((content, idx) => {
				const isClicked = isClickedCategory[idx];
				return (
					<li key={idx}>
						<div
							className="flex font-semibold transition text-[#585858] hover:text-[#121212] border-[1px] border-solid
								border-[#e4e4e4] cursor-pointer p-[0.85rem] bg-[var(--color-Surface)]"
							onClick={handleCardClick(idx)}
						>
							{content.name}
						</div>
						{isClicked && (
							<div>
								{content.category2s?.map((elem, idx) => (
									<Link
										href={`/course/${content.category2s}`}
										key={idx}
										passHref
									>
										<span className="bg-[var(--color-Surface] hover:bg-[var(--color-Surface)] cursor-pointer font-normal text-[#595959] border-[0.1px] border-b-[0.5px] border-[#e4e4e4] border-solid p-[0.8rem] pl-[1.5rem]">
											{elem.name}
										</span>
									</Link>
								))}
							</div>
						)}
					</li>
				);
			})}
		</ul>
	);
};

export default CourseCategory;

import React, { useState, useEffect, ReactElement } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { ICourseCategory } from 'types/Course';

type PropsType = {
	children: ReactElement[] | ReactElement<string> | string;
	categories: ICourseCategory[];
	title: string;
	setTitle: (title: string) => void;
};

let selectedCategory: string;

const CourseListLayout = ({
	children,
	categories,
	title,
	setTitle,
}: PropsType): JSX.Element => {
	const router = useRouter();
	const selectedSubCategory = parseInt(router.query.category2sId as string);
	if (!selectedSubCategory) selectedCategory = categories[0].name;
	else if (selectedSubCategory === 1 || selectedSubCategory === 2)
		selectedCategory = categories[1].name;
	else if (selectedSubCategory === 3 || selectedSubCategory === 4)
		selectedCategory = categories[2].name;
	else if (selectedSubCategory === 5 || selectedSubCategory === 6)
		selectedCategory = categories[3].name;
	else if (selectedSubCategory === 7 || selectedSubCategory === 8)
		selectedCategory = categories[4].name;
	else if (selectedSubCategory === 9) selectedCategory = categories[5].name;

	const [isClicked, setIsClicked] = useState(selectedCategory);
	const [isClickedCategory, setIsClickedCategory] = useState<boolean[]>([]);

	useEffect(() => {
		const categoryLength = categories.length;
		setIsClickedCategory(new Array(categoryLength).fill(false));
	}, [categories]);

	const handleMenuClick = (contentName: string) => {
		setIsClicked(contentName);
	};

	const handleCardClick = (clickedIndex: number) => {
		if (!clickedIndex) router.push('/courses');
		const clickedCategories = isClickedCategory.map((_, idx) =>
			clickedIndex === idx ? true : false,
		);
		setIsClickedCategory(clickedCategories);
	};

	const handleSidebarBtnStyle = (open: boolean) => {
		const selected = 'bg-white text-[var(--color-onSurface)]';
		const notSelected =
			'transition-all relative left-0 hover:left-0.5 hover:text-white';
		let sidebarBtnBasicStyle =
			'text-[var(--color-onPrimary-200)] rounded-tl-lg rounded-bl-lg mb-12 px-4 py-2 text-xl font-bold w-full text-start cursor-pointer ';
		open
			? (sidebarBtnBasicStyle += selected)
			: (sidebarBtnBasicStyle += notSelected);
		return sidebarBtnBasicStyle;
	};

	const handleSubMenuClick = (title: string) => {
		setTitle(title);
	};

	return (
		<div className="w-full h-full flex flex-col my-0 mx-auto font-['Noto Sans KR']">
			<h2 className="select-none w-full bg-[var(--color-Primary)] p-8 font-['Gugi'] text-2xl text-white border-b-2 border-solid border-[var(--color-Background)]">
				{`강좌목록 > ${title}`}
			</h2>
			<div className="flex">
				<div className="min-h-screen w-1/6 bg-[var(--color-Primary)] min-w-[280px] ">
					<ul className="flex flex-col justify-start h-full p-12 pr-0">
						{categories.map((category, idx) => {
							const isCategoryClicked = isClickedCategory[idx];
							return (
								<li
									onClick={() => {
										handleCardClick(idx);
										handleMenuClick(category.name);
										category.name === '전체보기'
											? handleSubMenuClick('전체보기')
											: '';
									}}
									className={`text-[var(--color-onPrimary-200)] ${handleSidebarBtnStyle(
										isClicked === category.name,
									)}`}
									key={idx}
								>
									<div className="flex font-semibold transition cursor-pointer">
										{category.name}
									</div>
									{isCategoryClicked && (
										<ul className="mt-4">
											{category.category2s?.map((elem, idx) => (
												<li
													className="flex"
													key={idx}
													onClick={() => handleSubMenuClick(elem.name)}
												>
													<div className="h-6 w-[2px] bg-[var(--color-Primary)]"></div>
													<Link
														href={`courses?category2sId=${elem.id}`}
														key={idx}
														passHref
													>
														<span className="text-base transition-all relative left-3 hover:left-3.5">
															{elem.name}
														</span>
													</Link>
												</li>
											))}
										</ul>
									)}
								</li>
							);
						})}
					</ul>
				</div>
				<div className="w-full bg-white">{children}</div>
			</div>
		</div>
	);
};

export default CourseListLayout;

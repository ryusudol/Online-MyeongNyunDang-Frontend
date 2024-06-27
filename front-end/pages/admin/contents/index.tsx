import React, { useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import CourseRegisterCard from '@components/Admin/contents-manage/CourseRegisterCard';
import Pager from '@components/Admin/contents-manage/Pager';
import AdminLayout from '@components/Admin/AdminLayout';
import adminAPI from '../../../apis/Admin/adminAPI';
import { CourseInfo } from 'types/Admin/Index';

const ContentsCntPerPage = 5;

type PropsType = {
	allCourses: CourseInfo[];
};

const ContentsPage = ({ allCourses }: PropsType): JSX.Element => {
	const courseCnt = allCourses.length;
	const [pageNumber, setPageNumber] = useState<number>(1);
	const inputRef = useRef<HTMLInputElement | null>(null);

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { current } = inputRef;

		if (current) {
			current.value = e.target.value;
		}
	};

	// const onSearchCoursesClick = () => {};

	const onKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			// onSearchCoursesClick();
			return;
		}
	};

	const changePageNumber = (page: number) => {
		setPageNumber(page);
	};

	if (!allCourses) {
		return (
			<Image
				src={'/images/sky_2.gif'}
				width={450}
				height={300}
				alt="loading gif"
			/>
		);
	}

	return (
		<AdminLayout>
			<Head>
				<title>온라인명륜당 | Admin</title>
				<meta name="description" content="온라인명륜당 Admin 페이지" />
			</Head>
			<section className="flex flex-col items-center justify-start w-full p-10 mt-14">
				<div className="flex justify-center w-1/2 mb-14">
					<input
						type="text"
						ref={inputRef}
						placeholder="강좌명 검색"
						className="text-lg w-[500px] h-12 rounded-5 pr-10 pl-4 border-2 border-solid border-[var(--color-onSurface-100)] rounded-xl"
						onChange={onInputChange}
						onKeyPress={onKeyPress}
					/>
				</div>
				{allCourses
					.slice(
						ContentsCntPerPage * (pageNumber - 1),
						ContentsCntPerPage * pageNumber,
					)
					.map((course) => (
						<CourseRegisterCard key={course.id} course={course} />
					))}
				<Pager
					ContentsCntPerPage={ContentsCntPerPage}
					pageNumber={pageNumber}
					changePageNumber={changePageNumber}
					courseCnt={courseCnt}
				/>
			</section>
		</AdminLayout>
	);
};

export async function getServerSideProps(): Promise<{
	props: { allCourses: CourseInfo[] };
}> {
	const allCourses = await adminAPI.fetchAllCourses();
	return { props: { allCourses } };
}

export default ContentsPage;

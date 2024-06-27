import React, { useState } from 'react';
import Head from 'next/head';

import CourseListLayout from '@components/Courses/List/CourseListLayout';
import TopSearchbar from '@components/Courses/List/TopSearchbar';
import LectureList from '@components/Courses/List/LectureList';
import courseAPI from '../../apis/Courses/courseApi';
import { ICourseCategory } from 'types/Course';

type PropsType = {
	categories: ICourseCategory[];
};

const CoursesListPage = ({ categories }: PropsType): JSX.Element => {
	const [clickedTitle, setClickedTitle] = useState('전체보기');

	const categoryList = [{ id: 0, name: '전체보기' }, ...categories];

	return (
		<section>
			<Head>
				<title>온라인명륜당 | 강좌</title>
				<meta name="description" content="온라인명륜당 강좌 페이지" />
			</Head>
			<CourseListLayout
				categories={categoryList}
				title={clickedTitle}
				setTitle={setClickedTitle}
			>
				<div className="flex justify-center items-center bg-white max-w-[1400px] mx-auto p-10 pb-24 font-['Noto Sans KR']">
					<div className="w-full">
						<TopSearchbar />
						<LectureList />
					</div>
				</div>
			</CourseListLayout>
		</section>
	);
};

export async function getServerSideProps(): Promise<{
	props: { categories: ICourseCategory[] };
}> {
	const categories = await courseAPI.fetchAllCourseCategories();
	return { props: { categories } };
}

export default CoursesListPage;

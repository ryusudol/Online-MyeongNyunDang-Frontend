import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import NewContentsCard from '@components/Admin/composing/NewContentsCard';
import PopularContentsCard from '@components/Admin/composing/PopularContentsCard';
import AdminLayout from '@components/Admin/AdminLayout';
import adminAPI from '../../../apis/Admin/adminAPI';
import { ICourseRetrieveInfo, INewCourseInfo } from 'types/Admin/Index';

type PropsType = {
	coursesInfo: [
		ICourseRetrieveInfo[],
		INewCourseInfo[],
		ICourseRetrieveInfo[],
		ICourseRetrieveInfo[],
	];
};

const titles = [
	'나를 위한 추천 👍',
	'신규 컨텐츠 추천 😃',
	'인턴십 후기 공유 🧑‍🤝‍🧑',
	'외부 컨텐츠 추천 🎯',
];

const AdminIndex = ({ coursesInfo }: PropsType): JSX.Element => {
	if (!coursesInfo)
		return (
			<Image
				src={'/images/sky_2.gif'}
				width={450}
				height={300}
				alt="loading gif"
			/>
		);

	return (
		<AdminLayout>
			<Head>
				<title>온라인명륜당 | Admin</title>
				<meta name="description" content="온라인명륜당 Admin 페이지" />
			</Head>
			<div className="grid w-full min-h-full grid-cols-2 grid-rows-2 px-12 pb-24 mt-14 gap-x-10 gap-y-10">
				<PopularContentsCard
					order={0}
					title={titles[0]}
					courses={coursesInfo[0]}
				/>
				<NewContentsCard title={titles[1]} courses={coursesInfo[1]} />
				<PopularContentsCard
					order={2}
					title={titles[2]}
					courses={coursesInfo[2]}
				/>
				<PopularContentsCard
					order={3}
					title={titles[3]}
					courses={coursesInfo[3]}
				/>
			</div>
		</AdminLayout>
	);
};

export async function getServerSideProps(): Promise<{
	props: {
		coursesInfo: (ICourseRetrieveInfo[] | INewCourseInfo[])[];
	};
}> {
	const mostPopularCourses = await adminAPI.fetchPopularContentsInfo('');
	const newCourses = await adminAPI.fetchNewContentsInfo();
	const popularCourses1 = await adminAPI.fetchPopularContentsInfo(titles[2]);
	const popularCourses2 = await adminAPI.fetchPopularContentsInfo(titles[3]);
	const coursesInfo = [
		mostPopularCourses,
		newCourses,
		popularCourses1,
		popularCourses2,
	];

	return { props: { coursesInfo } };
}

export default AdminIndex;

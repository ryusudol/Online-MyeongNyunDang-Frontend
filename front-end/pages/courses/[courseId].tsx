import React, { useEffect, useState } from 'react';
import {
	GetStaticProps,
	GetStaticPropsContext,
	GetStaticPropsResult,
} from 'next';
import Image from 'next/image';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';

import CourseHeader from '@components/Courses/Details/CourseHeader/CourseHeader';
import CourseBody from '@components/Courses/Details/CourseBody';
import { useCourseDetailInfo } from 'query/hooks/useCourseDetailInfo';
import { LectureProgress } from 'types/Lecture';
import courseAPI from '../../apis/Courses/courseApi';
import QnA from '@components/Courses/Details/QnA';

interface IParams extends ParsedUrlQuery {
	courseId: string;
}

type PropsType = {
	courseId?: number;
};

const CourseDetailPage = ({ courseId }: PropsType): JSX.Element => {
	const [progress, setProgress] = useState<LectureProgress[]>();
	const {
		course,
		qna,
		lecture,
		showModal,
		onOpenLoginModal,
		renderModal,
		isLoading,
	} = useCourseDetailInfo();

	useEffect(() => {
		async function func() {
			const progress = await courseAPI.fetchProgress(courseId as number);
			setProgress(progress);
		}
		func();
	}, [courseId]);

	if (!progress || !course || !lecture) return <div>progress</div>;
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
		<main>
			<Head>
				<title>온라인명륜당 | 강좌</title>
				<meta name="description" content="온라인명륜당 강좌 페이지" />
			</Head>
			<section>
				<CourseHeader
					onOpenLoginModal={onOpenLoginModal}
					courseDetail={course}
					courseId={courseId as number}
				/>
				<CourseBody
					courseId={courseId as number}
					lectures={lecture}
					course={course}
					progress={progress}
					onOpenLoginModal={onOpenLoginModal}
				/>
				<hr className="w-[1080px] mx-auto my-6" />
				<QnA courseId={courseId as number} qna={qna} />
			</section>
			{showModal && renderModal()}
		</main>
	);
};

export const getStaticProps: GetStaticProps<PropsType, IParams> = async (
	context: GetStaticPropsContext<IParams>,
): Promise<GetStaticPropsResult<PropsType>> => {
	const { params } = context;

	if (!params || !params.courseId) {
		return { props: {} };
	}

	const courseId = parseInt(params.courseId, 10);
	return { props: { courseId } };
};

export function getStaticPaths(): {
	paths: never[];
	fallback: string;
} {
	return { paths: [], fallback: 'blocking' };
}

export default CourseDetailPage;

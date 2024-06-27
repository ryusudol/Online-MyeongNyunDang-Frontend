import React, { useState, useEffect } from 'react';

import CurationFloatingBar from '@components/Main/CurationFloatingBar';
import ScrollToTopButton from '@components/ScrollToTopButton';
import CourseList from '@components/Main/CourseList';
import MainBanner from '@components/Main/MainBanner';
import mainAPI from '../apis/Main/index';
import { MainCourse } from 'types/Main';

type PropsType = {
	recommendedContents: MainCourse[][];
};

const scroll = 'scroll';
const titles = ['나를 위한 추천 👍', '신규 컨텐츠 추천 😃'];

const MainPage = ({ recommendedContents }: PropsType): JSX.Element => {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener(scroll, handleScroll);

		return () => {
			window.removeEventListener(scroll, handleScroll);
		};
	}, []);

	return (
		<section className="relative">
			<MainBanner />
			<CurationFloatingBar />
			<div className="relative w-[1280px] m-auto font-['Noto Sans KR'] mb-32">
				{titles.map((title, idx) => (
					<CourseList
						headerText={`${title}`}
						contents={recommendedContents[idx]}
						key={title}
					/>
				))}
			</div>
			{!!scrollY && <ScrollToTopButton />}
		</section>
	);
};

export async function getServerSideProps(): Promise<{
	props: { recommendedContents: MainCourse[][] };
}> {
	const recommendedContents = await mainAPI.fetchRecommendedCourse();

	return { props: { recommendedContents } };
}

export default MainPage;

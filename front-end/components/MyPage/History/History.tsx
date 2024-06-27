import React from 'react';
import Image from 'next/image';

import { useRecentLecturesFetch } from 'query/hooks/Main/index';
import NoContent from '@components/NoContent';
import HistoryCards from './HistoryCards';

const History = (): JSX.Element => {
	const { data: latestLectures, isLoading } = useRecentLecturesFetch();

	if (isLoading)
		return (
			<Image
				src={'/images/sky_2.gif'}
				width={300}
				height={300}
				alt="loading gif"
			/>
		);
	if (!latestLectures || latestLectures.length === 0)
		return <NoContent text="최근 시청한 강의 내역이 없습니다." />;

	return (
		<div className="min-h-screen bg-white">
			<HistoryCards lectures={latestLectures} />
		</div>
	);
};

export default History;

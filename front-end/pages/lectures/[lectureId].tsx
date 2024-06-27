import React, { useRef } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import ReactPlayer from 'react-player/lazy';
import { useRouter } from 'next/router';
import Error from 'next/error';

import { LecturePicker } from '@components/Lectures/LecturePicker';
import { HTTP_STATUS_CODE } from 'constants/http';
import {
	useLectureVideoUrlFetch,
	useLectureHistoryFetch,
	useLectureHistoryUpdate,
	useLectureCompleteUpdate,
} from 'query/hooks/Lecture/index';

type RouterQueryString = {
	lectureId: string;
	courseId: string;
};

const LecturePlayer = (): JSX.Element => {
	const router = useRouter();
	const { lectureId, courseId } = router.query as RouterQueryString;
	const ref = useRef<ReactPlayer | null>(null);

	const { data: videoUrl, isLoading: isVideoUrlLoading } =
		useLectureVideoUrlFetch(lectureId);
	const { isLoading: isRecentLectureHistoryLoading } = useLectureHistoryFetch(
		lectureId,
		{
			onSuccess: (lastTime: number) => {
				if (ref.current) {
					ref.current?.seekTo(lastTime, 'seconds');
				}
			},
		},
	);
	const updateLectureHistory = useLectureHistoryUpdate();
	const updateLectureComplete = useLectureCompleteUpdate();

	const isLoading = isVideoUrlLoading || isRecentLectureHistoryLoading;

	const onUpdateCurrentPlayTime = () => {
		if (!ref?.current) return;

		const currentPlayTime = ~~ref.current.getCurrentTime();

		updateLectureHistory.mutate({
			lectureId: +lectureId,
			lastTime: currentPlayTime,
		});
	};

	const onUpdateLectureComplete = () => updateLectureComplete.mutate(+courseId);

	const onEnded = () => {
		onUpdateCurrentPlayTime();
		onUpdateLectureComplete();
	};

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
		<section>
			<Head>
				<title>온라인명륜당 | 강의</title>
				<meta name="description" content="온라인명륜당 강의 영상 시청 페이지" />
			</Head>
			<h2 className="select-none w-full bg-[var(--color-Primary)] p-8 font-['Gugi'] text-2xl text-white border-b-2 border-solid border-[var(--color-Background)]">
				온라인명륜당
			</h2>
			{courseId && lectureId ? (
				<div className="font-['Noto Sans KR'] flex flex-row min-h-screen  ">
					<div className="">
						{router.isReady && (
							<LecturePicker courseId={+courseId} lectureId={lectureId} />
						)}
					</div>
					<div className="flex w-full min-h-full p-10 pb-24 player-wrapper place-content-center">
						<ReactPlayer
							ref={ref}
							url={videoUrl}
							style={{ minWidth: '1080px', minHeight: '768px' }}
							playing={true}
							muted={true}
							controls={true}
							light={false}
							pip={true}
							disablePictureInPicture={true}
							poster={
								'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'
							}
							progressInterval={10000}
							onPause={onUpdateCurrentPlayTime}
							onProgress={onUpdateCurrentPlayTime}
							onEnded={onEnded}
						/>
					</div>
				</div>
			) : (
				<Error statusCode={HTTP_STATUS_CODE.NOT_FOUND} />
			)}
		</section>
	);
};

export default LecturePlayer;

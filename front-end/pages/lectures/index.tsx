import React from 'react';
import Head from 'next/head';
import ReactPlayer from 'react-player/lazy';

const LecturePlayer = (): JSX.Element => {
	return (
		<section>
			<Head>
				<title>온라인명륜당 | 강의</title>
				<meta name="description" content="온라인명륜당 강의 영상 시청 페이지" />
			</Head>
			<div className="flex items-center justify-center h-full">
				<div className="player-wrapper">
					<ReactPlayer
						className="react-player"
						url={
							'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
						}
						width="100%"
						height="768px"
						playing={true}
						muted={true}
						controls={true}
						light={false}
						pip={true}
						poster={
							'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'
						}
					/>
				</div>
			</div>
		</section>
	);
};

export default LecturePlayer;

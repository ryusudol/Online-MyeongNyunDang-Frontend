import React from 'react';
import ReactPlayer from 'react-player';

const MainBanner = (): JSX.Element => {
	return (
		<div className="border-t-2 border-b-2">
			<ReactPlayer
				url="/videos/main_banner.mp4"
				width="100%"
				height="100%"
				playing={true}
				muted={true}
				controls={false}
				loop={true}
				disablePictureInPicture={true}
			/>
		</div>
	);
};

export default MainBanner;

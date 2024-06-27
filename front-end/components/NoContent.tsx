import React from 'react';
import Image from 'next/image';

type PropsType = {
	text: string;
};

const NoContent = ({ text }: PropsType): JSX.Element => {
	return (
		<div className="flex flex-col items-center justify-center w-full h-full bg-white">
			<div className="px-6 py-4 mb-10 text-3xl rounded-lg">{text}</div>
			<Image
				className="opacity-25"
				src={'/images/confucian.jpeg'}
				width={500}
				height={500}
				alt="Maple img"
			/>
		</div>
	);
};

export default NoContent;

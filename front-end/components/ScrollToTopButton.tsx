import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton = (): JSX.Element => {
	return (
		<button
			onClick={() => {
				window.scrollTo(0, 0);
			}}
			className="fixed shadow-lg bottom-[50px] right-[50px] w-[50px] h-[50px] text-2xl text-white bg-black rounded-full flex justify-center items-center transition-all hover:bg-[#393939] hover:text-[28px]"
		>
			<FontAwesomeIcon icon={faAngleUp} />
		</button>
	);
};

export default ScrollToTopButton;

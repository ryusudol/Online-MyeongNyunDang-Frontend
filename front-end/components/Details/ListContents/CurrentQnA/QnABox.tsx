import React from 'react';

interface QnAProps {
	question: string;
	answer: string;
}

const QnABox = ({ question, answer }: QnAProps): JSX.Element => {
	return (
		<div className="mb-20">
			<div className="relative flex overflow-hidden">
				<h1 className="font-['Gugi'] text-[#086ac5]">Q.</h1>
				<div className="font-['Noto Sans KR'] pt-[15px] pl-[10px] text-[#848484] font-thin text-[0.8rem] mb-[35px]">
					{question}
				</div>
				<div className="absolute t-[40px] h-full border-l-[3px] border-solid border-[#e7e7e7] ml-3" />
			</div>
			<div className="flex">
				<h1 className="font-['Gugi'] text-[#ea0000]">A.</h1>
				<div className="font-['Noto Sans KR'] pt-[15px] pl-[10px] text-[#393939] font-bold">
					{answer}
				</div>
			</div>
		</div>
	);
};

export default QnABox;

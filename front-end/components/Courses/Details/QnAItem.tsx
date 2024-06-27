// 강좌 상세페이지 하단의 질문란 - Q, A 부분
import React from 'react';

type PropsType = {
	questionTitle: string;
	answer: string;
};

const QnAItem = ({ questionTitle, answer }: PropsType): JSX.Element => {
	return (
		<div className="mb-5">
			<div className="flex mb-3 overflow-hidden">
				<div className="font-[Inter] text-[var(--color-onPrimary)] bg-[var(--color-Primary)] border border-[var(--color-Primary)] text-center rounded-sm p-1 w-8 h-0 pb-7">
					Q{' '}
				</div>
				<div className="font-[var(--font-NotoSans)] pl-[10px] text-[#848484] my-auto">
					{questionTitle}
				</div>
			</div>
			<div className="mb-2 border-b border-dashed "></div>
			<div className="flex overflow-hidden">
				<div className="font-[Inter] text-[var(--color-Primary)] border border-[var(--color-Primary)] text-center rounded-sm p-1 w-8 h-0 pb-7">
					A
				</div>
				<div className="pl-[10px] text-[#848484] my-auto">{answer}</div>
			</div>
		</div>
	);
};

export default QnAItem;

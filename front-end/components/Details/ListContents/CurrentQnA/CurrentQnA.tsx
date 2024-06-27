import React, { useEffect, useState } from 'react';

import QnABox from './QnABox';
import axiosInstance from 'apis';

const CurrentQnA = (): JSX.Element => {
	const courceId = 1;
	const [qna, setQna] = useState([
		{ id: 0, contents: '', answers: [{ contents: '' }] },
	]);

	useEffect(() => {
		const getQnA = async () => {
			const response = await axiosInstance('/questions/course/' + courceId);
			const data = await response.data;
			if (data.length > 3) setQna(data.slice(0, 3));
			else setQna(data);
		};
		getQnA();
	}, []);

	return (
		<div className="w-[940px] font-[var(--font-NotoSans)]">
			<header className="m-0 mb-4 ml-[18px]">
				<div className="text-[0.5rem] text-[#c2c1c1] font-bold">
					Recent Questions
				</div>
				<div className="flex">
					<h2 className="m-0 text-[#393939] font-bold">최근 한 질문</h2>
					<button>MORE</button>
				</div>
			</header>
			{qna.map((ele) => {
				return (
					<QnABox
						key={ele.id}
						question={ele.contents}
						answer={ele.answers[0].contents}
					/>
				);
			})}
		</div>
	);
};

export default CurrentQnA;

// questions/{questionId}
import React from 'react';
import { useSelector } from 'react-redux';

import { selectUserNickname } from 'store/feature/common/commonSelector';
import { Question } from 'types/Course';

type PropsType = {
	question: Question;
};

const QuestionDetailQ = ({ question }: PropsType): JSX.Element => {
	const date = new Date(question?.createdAt);
	const userName = useSelector(selectUserNickname);

	return (
		<div className="w-[800px] mbl:w-[300px] mt-5 mx-auto rounded-md mb-3">
			<div className="p-4">
				<div className="text-2xl font-bold">
					<span className=" text-[var(--color-Primary)]">Q </span>
					{question?.title || '제목없음'}
				</div>
				<div className="border-b-[1px] border-solid border-[#adb5bd] text-[#adb5bd] px-0 py-[7px] mb-5">
					{question?.author.nickname} · {date.toLocaleString()}
				</div>
				<div className="leading-[1.7]">{question?.contents || '내용없음'}</div>
				{question?.answers.length == 0 &&
				userName == question?.author.nickname ? (
					<div className="flex gap-x-1 mt-7">
						<button
							// onClick={QuestionDeleteModal}
							className="px-2 py-1 text-xs font-semibold text-gray-600 transition-all border rounded-md hover:bg-slate-200"
						>
							질문 수정
						</button>
						<button className="px-2 py-1 text-xs font-semibold text-gray-600 transition-all border rounded-md hover:bg-slate-200">
							질문 삭제
						</button>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default QuestionDetailQ;

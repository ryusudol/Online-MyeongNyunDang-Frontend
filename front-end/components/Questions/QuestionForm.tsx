import React from 'react';
import { useRouter } from 'next/router';

import API from 'apis/QnA/qnaApi';

interface IQuestionForm {
	courseId: string;
}

const QuestionForm = ({ courseId }: IQuestionForm): JSX.Element => {
	const router = useRouter();
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const title = (
			e.currentTarget.elements.namedItem('title') as HTMLInputElement
		).value;
		const contents = (
			e.currentTarget.elements.namedItem('contents') as HTMLInputElement
		).value;

		API.postQuestion({ courseId: +courseId, title, contents });
		router.reload();
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="flex flex-col mx-auto">
				<div>
					<span className="font-extrabold text-red-500 ">*</span>제목
				</div>
				<textarea
					name="title"
					cols={150}
					rows={2}
					placeholder="여기에 입력해 주세요."
					required
					className="focus:border-[var(--color-mrgreen-5)] focus:outline-none m-0.5 border rounded-md p-1 resize-none focus:ring-1 focus:ring-[var(--color-mrgreen-5)]"
				></textarea>
				<div>
					<div className="m-3"></div>
					<span className="font-extrabold text-red-500 ">*</span>질문 내용
				</div>
				<textarea
					name="contents"
					cols={150}
					rows={5}
					placeholder="여기에 입력해 주세요."
					required
					className="focus:border-[var(--color-mrgreen-5)] focus:outline-none m-0.5 border rounded-md p-1 focus:ring-1 focus:ring-[var(--color-mrgreen-5)]"
				></textarea>
				<div className="flex justify-end mt-3 text-lg">
					<button
						type="submit"
						className="focus:outline-[var(--color-mrgreen-5)] focus:[var(--color-mrgreen-5)] font-medium hover:opacity-90 text-[var(--color-onPrimary)] bg-[var(--color-Primary)] rounded-md py-1 px-2 cursor-pointer"
					>
						등록
					</button>
				</div>
			</form>
		</div>
	);
};

export default QuestionForm;

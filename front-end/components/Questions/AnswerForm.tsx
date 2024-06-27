import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import { HTTP_STATUS_CODE } from 'constants/http';
import { useModal } from 'query/hooks/useModal';
import API from 'apis/QnA/qnaApi';

type PropsType = {
	questionId: string;
};

const AnswerForm = ({ questionId }: PropsType): JSX.Element => {
	const router = useRouter();
	const { showModal, onOpenLoginModal, renderModal } = useModal();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const contents = e.currentTarget.contents.value;

		try {
			const res = await API.postAnswer({
				questionId: +questionId,
				contents: contents,
			});

			if (res.data.statusCode === HTTP_STATUS_CODE.CREATED) {
				router.reload();
			}
		} catch (e: unknown) {
			if (
				axios.isAxiosError(e) &&
				e.response?.status === HTTP_STATUS_CODE.FORBIDDEN
			)
				onOpenLoginModal();
			else console.warn(e);
		}
	};

	return (
		<div className="w-[800px] mbl:w-[300px] m-auto border-t-2 py-8">
			<div className="flex flex-col place-content-center ">
				<form
					onSubmit={handleSubmit}
					className="w-full rounded-md focus:outline-none "
				>
					<textarea
						name="contents"
						cols={130}
						rows={5}
						placeholder="답변을 입력하세요."
						required
						className="p-2 w-full h-full border rounded-md resize-none focus:outline-[var(--color-mrgreen-5)] focus:[var(--color-mrgreen-5)] hover:border-[var(--color-mrgreen-5)]"
					/>
					<button
						type="submit"
						className="w-full left-3 bg-[var(--color-Primary)] rounded-lg px-2 py-1 text-[var(--color-onPrimary)] hover:bg-[var(--color-mrgreen-6)] focus:outline-[var(--color-mrgreen-9)]"
					>
						등록
					</button>
				</form>
				{showModal && renderModal()}
			</div>
		</div>
	);
};

export default AnswerForm;

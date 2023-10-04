import React, { useRef, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';

import noticeAPI from '../../../apis/Notices/noticesAPI';
import { Notification } from 'types/Notification';

type PropsType = {
	onCancelClick: () => void;
	notice: Notification | undefined;
};

const NoticeWritingPage = ({ onCancelClick, notice }: PropsType) => {
	const router = useRouter();

	// Todo: notice 객체의 title과 content로 useRef 객체 초기화 하기
	console.log(notice);

	const titleRef = useRef(null);
	const contentRef = useRef(null);

	const onSubmitClick = async (e: React.FormEvent) => {
		e.preventDefault();

		if (titleRef.current && contentRef.current) {
			const { value: title } = titleRef.current;
			const { value: content } = contentRef.current;

			if (title === '' || content === '') {
				alert('제목과 내용을 모두 입력해주세요.');
				return;
			}

			try {
				await noticeAPI.postNotice(title, content);
				router.reload();
			} catch (err: any) {
				alert(err.message);
			}
		}
	};

	return (
		<section className="w-full">
			<div className="flex flex-col items-center justify-center py-12">
				<div className="flex flex-col items-end justify-center">
					<button
						className="mb-8 text-xl font-semibold rounded-lg bg-[#b3df8c] py-2 px-4 shadow-lg transition hover:bg-[#b9c7ad]"
						onClick={onCancelClick}
					>
						취소
					</button>
					<form className="flex flex-col items-end justify-center">
						<div className="flex items-center justify-center mb-8">
							<label className="mr-4 text-2xl" htmlFor="title">
								제목
							</label>
							<input
								ref={titleRef}
								placeholder="제목을 입력해주세요."
								className="p-2 px-4 border-2 border-solid border-slate-200 rounded-md min-w-[768px] focus:ring-2 focus:ring-teal-800 focus:outline-none focus:border-none"
								type="text"
								id="title"
							/>
						</div>
						<div className="flex items-start justify-center">
							<label className="mt-1 mr-4 text-2xl" htmlFor="content">
								내용
							</label>
							<textarea
								ref={contentRef}
								placeholder="내용을 입력해주세요."
								className="min-h-[500px] p-2 px-4 border-2 border-solid border-slate-200 rounded-md min-w-[768px] focus:ring-2 focus:ring-teal-800 focus:outline-none focus:border-none"
								id="content"
							/>
						</div>
						<button
							onClick={onSubmitClick}
							className="mt-8 text-xl font-semibold rounded-lg bg-[#b3df8c] py-2 px-4 shadow-lg transition hover:bg-[#b9c7ad]"
						>
							제출
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default NoticeWritingPage;

import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { getTimeBefore } from 'utils/getTimeBefore';
import { useMyQnaFetch } from 'query/hooks/MyPage';
import NoContent from '@components/NoContent';

const MyQnA = (): JSX.Element => {
	const router = useRouter();

	const { data: qna, isLoading } = useMyQnaFetch();

	if (isLoading)
		return (
			<Image
				src={'/images/sky_2.gif'}
				width={300}
				height={300}
				alt="loading gif"
			/>
		);

	if (!qna || qna.length === 0)
		return <NoContent text="첫 질문을 올려주세요 !" />;

	const handleClick = (questionId: number) => () => {
		if (!questionId) return;
		router.push(`/questions/${questionId}`);
	};

	return (
		<div className="min-h-screen bg-white">
			<div className="tbl:mx-auto gap-y-4">
				<ul>
					{qna.map((elem, idx) => (
						<li
							className="rounded-md hover:bg-[#f8f9fa] hover:duration-300 m-auto cursor-pointer p-5 border-b-[1px] border-solid border-[#dee2e6] flex w-full list-none text-ellipsis"
							key={idx}
							onClick={handleClick(elem.id)}
						>
							<div className="w-[85%]">
								<header className="font-bold">
									{elem.title || '제목없음'}
								</header>
								<section className="text-[0.8rem] text-[#616568] my-[10px] mx-0 text-ellipsis overflow-hidden break-words line-clamp-3">
									{elem.contents}
								</section>
								<div className="text-[0.8rem] text-[#858a8d]">
									{`이름 · ${getTimeBefore(elem.createdAt)} · ${
										elem.course.title
									}`}
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default MyQnA;

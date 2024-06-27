import React from 'react';
import Image from 'next/image';

import { Notification } from 'types/Notification';
import NoticeCard from './NoticeCard';

type PropsType = {
	notices: Notification[];
	onNoticeChangeClick: (id: number) => void;
};

const NoticeCardList = ({
	notices,
	onNoticeChangeClick,
}: PropsType): JSX.Element => {
	if (!notices || notices.length === 0) {
		return (
			<div className="mt-[4%] shadow-xl flex flex-col items-center justify-center w-full pt-8 border-4 rounded-lg border-[var(--color-mrgreen-7)]">
				<p className="text-lg font-semibold">
					공지사항이 없어요. 위 공지 생성 버튼을 클릭해서 공지사항을
					작성해주세요.
				</p>
				<Image
					src="/images/sky_2.gif"
					alt="loading gif"
					width={400}
					height={300}
				/>
			</div>
		);
	}

	return (
		<ul className="w-full">
			{notices.map((notice, idx) => {
				const createdAt = notice.createdAt.split('T')[0];
				const todayTime = new Date().getTime();
				const createdTime = new Date(
					+createdAt.split('-')[0],
					+createdAt.split('-')[1],
					+createdAt.split('-')[2],
				).getTime();

				const isNew = createdTime + 1000 * 60 * 60 * 24 * 7 <= todayTime;

				return (
					<NoticeCard
						key={notice.id}
						notice={notice}
						idx={idx}
						isNew={isNew}
						createdAt={createdAt}
						onNoticeChangeClick={onNoticeChangeClick}
					/>
				);
			})}
		</ul>
	);
};

export default NoticeCardList;

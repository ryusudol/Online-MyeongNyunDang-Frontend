import React, { useState } from 'react';
import Image from 'next/image';

import AdminLayout from '@components/Admin/AdminLayout';
import noticesAPI from '../../../apis/Notices/noticesAPI';
import { Notification } from 'types/Notification';
import NoticeWritePage from '@components/Admin/notices-manage/NoticeWritingPage';
import NoticeCardList from '@components/Admin/notices-manage/NoticeCardList';

type PropsType = {
	notices: Notification[];
};

const AdminIndex = ({ notices }: PropsType): JSX.Element => {
	const [isWriting, setIsWriting] = useState(false);
	const [notice, setNotice] = useState<Notification>();

	const onCreateNoticeClick = () => {
		setIsWriting(true);
	};

	const onCancelClick = () => {
		setIsWriting(false);
	};

	const onChangeNoticeClick = (id: number) => {
		setNotice(notices.find((notice) => notice.id === id));
		setIsWriting(true);
	};

	if (!notices) {
		return (
			<Image
				src={'/images/sky_2.gif'}
				width={450}
				height={300}
				alt="loading gif"
			/>
		);
	}

	return (
		<AdminLayout>
			{isWriting ? (
				<NoticeWritePage onCancelClick={onCancelClick} notice={notice} />
			) : (
				<div className="w-full">
					<div className="flex items-center justify-center">
						<div className="flex flex-col items-end w-[768px] h-full py-12">
							<button
								onClick={onCreateNoticeClick}
								className="mb-8 text-xl font-semibold rounded-lg bg-[#b3df8c] py-2 px-4 shadow-lg transition hover:bg-[#b9c7ad]"
							>
								공지 생성
							</button>
							<NoticeCardList
								notices={notices}
								onNoticeChangeClick={onChangeNoticeClick}
							/>
						</div>
					</div>
				</div>
			)}
		</AdminLayout>
	);
};

export async function getServerSideProps(): Promise<{
	props: {
		notices: Notification[];
	};
}> {
	const notices = await noticesAPI.fetchAllNotices();
	return { props: { notices } };
}

export default AdminIndex;

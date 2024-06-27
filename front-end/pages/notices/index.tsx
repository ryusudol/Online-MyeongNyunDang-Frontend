import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { Notification } from 'types/Notification';
import noticesAPI from '../../apis/Notices/noticesAPI';
import NewIndicator from '@components/Notices/NewIndicator';
import NoticesLayout from '@components/Notices/NoticesLayout';
import NoticeMetaDataBar from '@components/Notices/NoticeMetaDataBar';

type PropsType = {
	notices: Notification[];
};

const NotificationPage = ({ notices }: PropsType): JSX.Element => {
	return (
		<section>
			<Head>
				<title>온라인명륜당 | 공지사항</title>
				<meta name="description" content="온라인명륜당 공지사항 페이지" />
			</Head>
			<NoticesLayout>
				<div className="flex items-center justify-center w-full">
					<div className="flex flex-col items-center justify-start w-[768px] h-full py-12">
						<ul className="w-full border-solid border-t-2 border-[#393939]">
							{notices.map((notice, idx) => {
								const createdAt = notice.createdAt.split('T')[0];
								const todayTime = new Date().getTime();
								const createdTime = new Date(
									+createdAt.split('-')[0],
									+createdAt.split('-')[1],
									+createdAt.split('-')[2],
								).getTime();

								const isNew =
									todayTime - 1000 * 60 * 60 * 24 * 7 <= createdTime;

								return (
									<li
										className="border-solid border-b-[1px] border-[#aeaeae] py-3 px-6 w-full"
										key={idx}
									>
										<div className="flex items-center justify-start mb-2">
											{isNew ? <NewIndicator /> : null}
											<Link href={`/notices/${notice.id}`} passHref>
												<h4 className="text-lg font-semibold cursor-pointer">
													{notice.title}
												</h4>
											</Link>
										</div>
										<NoticeMetaDataBar notice={notice} />
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</NoticesLayout>
		</section>
	);
};

export async function getServerSideProps(): Promise<{
	props: { notices: Notification[] };
}> {
	const notices = await noticesAPI.fetchAllNotices();

	return { props: { notices } };
}

export default NotificationPage;

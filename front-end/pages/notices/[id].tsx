import React from 'react';
import Head from 'next/head';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { ParsedUrlQuery } from 'querystring';

import NoticeMetaDataBar from '@components/Notices/NoticeMetaDataBar';
import NoticesLayout from '@components/Notices/NoticesLayout';
import noticeAPI from '../../apis/Notices/noticesAPI';
import { Notification } from 'types/Notification';

type PropsType = {
	notice?: Notification;
};

interface Params extends ParsedUrlQuery {
	id: string;
}

const NoticePage = ({ notice }: PropsType): JSX.Element => {
	return (
		<section>
			<Head>
				<title>온라인명륜당 | 공지사항</title>
				<meta name="description" content="온라인명륜당 공지사항 페이지" />
			</Head>
			<NoticesLayout>
				<div className="max-w-[1200px] flex flex-col items-center justify-start p-10 mx-auto">
					<div className="w-full flex flex-col justify-center items-center border-solid border-t-[1px] border-b-[1px] border-[#393939] py-4">
						<div className="mb-3 text-3xl font-semibold">
							{(notice as Notification).title}
						</div>
						<NoticeMetaDataBar notice={notice as Notification} />
					</div>
					<p className="p-10">{(notice as Notification).content}</p>
				</div>
			</NoticesLayout>
		</section>
	);
};

export async function getStaticProps({
	params,
}: GetStaticPropsContext<Params>): Promise<GetStaticPropsResult<PropsType>> {
	if (!params || !params.id) return { props: {} };

	const id = +params.id;
	const notice = await noticeAPI.fetchNotice(id);

	return { props: { notice } };
}

export async function getStaticPaths(): Promise<{
	paths: never[];
	fallback: string;
}> {
	return { paths: [], fallback: 'blocking' };
}

export default NoticePage;

import React from 'react';
import Head from 'next/head';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { ParsedUrlQuery } from 'querystring';

import Learning from '@components/MyPage/Learning/Learning';
import MyPageLayout from '@components/MyPage/MyPageLayout';
import History from '@components/MyPage/History/History';
import Completed from '@components/MyPage/Completed';
import Bookmark from '@components/MyPage/Bookmark';
import { MYPAGE_PATH } from 'constants/MyPage';
import MyQnA from '@components/MyPage/MyQna';

interface IParams extends ParsedUrlQuery {
	category: string;
}

type PropsType = {
	category?: string;
};

const MyPage = ({ category }: PropsType): JSX.Element => {
	const routeComponent = (category: string) => {
		switch (category) {
			case MYPAGE_PATH.HISTORY:
				return <History />;
			case MYPAGE_PATH.BOOKMARK:
				return <Bookmark />;
			case MYPAGE_PATH.COMPLETED:
				return <Completed />;
			case MYPAGE_PATH.LEARNING:
				return <Learning />;
			case MYPAGE_PATH.MY_QNA:
				return <MyQnA />;
			default:
				return <History />;
		}
	};

	return (
		<section>
			<Head>
				<title>온라인명륜당 | 마이페이지</title>
				<meta name="description" content="온라인명륜당 마이페이지" />
			</Head>
			<MyPageLayout>{routeComponent(category as string)}</MyPageLayout>;
		</section>
	);
};

// export async function getStaticProps({ params }: GetServerSidePropsContext) {
// 	const category = params!.category;
// 	return { props: { category } };
// }
export async function getStaticProps({
	params,
}: GetStaticPropsContext<IParams>): Promise<GetStaticPropsResult<PropsType>> {
	if (!params) return { props: {} };

	const category = params.category;
	return { props: { category } };
}

export async function getStaticPaths(): Promise<{
	paths: never[];
	fallback: string;
}> {
	return { paths: [], fallback: 'blocking' };
}

export default MyPage;

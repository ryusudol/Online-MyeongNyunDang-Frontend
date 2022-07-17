import React from 'react';
import Layout from '@components/Layout';
import styled from 'styled-components';
import MainBanner from '@components/Main/MainBanner';
import Notice from '@components/Main/Notice';
import Dashboard from '@components/Main/Dashboard';
// 1920px 기준임. width별로 다르게 나와야함.
import LectureList from '@components/Main/LectureList';
import MidBanner from '@components/Main/MidBanner';
import MidCategory from '@components/Main/MidCategory';

const Index = () => {
	return (
		<Layout>
			<Wrapper>
				<MainBanner />
				<Notice />
				<Dashboard />
				<LectureList headerText={'내가 찜한 강의'} headerColor={'red'} />
				<MidBanner />
				<LectureList headerText={'최근 강의 이어보기'} headerColor={'orange'} />
				<MidCategory />
				<LectureList
					headerText={'프로그래밍 분야 인기 강의 모음'}
					headerColor={'purple'}
				/>
				<LectureList
					headerText={'보안 분야 인기 강의 모음'}
					headerColor={'#df4bff'}
				/>
			</Wrapper>
		</Layout>
	);
};

export default Index;

const Wrapper = styled.div`
	font-family: Noto Sans KR;
`;

import React, { ReactElement } from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import ErrorManager from '../pages/ErrorManager';

const Layout = ({ children }: any): ReactElement => (
	<LayoutBox>
		<Header />
		<ErrorManager>
			<ContentsBox>{children}</ContentsBox>
		</ErrorManager>
		<Footer />
	</LayoutBox>
);

const LayoutBox = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100vw;
	max-width: 100%; // 100vw scrollbar issue
`;
const ContentsBox = styled.div`
	// header를 제외한 배경색
	background-color: var(--color-grey-100);
	flex: 1;
	padding-bottom: 60px;
`;

export default Layout;

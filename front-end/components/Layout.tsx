import React, { ReactElement } from 'react';

import Header from './Header/Header';
import Footer from './Footer';
import ErrorManager from '../pages/ErrorManager';

const Layout = ({ children }: { children?: ReactElement[] }): JSX.Element => (
	<div className="relative flex flex-col w-screen h-screen max-w-full bg-white">
		<Header />
		<ErrorManager>
			<main className="flex-1 pb-15">{children}</main>
		</ErrorManager>
		<Footer />
	</div>
);

export default Layout;

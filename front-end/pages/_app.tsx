import React, { ReactElement, useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import Head from 'next/head';

import { userLoginAuthState, userState } from '../constants/commonState';
import {
	selectIsLoggined,
	selectUserType,
} from 'store/feature/common/commonSelector';
import { commonActions } from 'store/feature/common/commonSlice';
import { HTTP_STATUS_CODE } from '../constants/http';
import GlobalStyles from 'styles/GlobalStyles';
import { store } from 'store/app/store';
import Layout from '@components/Layout';
import axiosInstance from 'apis';
import '../styles/output.css';

if (process.env.NODE_ENV === 'development') {
	require('../mocks/index');
}

// TODO. 옵션 찾아보고 필요한것 확인.
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

function MyComponent({ children }: { children: ReactElement }) {
	const dispatch = useDispatch();

	const isLoggined = useSelector(selectIsLoggined);
	const userType = useSelector(selectUserType);

	useEffect(() => {
		if (
			isLoggined === userLoginAuthState.NOT_CHECKED_YET ||
			userType >= userState.USER
		) {
			axiosInstance
				.get('/auth/profile')
				.then((res: AxiosResponse) => {
					if (res.status === HTTP_STATUS_CODE.OK) {
						dispatch(commonActions.setIsLoggined(userLoginAuthState.LOGGINED));
						dispatch(commonActions.setUserType(res.data.role));
						dispatch(commonActions.setUserNickname(res.data.nickname));
					}
				})
				.catch((e: AxiosError) => {
					const statusCode = e?.response?.status;
					if (
						statusCode === HTTP_STATUS_CODE.FORBIDDEN ||
						statusCode === HTTP_STATUS_CODE.UNAUTHORIZED
					) {
						dispatch(
							commonActions.setIsLoggined(userLoginAuthState.NOT_LOGGINED),
						);
						dispatch(commonActions.setUserType(userState.NOT_LOGGED_IN));
					}
				});
		}
	}, [dispatch, isLoggined, userType]);

	return <>{children}</>;
}

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
	return (
		<QueryClientProvider client={queryClient}>
			<Head>
				<title>온라인명륜당</title>
			</Head>
			<Provider store={store}>
				<MyComponent>
					<Layout>
						<GlobalStyles />
						<Component {...pageProps} />
					</Layout>
				</MyComponent>
			</Provider>
		</QueryClientProvider>
	);
};

export default MyApp;

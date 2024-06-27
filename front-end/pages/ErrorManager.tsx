import React, { ReactElement, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import { selectErrorInfo } from 'store/feature/common/commonSelector';
import { commonActions } from 'store/feature/common/commonSlice';
import ErrorPage from './ErrorPage';

const ErrorManager = ({
	children,
}: {
	children?: ReactElement;
}): JSX.Element => {
	const errorInfo = useSelector(selectErrorInfo);
	const router = useRouter();
	const dispatch = useDispatch();

	useEffect(() => {
		const handleRouteChange = () => {
			if (errorInfo) dispatch(commonActions.setErrorInfo(0));
		};

		router.events.on('routeChangeStart', handleRouteChange);

		// If the component is unmounted, unsubscribe
		// from the event with the `off` method:
		return () => {
			router.events.off('routeChangeStart', handleRouteChange);
		};
	}, [dispatch, errorInfo, router.events]);

	return <>{!!errorInfo ? <ErrorPage statusCode={errorInfo} /> : children}</>;
};

export default ErrorManager;

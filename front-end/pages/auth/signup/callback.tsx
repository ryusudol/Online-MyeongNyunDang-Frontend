import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AxiosResponse } from 'axios';

import { userLoginAuthState, userState } from 'constants/commonState';
import { fetchSignUpCallback } from 'apis/SignUp/signUpApi';
import { commonActions } from 'store/feature/common/commonSlice';

const SignUpCallback = (): ReactElement => {
	const router = useRouter();
	const dispatch = useDispatch();

	useEffect(() => {
		if (router.isReady) {
			const token = router.query['token'] as string;

			fetchSignUpCallback(token)
				.then((res: AxiosResponse) => {
					if (res.status === 200) {
						dispatch(commonActions.setIsLoggined(userLoginAuthState.LOGGINED));
						dispatch(commonActions.setUserType(userState.USER));
						router.replace('/');
					} else {
						router.replace('/auth/callbackError', '/');
					}
				})
				.catch((err: Error) => console.log(err));
		} else {
			return;
		}
	}, [dispatch, router]);

	return (
		<div className="w-full h-full m-auto">
			<Image
				src="/images/sky_2.gif"
				width={300}
				height={300}
				alt="Loading Image"
			/>
			<h4>Redirecting to Server . . .</h4>
		</div>
	);
};

export default SignUpCallback;

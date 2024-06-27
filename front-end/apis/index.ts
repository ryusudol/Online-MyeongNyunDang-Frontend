import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

import { commonErrorHandler } from './commonErrorHandler';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const axiosInstance = axios.create({
	withCredentials: true,
	baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
});

const setResponseInterceptor = (
	instance: AxiosInstance,
	customErrorHandler: (err: AxiosError) => undefined,
) => {
	const onFulfilled = (response: AxiosResponse) => response;

	const onRejected = (error: AxiosError) => {
		const { willUseCustomErrorHandler } = error.config ?? {};

		if (willUseCustomErrorHandler) {
			// 커스텀 에러 활용
			customErrorHandler(error);
			return;
		}

		return Promise.reject(error); // willUseConfig가 없으면, try,catch에서 catch 실행.
	};
	instance.interceptors.response.use(onFulfilled, onRejected);
};

setResponseInterceptor(axiosInstance, commonErrorHandler);

export default axiosInstance;
/*
안에 들어가는 인수는 아래 링크에서 확인 가능
https://axios-http.com/kr/docs/req_config	
*/

import { AxiosResponse } from 'axios';

import { ICourse, MainCourse } from 'types/Main';
import axiosInstance from '..';

const functions = {
	fetchBannerImgUrls: (): Promise<AxiosResponse> => {
		return axiosInstance.get('/banners');
	},
	fetchPopularCourses: async (): Promise<ICourse[]> => {
		const res = await axiosInstance.get('/courses/popular');
		return res.data;
	},
	fetchRecommendedCourse: async (): Promise<Array<MainCourse[]>> => {
		const res1 = await axiosInstance.get('/main-layout/0');
		const res2 = await axiosInstance.get('/main-layout/1');
		const res3 = await axiosInstance.get('/main-layout/2');
		const res4 = await axiosInstance.get('/main-layout/3');

		const resArr = [res1.data, res2.data, res3.data, res4.data];
		return resArr;
	},
};

export default functions;

import axiosInstance from 'apis';
import { AxiosResponse } from 'axios';

import {
	INewCourseInfo,
	ICourseRetrieveInfo,
	ICourseOrdersInfo,
	CourseInfo,
} from 'types/Admin/Index';

const functions = {
	fetchPopularContentsInfo: async (
		mostPopularCategoryTitle: string,
	): Promise<ICourseRetrieveInfo[]> => {
		const res = await axiosInstance.get('/popular-courses', {
			params: {
				limit: 65535,
				category1: mostPopularCategoryTitle,
			},
		});
		return res.data;
	},
	fetchNewContentsInfo: async (): Promise<INewCourseInfo[]> => {
		const res = await axiosInstance.get('/courses/recent');
		return res.data;
	},
	sendPopularCourseOrders: async (
		courseOrdersInfos: ICourseOrdersInfo[],
	): Promise<AxiosResponse> => {
		const res = await axiosInstance.post(
			'/main-layout/update',
			courseOrdersInfos,
		);
		return res.data;
	},
	fetchAllCourses: async (): Promise<CourseInfo[]> => {
		const res = await axiosInstance.get('/courses/all');
		return res.data;
	},
	changeOperation: async (id: number) => {
		const res = await axiosInstance.put(`/courses/${id}/operate`);
		return res.data;
	},
};

export default functions;

import axiosInstance from 'apis';
import { AxiosResponse } from 'axios';

import { ILectureList, LectureProgress } from 'types/Lecture';
import { ICourseRetrieveInfo } from 'types/Admin/Index';
import {
	ICourseDetail,
	ICourseCategory,
	ISearchedCourse,
	IPopularCourse,
	ResponseType,
} from 'types/Course';

const functions = {
	fetchPopularCourse: async (courseId?: number): Promise<IPopularCourse> => {
		const res = await axiosInstance.get(`/popular-courses/course/${courseId}`);
		return res.data;
	},
	fetchCourseDetail: async (courseId: number): Promise<ICourseDetail> => {
		const res = await axiosInstance.get(`/courses/${courseId}`);
		return res.data;
	},
	fetchCourseDetailLectures: async (
		courseId?: number,
	): Promise<ILectureList[]> => {
		const res = await axiosInstance.get(`/courses/${courseId}/lectures`);
		return res.data;
	},
	fetchAllCourseCategories: async (): Promise<ICourseCategory[]> => {
		const res = await axiosInstance.get(`/courses/categories`);
		return res.data;
	},
	fetchCourseList: async (category?: string): Promise<ISearchedCourse> => {
		const res = await axiosInstance.get('/courses/search', {
			params: {
				category2Id: category,
			},
		});
		return res.data;
	},
	fetchSearchedCourseList: async (
		keyword?: string,
		difficulty?: string,
	): Promise<ISearchedCourse> => {
		const res = await axiosInstance.get('/courses/search', {
			params: {
				keyword,
				difficulty,
			},
		});
		return res.data;
	},
	fetchAllCoursesPerPage: (pageNum: number): Promise<AxiosResponse> => {
		return axiosInstance.get('/courses/search', {
			params: {
				page: pageNum,
			},
		});
	},
	enrollCourse: async (courseId: number): Promise<ResponseType> => {
		const res = await axiosInstance.post('/enrollment', {
			courseId,
		});
		return res.data;
	},
	widthdrawCourse: async (courseId: number): Promise<ResponseType> => {
		const res = await axiosInstance.delete(`/enrollment/course/${courseId}`);
		return res.data;
	},
	fetchProgress: async (courseId: number): Promise<LectureProgress[]> => {
		const res = await axiosInstance.get(`/history/lectures/course/${courseId}`);
		return res.data;
	},
	updatePopularCourses: async (): Promise<ICourseRetrieveInfo[]> => {
		await axiosInstance.post('/popular-courses/update', {});
		const res = await axiosInstance.get('/popular-courses', {
			params: {
				limit: 65535,
			},
		});
		return res.data;
	},
};

export default functions;

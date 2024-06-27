import { AxiosResponse } from 'axios';

import { IQna } from 'types/Course';
import axiosInstance from '..';

const functions = {
	postAnswer: ({
		questionId,
		contents,
	}: {
		questionId: number;
		contents: string;
	}): Promise<AxiosResponse> => {
		return axiosInstance.post(`/answers`, {
			questionId,
			contents,
		});
	},
	postQuestion: ({
		courseId,
		title,
		contents,
	}: {
		courseId: number;
		title: string;
		contents: string;
	}): Promise<AxiosResponse> => {
		return axiosInstance.post(`/questions`, {
			courseId,
			title,
			contents,
		});
	},
	fetchCourseDetailQna: (courseId?: number): Promise<IQna[]> => {
		return axiosInstance
			.get(`/questions/course/${courseId}`)
			.then((res) => res.data);
	},
};

export default functions;

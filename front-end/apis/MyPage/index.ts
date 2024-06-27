import axiosInstance from 'apis';
import {
	ICourseInfo,
	ILatestLecture,
	ILectureCount,
	IFinishedLectureCount,
	IMyQuestion,
} from 'types/MyPage';

const functions = {
	fetchRecentLectures: async (): Promise<ILatestLecture[]> => {
		const res = await axiosInstance.get('/history', {
			willUseCustomErrorHandler: true,
		});
		return res.data;
	},
	fetchCompletedCourses: async (): Promise<ICourseInfo[]> => {
		const res = await axiosInstance.get('/completed', {
			willUseCustomErrorHandler: true,
		});
		return res.data;
	},
	fetchCurrentLearningCourses: async (): Promise<ICourseInfo[]> => {
		const res = await axiosInstance.get('/enrollment', {
			willUseCustomErrorHandler: true,
		});
		return res.data;
	},
	fetchLectureCounts: async (): Promise<ILectureCount[]> => {
		const res = await axiosInstance.get('/lectures/count');
		return res.data;
	},
	fetchFinishedLectureList: async (): Promise<IFinishedLectureCount[]> => {
		const res = await axiosInstance.get('/history/lectures/finished');
		return res.data;
	},
	fetchQuestions: async (): Promise<IMyQuestion[]> => {
		const res = await axiosInstance.get('/questions');
		return res.data;
	},
};

export default functions;

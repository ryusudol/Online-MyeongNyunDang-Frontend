import {
	useQuery,
	UseQueryOptions,
	UseQueryResult,
} from '@tanstack/react-query';

import { ICourseDetail, IQna } from 'types/Course';
import { ILectureList } from 'types/Lecture';
import { QUERY_KEYS } from './queryKeys';
import courseAPI from 'apis/Courses/courseApi';
import qnaApi from 'apis/QnA/qnaApi';

const selectCourseQnaFetch = (data: IQna[]): IQna[] => {
	return data.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
};

export const useCourseDetailFetch = (
	courseId: number,
): UseQueryResult<ICourseDetail> => {
	return useQuery<ICourseDetail>(
		[QUERY_KEYS.FETCH_COURSE_DETAIL],
		() => courseAPI.fetchCourseDetail(courseId),
		{
			enabled: !!courseId,
		},
	);
};

export const useCourseDetailLectureFetch = (
	courseId?: number,
	options?: UseQueryOptions<ILectureList[]>,
): UseQueryResult<ILectureList[]> => {
	return useQuery<ILectureList[]>(
		[QUERY_KEYS.FETCH_COURSE_DETAIL_LECTURES],
		() => courseAPI.fetchCourseDetailLectures(courseId),
		{
			enabled: !!courseId,
			...options,
		},
	);
};

export const useCourseQnaFetch = (
	courseId?: number,
): UseQueryResult<IQna[]> => {
	return useQuery<IQna[]>(
		[QUERY_KEYS.FETCH_COURSE_QNA],
		() => qnaApi.fetchCourseDetailQna(courseId),
		{
			enabled: !!courseId,
			select: selectCourseQnaFetch,
		},
	);
};

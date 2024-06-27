import { useRouter } from 'next/router';

import { useModal } from './useModal';
import {
	useCourseDetailFetch,
	useCourseDetailLectureFetch,
	useCourseQnaFetch,
} from './CourseDetail/index';

type RouterQueryString = { courseId: string };

export const useCourseDetailInfo = () => {
	const router = useRouter();

	const { courseId } = router.query as RouterQueryString;
	const { data: course, isLoading: isCourseLoading } = useCourseDetailFetch(
		+courseId,
	);
	const { data: qna, isLoading: isQnaLoading } = useCourseQnaFetch(+courseId);
	const { data: lecture, isLoading: isLectureLoading } =
		useCourseDetailLectureFetch(+courseId);

	const { showModal, onOpenLoginModal, renderModal } = useModal();
	const isLoading = isCourseLoading || isQnaLoading || isLectureLoading;

	return {
		courseId,
		course,
		qna,
		lecture,
		showModal,
		onOpenLoginModal,
		renderModal,
		isLoading,
	};
};

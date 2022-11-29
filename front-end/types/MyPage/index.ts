import { ICourseInfo as ICourse } from 'types/Course';

export interface ILatestLecture {
	id?: number;
	lastTime: number;
	updatedAt: string;
	isFinished: boolean;
	lecture: {
		id: number;
		title: string;
		duration: number;
		filename: string;
		course: {
			id: number;
			title: string;
			thumbnail: string;
		};
	};
}

export interface ICourseInfo {
	createdAt: string;
	bookmark: boolean;
	course: ICourse;
}

export interface ILectureCount {
	courseId: number;
	lectures_count: string;
}

export interface IFinishedLectureCount {
	courseId: number;
	courseTitle: string;
	finishedLecture: string;
}

export interface IMyQuestion {
	course: ICourse;
	id: number;
	authorId: number;
	courseId: number;
	lectureId: number | null;
	title: string;
	contents: string;
	createdAt: string;
}

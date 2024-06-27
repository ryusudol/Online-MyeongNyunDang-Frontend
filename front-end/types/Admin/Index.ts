export interface INewCourseInfo {
	category1Id: number;
	category2Id: number;
	createdAt: string;
	description: string;
	difficulty: number;
	id: number;
	instructor: string;
	summary: string;
	thumbnail: string;
	title: string;
}

export interface ICourseRetrieveInfo {
	id: number;
	category1: string;
	courseTitle: string;
	instructorName: string;
	enrollmentCount: number;
	courseCreatedAt: string;
	updatedAt: string;
	course: Course;
}

interface Course {
	id: number;
	title: string;
	summary: string;
	description: string;
	instructor: string;
	category1Id: number;
	category2Id: number;
	thumbnail: string;
	difficulty: number;
	lectureCnt: number;
	createdAt: string;
}

export interface ICourseOrdersInfo {
	courseId: number;
	order: number;
	sequence: number;
}

export interface CourseInfo {
	id: number;
	title: string;
	summary: string;
	description: string;
	instructor: string;
	category1: Category1;
	category1Id: number;
	category2: Category2;
	category2Id: number;
	thumbnail: string;
	difficulty: number;
	lectureCnt: number;
	operate: boolean;
	createdAt: string;
	enrollments: Enrollment[];
	hashtags: Hashtag[];
}

export interface Category1 {
	id: number;
	name: string;
	category2s: Category2[];
}

interface Category2 {
	id: number;
	name: string;
	category1: string;
	category1Id: number;
}

interface Enrollment {
	id: number;
	User: User;
	userId: number;
	course: string;
	courseId: number;
	createdAt: string;
	completed: boolean;
	completedAt: string;
	bookmark: boolean;
}

interface User {
	id: number;
	email: string;
	nickname: string;
	joinedAt: string;
	role: number;
	watchedLecturesCount: number;
	commentsCount: number;
}

interface Hashtag {
	id: number;
	tag: string;
	courses: string[];
}

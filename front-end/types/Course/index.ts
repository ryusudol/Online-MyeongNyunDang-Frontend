export interface ISearchedCourse {
	length: number;
	courses: ICourseInfo[];
}

export interface ICourseInfo {
	id: number;
	title: string;
	summary: string;
	description: string;
	thumbnail: string;
	difficulty: number;
	createdAt: string;
	instructor: string;
	category1: string;
	category2: string;
}

export interface ICourseCategory {
	id: number;
	name: string;
	category2s?: {
		id: number;
		name: string;
	}[];
}

export interface ICourseDetail {
	id: number;
	title: string;
	summary: string;
	description: string;
	thumbnail: string;
	difficulty: number;
	createdAt: string;
	instructor: {
		id: number;
		email: string;
		nickname: string;
	};
	category1: {
		id: number;
		name: string;
	};
	category2: {
		id: number;
		name: string;
	};
	hashtags: string[];
	is_logged_in: boolean;
	has_enrolled: boolean;
}

export interface Question {
	id: number;
	title: string;
	contents: string;
	createdAt: Date;
	author: { email: string; nickname: string };
	answers: Answer[];
}

export interface Answer {
	authorId: number;
	contents: string;
	createdAt: string;
	id: number;
	questionId: number;
	author: {
		id: number;
		nickname: string;
		joinedAt: string;
		role: number;
		email: string;
	};
}

export interface IQna {
	answercount: number;
	answers: Answer[];
	author: { id: number; nickname: string };
	contents: string;
	createdAt: string;
	id: number;
	title: string;
}

export interface ICourseListParams {
	category2sId?: string;
	keyword?: string;
	difficulty: string;
}

export interface IPopularCourse {
	id: number;
	category1: string;
	courseTitle: string;
	instructorName: string;
	enrollmentCount: number;
	courseCreatedAt: string;
	updatedAt: string;
	course: ICourseInfo;
}

export interface ResponseType {
	message: string;
	statusCode: number;
}

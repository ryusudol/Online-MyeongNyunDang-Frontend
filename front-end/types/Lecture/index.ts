export interface ILectureList {
	id: number;
	title: string;
	lectures: ILectureInfo[];
}

export interface ILectureInfo {
	createdAt: string;
	duration: number;
	filename: string;
	id: number;
	title: string;
}

export interface ILectureVideo {
	filename: string;
	id: number;
	title: string;
}

export interface LectureProgress {
	id: number;
	lastTime: number;
	updatedAt: string;
	isFinished: boolean;
	lecture: Lecture;
}

interface Lecture {
	id: number;
	title: string;
	duration: number;
}

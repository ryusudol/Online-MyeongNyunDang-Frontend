export interface IMainBanners {
	id: number;
	filename: string;
	courseId: number | null;
	category1Id: number | null;
	category2Id: number | null;
	isActive: boolean;
}

export interface ICourse {
	id: number;
	title: string;
	summary: string;
	description: string;
	thumbnail: string;
	difficulty: number;
	createdAt: string; // YYYY-MM-DDTHH:MM:SS.xxxZ;
	instructor: {
		nickname: string;
	};
	category1: {
		name: string;
	};
	category2: {
		name: string;
	};
	enrollmentCount: number;
}

export interface MainCourse {
	id: number;
	courseId: number;
	order: number;
	sequence: number;
	thumbnail: string;
	category1: string;
	title: string;
	description: string;
	instructor: string;
}

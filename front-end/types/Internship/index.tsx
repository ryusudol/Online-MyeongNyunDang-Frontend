export interface InternshipExperience {
	id: number;
	studentId: number;
	companyId: number;
	startDate: string;
	endDate: string;
	explanation: string;
	videoURL: string;
}

export interface Company {
	id: number;
	name: string;
	company_img: string;
	location: string;
	link: string;
}

export interface CompanyReview {
	id: number;
	companyId: number;
	studentId: number;
	createdAt: string;
	review: string;
}

export interface ReviewHistory {
	id: number;
	reviewId: number;
	studentId: number;
	clickTimeStamp: string;
}

import axiosInstance from '..';

export const fetchAllLectureCategories = () => {
	return axiosInstance.get(`courses/categories`);
};

export const fetchLectureLists = (category: string) => {
	return axiosInstance.get(`courses/search?category2Id=${category}`);
};

export const fetchSearchedData = (name: string, difficulty: string) => {
	if (difficulty) {
		return axiosInstance.get(`courses?s=${name}&difficulty=${difficulty}`);
	} else {
		return axiosInstance.get(`courses/search?keyword=${name}`);
	}
};

export const fetchAllLecturesPerPage = (pageNum: number) => {
	//console.log(pageNum);
	return axiosInstance.get(`courses/search?page=${pageNum}`);
};
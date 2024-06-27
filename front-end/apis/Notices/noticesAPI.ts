import axiosInstance from 'apis';
import { Notification } from 'types/Notification';

const functions = {
	fetchAllNotices: async (): Promise<Notification[]> => {
		const res = await axiosInstance.get('/notices');
		return res.data;
	},
	postNotice: async (title: string, content: string) => {
		const res = await axiosInstance.post('/notices', {
			title,
			content,
		});
		return res.data;
	},
	fetchNotice: async (id: number): Promise<Notification> => {
		const res = await axiosInstance.get(`/notices/${id}`);
		return res.data;
	},
	editNotice: async (id: number, title: string, content: string) => {
		const res = await axiosInstance.post(`/notices/${id}`, {
			title,
			content,
		});
		return res.data;
	},
	deleteNotice: async (id: number) => {
		const res = await axiosInstance.delete(`/notices/${id}`);
		return res.data;
	},
};

export default functions;

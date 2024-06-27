import React from 'react';
import { Notification } from 'types/Notification';

type PropsType = {
	notice: Notification;
};

const NoticeCardBody = ({ notice }: PropsType): JSX.Element => {
	return (
		<div className="px-8 py-6 rounded-b-md bg-[var(--color-onPrimary-100)]">
			<h3 className="mb-4 ml-2 text-xl font-bold">내용</h3>
			<p>{notice.content}</p>
		</div>
	);
};

export default NoticeCardBody;

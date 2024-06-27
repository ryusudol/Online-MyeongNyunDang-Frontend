import React from 'react';

import { Notification } from 'types/Notification';

type PropsType = {
	notice: Notification;
};

const NoticeMetaDataBar = ({ notice }: PropsType): JSX.Element => {
	if (!notice) return <div>Failed to retrieve the notice . . .</div>;

	const date = notice.createdAt.split('T')[0];

	return (
		<div className="text-sm">
			<span>No.{notice.id}</span>
			<span className="mx-3">|</span>
			<span>온라인명륜당 운영진</span>
			<span className="mx-3">|</span>
			<span>{date}</span>
			<span className="mx-3">|</span>
			<span>조회수: {notice.views}</span>
		</div>
	);
};

export default NoticeMetaDataBar;

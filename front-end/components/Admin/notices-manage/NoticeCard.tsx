import React, { useState } from 'react';

import { Notification } from 'types/Notification';
import NoticeCardHeader from './NoticeCardHeader';
import NoticeCardBody from './NoticeCardBody';

type PropsType = {
	notice: Notification;
	idx: number;
	isNew: boolean;
	createdAt: string;
	onNoticeChangeClick: (id: number) => void;
};

const NoticeCard = ({
	notice,
	idx,
	isNew,
	createdAt,
	onNoticeChangeClick,
}: PropsType): JSX.Element => {
	const [isClicked, setIsClicked] = useState(false);

	const onCardClick = () => {
		setIsClicked(!isClicked);
	};

	return (
		<li className="w-full mb-8 rounded-md shadow-lg" key={idx}>
			<NoticeCardHeader
				notice={notice}
				isNew={isNew}
				isClicked={isClicked}
				createdAt={createdAt}
				onNoticeChangeClick={onNoticeChangeClick}
				onCardClick={onCardClick}
			/>
			{isClicked ? <NoticeCardBody notice={notice} /> : null}
		</li>
	);
};

export default NoticeCard;

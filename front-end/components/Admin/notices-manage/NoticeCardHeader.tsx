import React from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import noticesAPI from '../../../apis/Notices/noticesAPI';
import NewIndicator from '@components/Notices/NewIndicator';
import { Notification } from 'types/Notification';

type PropsType = {
	notice: Notification;
	isNew: boolean;
	isClicked: boolean;
	createdAt: string;
	onNoticeChangeClick: (id: number) => void;
	onCardClick: () => void;
};

const NoticeCardHeader = ({
	notice,
	isNew,
	isClicked,
	createdAt,
	onNoticeChangeClick,
	onCardClick,
}: PropsType): JSX.Element => {
	const router = useRouter();

	const onDeleteClick = async (id: number) => {
		if (confirm('해당 공지사항을 정말 삭제하시겠습니까?')) {
			try {
				await noticesAPI.deleteNotice(id);
			} catch (err) {
				alert('공지 삭제 과정에서 알 수 없는 에러가 발생했습니다.');
			}
			router.reload();
		}
	};

	const clickedBorderDesign = 'rounded-t-md';

	return (
		<div
			className={`flex justify-between px-6 py-3 bg-[var(--color-grey-100)] border-b-2 ${
				isClicked ? clickedBorderDesign : 'rounded-md'
			}`}
		>
			<div>
				<div className="flex items-center justify-start mb-3">
					{isNew ? <NewIndicator /> : null}
					<h4
						onClick={onCardClick}
						className="text-lg font-semibold cursor-pointer"
					>
						{notice.title}
						<FontAwesomeIcon
							icon={faAngleDown}
							className={`ml-2 transition ${
								isClicked ? '-rotate-180' : 'rotate-0'
							}`}
						/>
					</h4>
				</div>
				<div className="text-sm">
					<span>No.{notice.id}</span>
					<span className="mx-3">|</span>
					<span>온라인명륜당 운영진</span>
					<span className="mx-3">|</span>
					<span>{createdAt}</span>
					<span className="mx-3">|</span>
					<span>조회수: {notice.views}</span>
				</div>
			</div>
			<div className="text-sm">
				<button onClick={() => onNoticeChangeClick(notice.id)}>수정</button>
				<span className="mx-2">|</span>
				<button onClick={() => onDeleteClick(notice.id)}>삭제</button>
			</div>
		</div>
	);
};

export default NoticeCardHeader;

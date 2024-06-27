import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronRight,
	faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

type BtnId = 'prev' | 'next';
type PropsType = {
	page: number;
	setPage: (page: number) => void;
	contentsCnt: number;
	firstContentIdOnNextPage: number;
};

const CardPager = ({
	page,
	setPage,
	contentsCnt,
	firstContentIdOnNextPage,
}: PropsType): JSX.Element => {
	const onPagerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const btnId = e.currentTarget.id as BtnId;

		if (btnId === 'next') {
			firstContentIdOnNextPage <= contentsCnt ? setPage(page + 1) : null;
		} else {
			page !== 1 ? setPage(page - 1) : null;
		}
	};

	return (
		<div className="flex items-center justify-center mt-8">
			<button
				id="prev"
				onClick={onPagerClick}
				className="text-2xl hover:scale-[1.1]"
			>
				<FontAwesomeIcon icon={faChevronLeft} />
			</button>
			<span className="mx-8 text-2xl">{page}</span>
			<button
				id="next"
				onClick={onPagerClick}
				className="text-2xl hover:scale-[1.1]"
			>
				<FontAwesomeIcon icon={faChevronRight} />
			</button>
		</div>
	);
};

export default CardPager;

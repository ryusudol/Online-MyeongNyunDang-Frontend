import React from 'react';
import {
	faAngleLeft,
	faAngleRight,
	faAnglesLeft,
	faAnglesRight,
} from '@fortawesome/free-solid-svg-icons';

import PageButton from './PageButton';

type PropsType = {
	ContentsCntPerPage: number;
	pageNumber: number;
	changePageNumber: (page: number) => void;
	courseCnt: number;
};

type ButtonId = 'prev' | 'next' | 'first' | 'last';

const Pager = ({
	ContentsCntPerPage,
	pageNumber,
	changePageNumber,
	courseCnt,
}: PropsType): JSX.Element => {
	const maxPageNum = Math.floor(courseCnt / 5 + 1);

	const onSingleAngleBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const id = e.currentTarget.id as ButtonId;

		if (id === 'prev' && pageNumber > 1) changePageNumber(pageNumber - 1);
		else if (id === 'next' && pageNumber * ContentsCntPerPage < courseCnt)
			changePageNumber(pageNumber + 1);
	};

	const onDoubleAngleBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const id = e.currentTarget.id as ButtonId;

		if (id === 'first' && pageNumber !== 1) changePageNumber(1);
		else if (id === 'last' && pageNumber !== maxPageNum)
			changePageNumber(maxPageNum);
	};

	return (
		<div className="flex items-center justify-center text-3xl">
			<PageButton
				id="first"
				onBtnClick={onDoubleAngleBtnClick}
				icon={faAnglesLeft}
			/>
			<PageButton
				id="prev"
				onBtnClick={onSingleAngleBtnClick}
				icon={faAngleLeft}
			/>
			<span className="mx-10 my-12 ml-16">{pageNumber}</span>
			<span className="my-12">/</span>
			<span className="mx-10 my-12 mr-16">{maxPageNum}</span>
			<PageButton
				id="next"
				onBtnClick={onSingleAngleBtnClick}
				icon={faAngleRight}
			/>
			<PageButton
				id="last"
				onBtnClick={onDoubleAngleBtnClick}
				icon={faAnglesRight}
			/>
		</div>
	);
};

export default Pager;

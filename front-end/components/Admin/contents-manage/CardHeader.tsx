import React from 'react';

import OperationBtn from './OperationBtn';

type PropType = {
	isShow: boolean;
	title: string;
	instructor: string;
	operation: boolean;
	onChangeOperation: () => void;
	onCardHeaderClick: () => void;
};

const CardHeader = ({
	isShow,
	title,
	instructor,
	operation,
	onChangeOperation,
	onCardHeaderClick,
}: PropType): JSX.Element => {
	const roundStyle = isShow ? 'rounded-t-lg' : 'rounded-lg';

	return (
		<div
			onClick={onCardHeaderClick}
			className={`hover:bg-[#cacaca] transition-all cursor-pointer ${roundStyle} flex items-center justify-between w-full bg-[var(--color-onSurface-100)] px-[5%] py-[2.5%]`}
		>
			<h3 className="text-[28px] font-bold">{title}</h3>
			{instructor ? <span>{instructor} 교수</span> : ''}
			<OperationBtn oper={operation} onChangeOper={onChangeOperation} />
		</div>
	);
};

export default CardHeader;

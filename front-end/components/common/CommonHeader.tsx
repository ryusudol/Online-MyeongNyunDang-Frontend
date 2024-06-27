import React from 'react';

interface HeaderProps {
	cat1: string;
	cat2?: string;
	lineColor?: string;
}
const CommonHeader = ({ lineColor, cat1, cat2 }: HeaderProps): JSX.Element => {
	return (
		<div className="relative pr-10 text-2xl">
			<div
				className={`absolute left-[3px] top-[-2px] border-t-2 border-solid border-[${lineColor}] w-5`}
			/>
			<span className="whitespace-nowrap">{cat1} </span>
			<span className="font-bold whitespace-nowrap">
				{cat2 ? ` > ${cat2}` : ''}
			</span>
		</div>
	);
};

export default CommonHeader;

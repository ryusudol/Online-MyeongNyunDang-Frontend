import React from 'react';

import { Category1 } from 'types/Admin/Index';

type PropType = {
	description: string;
	category: Category1;
	numberOfLectures: number;
};

const CardBody = ({
	description,
	category,
	numberOfLectures,
}: PropType): JSX.Element => {
	return (
		<div className="rounded-b-lg h-fit bg-[var(--color-Surface)] px-[7%] py-[4%] flex justify-between items-center">
			<div className="flex flex-col w-[60%]">
				<h5 className="mb-2 text-xl font-semibold">강좌 소개</h5>
				<span className="text-justify">{description}</span>
			</div>
			<table className="w-[30%] h-20">
				<tr>
					<td className="font-bold">카테고리</td>
					<td>{category.name}</td>
				</tr>
				<tr>
					<td className="font-bold">강좌수</td>
					<td>{numberOfLectures}</td>
				</tr>
			</table>
		</div>
	);
};

export default CardBody;

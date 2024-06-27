import React from 'react';
import Image from 'next/image';

import { Company } from 'types/Internship';

type PropsType = {
	company: Company;
};

const InternshipCard = ({ company }: PropsType): JSX.Element => {
	return (
		<div>
			<Image
				width={280}
				height={140}
				alt="company image"
				src={company.company_img}
			/>
			<div>
				<span>{company.name}</span>
				<span>영상개수</span>
			</div>
		</div>
	);
};

export default InternshipCard;

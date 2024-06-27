import React from 'react';

import InternshipCard from '@components/Internship/InternshipCard';
import { Company } from 'types/Internship';

const company: Company = {
	id: 1,
	name: 'Samsung',
	company_img: 'hi',
	location: 'Suwon',
	link: 'https://',
};

const InternshipPage = (): JSX.Element => {
	return (
		<section className="min-h-full">
			<h2 className="select-none w-full bg-[var(--color-Primary)] p-8 font-['Gugi'] text-2xl text-white border-b-2 border-solid border-[var(--color-Background)]">
				인턴십
			</h2>
			<div>
				<InternshipCard company={company} />
			</div>
		</section>
	);
};

export default InternshipPage;

import React from 'react';

import { ICourseDetail } from 'types/Course';

type PropsType = {
	courseDetail: ICourseDetail;
};

const MetaDataHeader = ({ courseDetail }: PropsType): JSX.Element => {
	const title = courseDetail.title;
	const instructor = courseDetail.instructor;
	const courseCategory1 = courseDetail.category1.name;
	const courseCategory2 = courseDetail.category2.name;

	return (
		<header>
			<h4 className="m-[5px] font-semibold text-sm text-[#dddddd]">{`${courseCategory1} > ${courseCategory2}`}</h4>
			<div className="m-[5px] flex flex-col items-start mb-8">
				<h2 className="text-3xl font-bold">{title}</h2>
				<p className="mt-2">{`강사: ${instructor} `}</p>
			</div>
		</header>
	);
};

export default MetaDataHeader;

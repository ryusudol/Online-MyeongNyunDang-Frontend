import React from 'react';
import Image from 'next/image';

import NewContentsCard from './NewContentsCard';
import PopularContentsCard from './PopularContentsCard';
import { ICourseRetrieveInfo, INewCourseInfo } from 'types/Admin/Index';

type PropsType = {
	coursesInfo: [
		ICourseRetrieveInfo[],
		INewCourseInfo[],
		ICourseRetrieveInfo[],
		ICourseRetrieveInfo[],
	];
	titles: string[];
};

const Compose = ({ coursesInfo, titles }: PropsType): JSX.Element => {
	if (!coursesInfo)
		return (
			<Image
				src={'/images/sky_2.gif'}
				width={300}
				height={300}
				alt="loading gif"
			/>
		);

	return (
		<div className="grid w-full min-h-full grid-cols-2 grid-rows-2 p-10 pb-24 mt-14 gap-x-20 gap-y-20">
			<PopularContentsCard
				order={0}
				title={titles[0]}
				courses={coursesInfo[0]}
			/>
			<NewContentsCard title={titles[1]} courses={coursesInfo[1]} />
			<PopularContentsCard
				order={2}
				title={titles[2]}
				courses={coursesInfo[2]}
			/>
			<PopularContentsCard
				order={3}
				title={titles[3]}
				courses={coursesInfo[3]}
			/>
		</div>
	);
};

export default Compose;

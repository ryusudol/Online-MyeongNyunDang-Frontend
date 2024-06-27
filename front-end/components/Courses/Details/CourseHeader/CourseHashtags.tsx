import React from 'react';

import { ICourseDetail } from 'types/Course';

type PropsType = {
	courseDetail: ICourseDetail;
};

const CourseHashtags = ({ courseDetail }: PropsType): JSX.Element => {
	return (
		<ul>
			{courseDetail.hashtags?.map((ele) => {
				return (
					<li
						key={ele}
						className="m-[0.2rem] font-bold inline bg-[#f0f0f0] text-[#696969] w-full px-[0.8rem] rounded-[3rem]"
					>
						<span>{`#${ele}`}</span>
					</li>
				);
			})}
		</ul>
	);
};

export default CourseHashtags;

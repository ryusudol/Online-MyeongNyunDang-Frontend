import React from 'react';

import MetaDataHeader from './MetaDataHeader';
import CourseHashtags from './CourseHashtags';
import { ICourseDetail } from 'types/Course';

type PropsType = {
	courseDetail: ICourseDetail;
};

const MetaDataSection = ({ courseDetail }: PropsType): JSX.Element => {
	const courseDescription = courseDetail.description;

	return (
		<section>
			<MetaDataHeader courseDetail={courseDetail} />
			<article className="m-[5px] mb-8">{courseDescription}</article>
			<CourseHashtags courseDetail={courseDetail} />
		</section>
	);
};

export default MetaDataSection;

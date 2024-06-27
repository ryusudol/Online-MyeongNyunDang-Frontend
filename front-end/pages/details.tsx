import React from 'react';

import CurrentQnA from '@components/Details/ListContents/CurrentQnA/CurrentQnA';
import Curriculum from '@components/Details/ListContents/Curriculum/Curriculum';
import LearningStatus from '@components/Details/ListContents/LearningStatus/LearningStatus';
import LectureIntroduction from '@components/Details/ListContents/LectureIntroduction/LectureIntroduction';

const DetailsPage = (): JSX.Element => (
	<>
		<div className="mx-auto my-0">
			<div className="flex my-[63px] mx-auto">
				<div className="my-0 mr-[56px] ml-0">
					<LearningStatus />
					<LectureIntroduction />
				</div>
				<CurrentQnA />
			</div>
			<Curriculum />
		</div>
	</>
);

export default DetailsPage;

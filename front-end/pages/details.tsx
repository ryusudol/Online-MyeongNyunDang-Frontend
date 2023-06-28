import React, { ReactElement } from 'react';

import CurrentQnA from '@components/Details/ListContents/CurrentQnA/CurrentQnA';
import Curriculum from '@components/Details/ListContents/Curriculum/Curriculum';
import LearningStatus from '@components/Details/ListContents/LearningStatus/LearningStatus';
import LectureIntroduction from '@components/Details/ListContents/LectureIntroduction/LectureIntroduction';

const DetailsPage = (): ReactElement => (
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
// const Container = styled.div`
// 	@media only screen and (min-width: 1300px) {
// 		width: 1300px;
// 	}
// `;

import React from 'react';

import { ILectureList } from 'types/Lecture';
import LectureBar from './LectureBar';

type PropsType = {
	show: boolean;
	lecture: ILectureList;
	handleLectureClick: (idx: number) => void;
};

const LectureListBody = ({
	show,
	lecture,
	handleLectureClick,
}: PropsType): JSX.Element => {
	return (
		<section className={show ? 'block' : 'hidden'}>
			<ul>
				{lecture.lectures.map((lecture, idx) => {
					return (
						<li onClick={() => handleLectureClick(lecture.id)} key={lecture.id}>
							<LectureBar idx={idx} lecture={lecture} />
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default LectureListBody;

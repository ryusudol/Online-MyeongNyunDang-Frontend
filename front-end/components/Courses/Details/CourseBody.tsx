import React from 'react';

import { ILectureList } from 'types/Lecture';
import { ICourseDetail } from 'types/Course';
import { LectureProgress } from 'types/Lecture';
import LectureList from './LectureList/LectureList';

type PropsType = {
	courseId: number;
	lectures: ILectureList[];
	course: ICourseDetail;
	progress: LectureProgress[];
	onOpenLoginModal: () => void;
};

const CourseBody = ({
	courseId,
	lectures,
	course,
	progress,
	onOpenLoginModal,
}: PropsType): JSX.Element => {
	return (
		<section className="w-[1080px] mx-auto my-6 p-6 font-[var(--font-NotoSans)]">
			<header>
				<span className="text-[0.5rem] text-[#c2c1c1] font-bold">
					CURRICULUM
				</span>
				<h3 className="mb-5 text-3xl font-bold">강의 커리큘럼</h3>
			</header>
			{lectures && (
				<LectureList
					courseId={courseId}
					courseDetail={course}
					lectures={lectures}
					progress={progress}
					onOpenLoginModal={onOpenLoginModal}
				/>
			)}
		</section>
	);
};

export default CourseBody;

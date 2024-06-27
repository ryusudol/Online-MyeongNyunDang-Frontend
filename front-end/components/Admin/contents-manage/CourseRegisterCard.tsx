import React, { useState } from 'react';

import adminAPI from '../../../apis/Admin/adminAPI';
import { CourseInfo } from 'types/Admin/Index';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

type PropsType = {
	course: CourseInfo;
};

const CourseRegisterCard = ({ course }: PropsType): JSX.Element => {
	const [courseInfo, setCourseInfo] = useState<CourseInfo>(course);
	const [isShow, setIsShow] = useState<boolean>(false);

	const handleOperationChange = async () => {
		await adminAPI.changeOperation(courseInfo.id);
		const newCourse = { ...courseInfo, operate: !courseInfo.operate };
		setCourseInfo(newCourse);
	};

	const onCardHeaderClick = () => {
		setIsShow(!isShow);
	};

	return (
		<div className="w-1/2 mb-[3%] shadow-xl rounded-lg">
			<CardHeader
				isShow={isShow}
				title={courseInfo.title}
				instructor={courseInfo.instructor}
				operation={courseInfo.operate}
				onChangeOperation={handleOperationChange}
				onCardHeaderClick={onCardHeaderClick}
			/>
			{isShow ? (
				<CardBody
					description={courseInfo.description}
					category={courseInfo.category1}
					numberOfLectures={courseInfo.lectureCnt}
				/>
			) : null}
		</div>
	);
};

export default CourseRegisterCard;

import React, { ReactElement, useEffect, useState } from 'react';

import axiosInstance from 'apis';

const MainText = (): ReactElement => {
	const [courseData, setCourseData] = useState({
		title: '',
		description: '',
		instructor: '',
		category1: '',
		category2: '',
		hashtag: [],
	});
	useEffect(() => {
		const courceId = 1;
		const getCourse = async () => {
			const response = await axiosInstance('/courses/' + courceId);
			const data = await response.data;
			setCourseData(data);
		};
		getCourse();
	}, []);

	return (
		<div className="flex">
			<h4>{`${courseData.category1} > ${courseData.category2}`}</h4>
			<h2>{courseData.title}</h2>
			<h4>{courseData.description}</h4>
			<p>{`강사: ${courseData.instructor}`}</p>
			<div>
				{courseData.hashtag.map((ele) => {
					return <div key={ele} className="hashtag">{`#${ele}`}</div>;
				})}
			</div>
		</div>
	);
};

export default MainText;

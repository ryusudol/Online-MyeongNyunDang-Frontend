import React from 'react';

import { durationToHhMmSs } from 'utils/durationToHhMmSs';
import { ILectureInfo } from 'types/Lecture';

type PropsType = {
	idx: number;
	lecture: ILectureInfo;
};

const LectureBar = ({ idx, lecture }: PropsType): JSX.Element => {
	return (
		<div className="flex items-center h-12 cursor-pointer hover:bg-[#eaeaea]">
			<span className="w-[10%] text-center text-[#404040] text-base">
				{idx + 1}
			</span>
			<span className="w-[75%] pl-[5px] text-[#404040] font-semibold">
				{lecture.title}
			</span>
			<span className="w-[15%] text-center text-[#404040] text-base">
				{durationToHhMmSs(lecture.duration)}
			</span>
		</div>
	);
};

export default LectureBar;

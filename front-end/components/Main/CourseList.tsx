import React, { SyntheticEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { defaultErrorImage } from 'constants/index';
import CourseHeader from './CourseHeader';
import { MainCourse } from 'types/Main';

type PropsType = {
	headerText: string;
	contents: MainCourse[];
};

const CourseList = ({ headerText, contents }: PropsType): JSX.Element => {
	const handleImgError = (e: SyntheticEvent<HTMLImageElement>) => {
		(e.target as HTMLImageElement).src = defaultErrorImage;
	};

	if (contents.length === 0) {
		return (
			<div className="flex items-center justify-center my-4">
				<span className="px-8 py-4 text-xl font-semibold text-white rounded-lg bg-gradient-to-r from-green-700 to-green-800">
					해당 카테고리 강좌 정보가 없습니다.
				</span>
			</div>
		);
	}

	return (
		<div>
			<CourseHeader title={headerText} />
			<div>
				<div className="grid gap-x-4 gap-y-4 py-5 px-[35px] grid-cols-5">
					{contents.map((course, idx) => (
						<Link href={`/courses/${course.courseId}`} key={idx} passHref>
							<div className="relative overflow-hidden rounded-lg transition hover:scale-[1.02] cursor-pointer bg-[var(--color-Surface)]">
								<Image
									width={'300'}
									height={'180'}
									src={course.thumbnail}
									onError={handleImgError}
									alt="course thumbnail"
									layout="responsive"
								/>
								<div className="flex flex-col justify-between px-3 pt-2 pb-3">
									<div className="font-bold leading-5">{course.title}</div>
									<div className="text-xs opacity-[0.6] mt-3 overflow-ellipsis">
										{course.instructor}
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default CourseList;

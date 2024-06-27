// questions/course/{courseId}
import React, { useState } from 'react';

import CourseHeader from '@components/Courses/Details/CourseHeader/CourseHeader';
import QuestionTable from '@components/Questions/QuestionTable';
import QuestionForm from '@components/Questions/QuestionForm';
import { useCourseDetailInfo } from 'query/hooks/useCourseDetailInfo';
/*
로그인 && 강의 등록이 되어있어야 등록 가능.
*/
const QuestionsByCoursePage = (): JSX.Element => {
	const { courseId, qna, course, showModal, onOpenLoginModal, renderModal } =
		useCourseDetailInfo();
	const [openForm, setOpenForm] = useState(false);
	const { is_logged_in: isLoggined, has_enrolled: isEnrolled } = course || {};

	const handleClickButton = () => {
		if (!isLoggined) {
			onOpenLoginModal();
			return;
		}

		if (!isEnrolled) {
			alert('강좌를 먼저 신청해주세요');
			return;
		}

		setOpenForm((prev) => !prev);
	};

	return (
		<>
			{course && qna && (
				<>
					<CourseHeader
						onOpenLoginModal={onOpenLoginModal}
						courseDetail={course}
						courseId={+courseId}
					/>

					<div className="w-[85%] m-auto flex flex-col">
						<div className="flex items-center justify-between my-6">
							<h2 className="text-4xl font-bold text-[var(--color-onBackground)]">
								질문 답변
							</h2>
							<div>
								<button
									onClick={handleClickButton}
									className="focus:outline-[var(--color-mrgreen-5)] focus:[var(--color-mrgreen-5)] bg-[var(--color-Primary)] p-2 text-[var(--color-onPrimary)] font-medium border-none rounded-md cursor-pointer duration-300 hover:bg-[var(--color-mrgreen-5)] hover:outline-none"
								>
									질문하기
								</button>
							</div>
						</div>
						{openForm && <QuestionForm courseId={courseId} />}
						<QuestionTable qna={qna} courseName={course.title} />
					</div>
				</>
			)}
			{showModal && renderModal()}
		</>
	);
};

export default QuestionsByCoursePage;

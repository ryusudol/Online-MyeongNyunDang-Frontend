import React from 'react';

import { useCourseEnrollmentUpdate } from 'query/hooks/QnA/index';
import { HTTP_STATUS_CODE } from 'constants/http';
import { ICourseDetail } from 'types/Course';
import { useRouter } from 'next/router';

type PropsType = {
	courseDetail: ICourseDetail;
	courseId: number;
	onOpenLoginModal: () => void;
};

const CourseHeader = ({
	courseDetail,
	courseId,
	onOpenLoginModal,
}: PropsType) => {
	const router = useRouter();
	const { has_enrolled: isEnrolled, is_logged_in: isLoggedIn } = courseDetail;
	const mutation = useCourseEnrollmentUpdate();

	const handleClick = (isLoggedIn: boolean) => async () => {
		if (!isLoggedIn) {
			onOpenLoginModal();
			return;
		}

		mutation.mutate(+courseId, {
			onSuccess: (data) => {
				if (data.statusCode === HTTP_STATUS_CODE.CREATED) {
					router.reload();
				} else {
					alert(
						'알수없는 오류로 강의 신청에 실패 했습니다. 다시 시도해주세요.',
					);
				}
			},
			onError: () => {
				alert('오류로 인해 신청에 실패했습니다. 다시 시도해주세요.');
			},
		});
	};

	return (
		<div className="flex h-[25rem] bg-[var(--color-Primary)] px-10 justify-center">
			<div className="my-auto">
				<img
					src={courseDetail.thumbnail}
					alt="course thumbnail"
					className="rounded-md"
				/>
			</div>
			<div className="w-[40%] my-auto">
				<div className=" text-[var(--color-onPrimary)] px-[50px]">
					<h4 className="m-[5px] font-semibold text-sm text-[#dddddd]">{`${courseDetail.category1.name} > ${courseDetail.category2.name}`}</h4>
					<div className="m-[5px] flex items-end mb-8">
						<h2 className="text-3xl font-bold">{courseDetail.title}</h2>
						<p className="ml-4">{`강사: ${courseDetail.instructor} `}</p>
					</div>
					<h4 className="m-[5px] mb-8">{courseDetail.description}</h4>
					<div>
						{courseDetail.hashtags?.map((ele) => {
							return (
								<div
									key={ele}
									className="m-[0.2rem] font-bold inline bg-[#f0f0f0] text-[#696969] w-full py-0 px-[0.8rem] rounded-[3rem]"
								>{`#${ele}`}</div>
							);
						})}
					</div>

					<button
						className={`transition-all bg-[#7dad47] hover:bg-[#8dbd58] text-white text-xl border-0 rounded w-[150px] h-10 opacity-[${
							isEnrolled ? '0.6' : '1.0'
						}] cursor-[${isEnrolled ? 'none' : 'pointer'}]`}
						onClick={handleClick(isLoggedIn)}
						disabled={isEnrolled}
					>
						{isEnrolled ? '수강중' : '강좌 신청'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default CourseHeader;

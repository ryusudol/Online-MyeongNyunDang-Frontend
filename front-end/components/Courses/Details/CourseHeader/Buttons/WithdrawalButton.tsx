import React from 'react';
import { useRouter } from 'next/router';

import courseAPI from '../../../../../apis/Courses/courseApi';
import { HTTP_STATUS_CODE } from 'constants/http';

type PropsType = {
	courseId: number;
};

const WithdrawalButton = ({ courseId }: PropsType): JSX.Element => {
	const router = useRouter();

	const handleWithdrawalBtnClick = async () => {
		// Todo: 이후 킹고 로그인 도입되면 수강철회 시 본인 아이디 비밀번호 입력하는 방식으로 변경
		if (confirm('해당 강좌를 수강철회 하시겠습니까?')) {
			try {
				const res = await courseAPI.widthdrawCourse(courseId);

				if (res.statusCode === HTTP_STATUS_CODE.OK) router.reload();
			} catch (error) {
				alert('강좌 수강철회 과정에서 에러가 발생했습니다. 다시 시도해주세요.');
			}
		}
	};

	return (
		<button
			onClick={handleWithdrawalBtnClick}
			className="transition bg-red-500 rounded w-[100px] h-8 opacity-40 hover:opacity-100"
		>
			수강 철회
		</button>
	);
};

export default WithdrawalButton;

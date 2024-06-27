import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateForward } from '@fortawesome/free-solid-svg-icons';

import { ICourseRetrieveInfo } from 'types/Admin/Index';
import { ICourseOrdersInfo } from 'types/Admin/Index';
import adminAPI from '../../../apis/Admin/adminAPI';
import courseAPI from '../../../apis/Courses/courseApi';

type PropsType = {
	title: string;
	objs: ICourseOrdersInfo[];
	setCourses: (courses: ICourseRetrieveInfo[]) => void;
};

const CardHeader = ({ title, objs, setCourses }: PropsType): JSX.Element => {
	const [disabled, setDisabled] = useState(false);

	const onRefreshBtnClick = async () => {
		const courses = await courseAPI.updatePopularCourses();
		setCourses(courses);
		setDisabled(true);
		setTimeout(() => {
			setDisabled(false);
		}, 60 * 1000);
	};

	const onSaveClick = async () => {
		if (!objs || objs.length === 0) {
			alert('순서 값을 입력해주시기 바랍니다.');
			return;
		}

		const seen = new Set();
		const duplicates = objs.filter(
			(obj) => seen.size === seen.add(obj.sequence).size,
		);

		if (duplicates.length !== 0) {
			alert('강좌 순서 설정값 중 중복값이 있습니다. 재입력 해주시기 바랍니다.');
			return;
		}

		try {
			await adminAPI.sendPopularCourseOrders(objs);
			alert('편성 정보가 업데이트 되었습니다.');
		} catch (err) {
			throw new Error(
				'Error occured during updating main page course recommendation layout.',
			);
		}
	};

	return (
		<h3 className="flex justify-between pl-10 mb-10 text-3xl font-extrabold select-none">
			{title === '인기 컨텐츠' ? (
				<div>
					<button
						className="mr-4 rounded-full transition-transform hover:rotate-45 disabled:rotate-0 disabled:text-[var(--color-grey-300)]"
						onClick={onRefreshBtnClick}
						disabled={disabled}
					>
						<FontAwesomeIcon icon={faArrowRotateForward} />
					</button>
					<span>{title}</span>
				</div>
			) : (
				<span>{title}</span>
			)}
			<button
				onClick={onSaveClick}
				className="ml-6 p-2 px-4 text-lg font-semibold bg-[#b3df8c] rounded-lg hover:bg-[#b9c7ad] duration-150"
			>
				순서 저장
			</button>
		</h3>
	);
};

export default CardHeader;

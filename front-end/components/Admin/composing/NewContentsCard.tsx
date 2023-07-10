import React, { useState } from 'react';

import { ICourseOrdersInfo } from '../../../types/Admin/Index';
import { useNewCoursesFetch } from 'query/hooks/Admin/index';
import adminAPI from '../../../apis/Admin/adminAPI';

type PropsType = { title: string };

const NewContentsCard = ({ title }: PropsType) => {
	const { data: newContents, isLoading: isNewCoursesLoading } =
		useNewCoursesFetch();

	const [disabled, setDisabled] = useState<boolean>(false);
	const [objs, setObjs] = useState<Array<ICourseOrdersInfo>>([]);

	const onRefreshBtnClick = () => {
		if (!disabled) {
			setDisabled(true);
			setTimeout(() => {
				setDisabled(false);
			}, 60 * 1000);
			// Todo: react-query 불러올 것
		}
	};

	const onOrderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (
			e.target.valueAsNumber !== 1 &&
			e.target.valueAsNumber !== 2 &&
			e.target.valueAsNumber !== 3 &&
			e.target.valueAsNumber !== 4 &&
			e.target.valueAsNumber !== 5 &&
			e.target.value !== '' // For deletion
		) {
			alert('강좌 순서 값은 1에서 5 사이 값으로 입력해주시기 바랍니다.');
			e.target.value = '';
			return;
		}

		if (e.target.value === '') {
			// Todo: Delete an element corresponding to idx of the row.
		} else {
			const obj = {
				courseId: newContents![+e.target.id].id,
				order: 1,
				sequence: e.target.valueAsNumber,
			};
			const arr = [...objs];
			arr.push(obj);
			setObjs(arr);
		}
	};

	const onSaveClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
		const seen = new Set();
		const duplicates = objs.filter(
			(obj) => seen.size === seen.add(obj.sequence).size,
		);

		if (duplicates.length !== 0) {
			alert('강좌 순서 설정값 중 중복값이 있습니다. 재입력 해주시기 바랍니다.');
			return;
		}

		try {
			const res = await adminAPI.sendPopularCourseOrders(objs);
			console.log(res);
		} catch (err) {
			throw new Error(
				'Error occured during updating main page course recommendation layout.',
			);
		}
	};

	// Todo: loading UI 변경할 것
	if (isNewCoursesLoading) {
		return <h2>Loading . . .</h2>;
	}
	return (
		<div className="flex flex-col h-full p-10 bg-white shadow-xl rounded-xl">
			<h3 className="flex justify-between pl-10 mb-10 text-3xl font-extrabold select-none">
				<span>{title}</span>
				<button
					onClick={onSaveClick}
					className="ml-6 p-2 text-lg font-semibold bg-[#b3df8c] rounded-lg hover:bg-[#b9c7ad] duration-150"
				>
					순서 저장
				</button>
			</h3>
			<table className="w-full h-fit">
				<thead>
					<tr className="flex justify-center text-lg select-none">
						<th className="w-1/5">등록일자</th>
						<th className="w-1/3">강좌명</th>
						<th className="w-1/6 ">강사명</th>

						<th className="w-1/12">순서</th>
					</tr>
				</thead>
				<tbody className="flex flex-col">
					{newContents?.map((item, idx) => {
						return (
							<tr
								key={idx}
								className="flex items-center justify-center mt-6 text-center"
							>
								<td className="w-1/5">{item.createdAt.split('T')[0]}</td>
								<td className="w-1/3">{item.title}</td>
								<td className="w-1/6 ">{item.instructor}</td>
								<input
									placeholder={`${idx + 1}`}
									onChange={onOrderChange}
									className="w-1/12 text-center rounded-lg outline-none border-[1px] border-solid border-[#aeaeae]"
									id={`${idx}`}
									type="number"
									min="0"
									max="5"
								/>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default NewContentsCard;
import React, { useEffect, useState } from 'react';
import axiosInstance from 'apis';

const Curriculum = (): JSX.Element => {
	const courceId = 1;
	const [lectureData, setLectureData] = useState([
		{ title: '', lectures: [{ title: '', duration: 0, id: '', teacher: '' }] },
	]);

	useEffect(() => {
		const getLecture = async () => {
			const response = await axiosInstance(
				'/courses/' + courceId + '/lectures',
			);
			const data = await response.data;
			setLectureData(data);
		};
		getLecture();
	}, []);

	function leadingZeros(n: number | string, digits: number) {
		let zero = '';
		n = n.toString();

		if (n.length < digits) {
			for (let i = 0; i < digits - n.length; i++) zero += '0';
		}
		return zero + n;
	}

	return (
		<div className="w-4/5 m-auito py-[18px] px-[23px] font-[var(--font-NotoSans)]">
			<header className="m-0 mb-4 ml-[18px]">
				<div className="text-[0.5rem] text-[#c2c1c1] font-bold">CURRICULUM</div>
				<h2 className="m-0 text-[#393939] font-bold">강의 커리큘럼</h2>
			</header>
			{lectureData.map((ele) => {
				return (
					<table className="w-full text-[0.8rem]" key={ele.title + 'table'}>
						<thead>
							<tr
								className="h-12 border-solid text-[#404040]"
								key={ele.title + 'head'}
							>
								<th
									className="bg-[#e3e3e3] w-full text-left text-[#5d5c5c] pl-5"
									colSpan={5}
								>
									{ele.title}
								</th>
							</tr>
						</thead>
						<tbody>
							{ele.lectures.map((lecture) => {
								const hour =
									lecture.duration / 3600 < 1
										? ''
										: `${lecture.duration / 3600}:`;
								const duration = `${hour}${
									lecture.duration / 60
								}:${leadingZeros(lecture.duration % 60, 2)}`;
								return (
									<tr
										className="h-12 border-solid text-[#404040]"
										key={lecture.id + lecture.title}
									>
										<td className="text-center">{`${lecture.id}강`}</td>
										<td className="font-bold">{lecture.title}</td>
										<td>{lecture.teacher || '강사이름'}</td>
										<td>{duration}</td>
										<td className="text-right">버튼</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				);
			})}
		</div>
	);
};

export default Curriculum;

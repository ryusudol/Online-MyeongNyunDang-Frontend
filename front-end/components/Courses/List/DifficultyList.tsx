import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

interface ICardProps {
	// title: string;
	type: string[];
}

const DifficultyList = ({ type }: ICardProps): JSX.Element => {
	const router = useRouter();
	const initialRenderRef = useRef(false);
	const [checkedList, setCheckedList] = useState([false, false, false]);

	const handleClick = (index: number) => () => {
		setCheckedList((prev) =>
			prev.map((elem, idx) => (idx === index ? !elem : elem)),
		);
	};

	useEffect(() => {
		// skip first render
		if (!initialRenderRef.current) {
			initialRenderRef.current = true;
			return;
		}

		const difficulty = checkedList
			.reduce((acc: number[], cur, idx) => {
				if (cur) acc.push(idx + 1);
				return acc;
			}, [])
			.join(',');

		const query: { difficulty?: string } = {
			...router.query,
			difficulty,
		};

		if (!difficulty) delete query.difficulty;

		router.push({
			pathname: '/courses',
			query,
		});
	}, [checkedList, router]);

	return (
		// 가운데 정렬
		// <div className="my-5 px-5 flex rounded-md focus:outline-none space-x-4">
		<div className="my-5 px-2 flex place-content-center rounded-md focus:outline-none space-x-4">
			{type.map((x, index) => (
				<label
					className={`border-[1.5px] rounded-full px-3 py-1 inline-flex items-center 
					 ${
							checkedList[index]
								? 'text-[var(--color-mrgreen-5)] border-[var(--color-mrgreen-5)] hover:bg-[var(--color-mrgreen-0)]'
								: 'text-[var(--color-dark-2)] border-[var(--color-gray-3)] hover:bg-[var(--color-gray-1)]'
						} 
					`}
					key={x}
				>
					<span className="absolute w-1 h-1 overflow-hidden ">
						<input
							className="opacity-0"
							type="checkbox"
							onClick={handleClick(index)}
							name={x}
						/>
					</span>
					{x}
				</label>
			))}
		</div>
	);
};

export default DifficultyList;

import React, { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { BiSearch } from 'react-icons/bi';

const TopSearchbar = (): JSX.Element => {
	const router = useRouter();
	const { keyword } = router.query as { keyword: string };

	const [text, setText] = useState('');
	const [isClicked, setIsClicked] = useState(false);

	useEffect(() => {
		if (!router.isReady) return;

		keyword ? setText(keyword) : setText('');
	}, [router.isReady, keyword]);

	const handleSearchClick = async (e: FormEvent) => {
		e.preventDefault();

		if (!text) return;

		const query = { ...router.query, keyword: text };
		router.push({
			pathname: '/courses',
			query,
		});
	};

	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
	};

	const handleInputFocus = () => {
		setIsClicked(true);
	};

	return (
		<div className="flex px-5 mt-8 gap-x-5 place-content-center mb-14">
			<form
				className={`${
					isClicked ? 'border-[var(--color-mrgreen-9)] opacity-60' : ''
				} rounded-[36px] min-w-[500px] h-12 flex border-solid border-2`}
				onSubmit={handleSearchClick}
			>
				<input
					className="px-10 w-full h-full text-2xl focus:outline-0 min-w-[500px] rounded-[36px] bg-transparent"
					type="text"
					value={text}
					placeholder="강좌명 검색"
					onChange={handleChangeInput}
					onFocus={handleInputFocus}
					onBlur={() => setIsClicked(false)}
				/>
				<button
					className="w-full h-full px-4 py-1 cursor-pointer"
					onClick={handleSearchClick}
				>
					<BiSearch
						className={`${
							isClicked ? 'text-[var(--color-mrgreen-9)]' : 'opacity-60'
						} `}
						size="30"
					/>
				</button>
			</form>
		</div>
	);
};

export default TopSearchbar;

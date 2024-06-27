import React, { useState, ReactElement } from 'react';
import Link from 'next/dist/client/link';

import menus from 'constants/MyPage/myPageMenus';

type PropsType = {
	children: ReactElement[] | ReactElement<string> | string;
};

const MyPageLayout = ({ children }: PropsType): JSX.Element => {
	const [isClicked, setIsClicked] = useState(menus[0].title);

	const handleMenuClick = (event: string) => {
		setIsClicked(event);
	};

	const handleSidebarBtnStyle = (open: boolean) => {
		const selected = 'bg-white text-[var(--color-onSurface)]';
		const notSelected =
			'transition-all relative left-0 hover:left-0.5 hover:text-white';
		let sidebarBtnBasicStyle =
			'text-[var(--color-onPrimary-200)] rounded-tl-lg rounded-bl-lg mb-12 px-4 py-2 text-xl font-bold w-full text-start cursor-pointer ';
		open
			? (sidebarBtnBasicStyle += selected)
			: (sidebarBtnBasicStyle += notSelected);
		return sidebarBtnBasicStyle;
	};

	return (
		<div className="w-full h-full flex flex-col my-0 mx-auto font-['Noto Sans KR']">
			<h2 className="select-none w-full bg-[var(--color-Primary)] p-8 font-['Gugi'] text-2xl text-white border-b-2 border-solid border-[var(--color-Background)]">
				{`마이페이지 > ${isClicked}`}
			</h2>
			<div className="flex">
				<div className="min-h-screen w-1/6 bg-[var(--color-Primary)] min-w-[280px]">
					<ul className="flex flex-col justify-start h-full p-12 pr-0">
						{menus.map((menu, idx) => (
							<li
								key={idx}
								className="relative w-full"
								onClick={() => handleMenuClick(menu.title)}
							>
								<Link href={menu.path}>
									<div
										className={handleSidebarBtnStyle(isClicked === menu.title)}
									>
										<span>{menu.title}</span>
									</div>
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="w-full tbl:w-[80%] bg-[var(--color-Surface)]">
					{children}
				</div>
			</div>
		</div>
	);
};

export default MyPageLayout;

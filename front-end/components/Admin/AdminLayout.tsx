import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import menus from '../../constants/Admin/index';

type PropsType = {
	children: React.ReactNode;
};

const AdminLayout = ({ children }: PropsType): JSX.Element => {
	const router = useRouter();
	const adminPath = router.pathname.split('/')[2];
	const title =
		adminPath === 'management'
			? '편성'
			: adminPath === 'contents'
			? '강좌관리'
			: '공지사항관리';

	const handleSidebarBtnStyle = (open: boolean) => {
		const selected =
			' bg-[var(--color-onPrimary)] text-[var(--color-onSurface)] select-none';
		const notSelected =
			' transition-all relative left-0 hover:left-0.5 hover:text-white';
		let sidebarBtnBasicStyle =
			'text-[var(--color-onPrimary-200)] rounded-tl-lg rounded-bl-lg mb-12 px-4 py-2 text-xl font-bold w-full text-start cursor-pointer';
		open
			? (sidebarBtnBasicStyle += selected)
			: (sidebarBtnBasicStyle += notSelected);
		return sidebarBtnBasicStyle;
	};

	return (
		<section className="min-h-full">
			<h2 className="select-none w-full bg-[var(--color-Primary)] p-8 font-['Gugi'] text-2xl text-white border-b-2 border-solid border-[var(--color-Background)]">
				{`Admin > ${title}`}
			</h2>
			<div className="flex min-h-screen">
				<div className="w-1/6 min-h-full bg-[var(--color-Primary)] min-w-[280px]">
					<ul className="flex flex-col items-start justify-start h-full p-12 pr-0">
						{menus.map((menu, idx) => {
							return (
								<li
									id={idx.toString()}
									className="relative w-full"
									key={menu.title}
								>
									<Link href={`/admin/${menu.path}`} passHref>
										<div
											className={handleSidebarBtnStyle(menu.path === adminPath)}
										>
											<FontAwesomeIcon icon={menu.icon} className="mr-4" />
											{menu.title}
										</div>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
				{children}
			</div>
		</section>
	);
};

export default AdminLayout;

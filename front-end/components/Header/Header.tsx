import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { userLoginAuthState } from 'constants/commonState';
import { selectIsLoggined } from 'store/feature/common/commonSelector';
import { useModal } from '../../query/hooks/useModal';
import UpperHeader from './UpperHeader';

const btnStyle =
	'text-lg font-semibold cursor-pointer no-underline decoration-black transition-colors hover:text-[var(--color-green-300)]';

const Header = (): JSX.Element => {
	const router = useRouter();
	const isLoggedIn = useSelector(selectIsLoggined);
	const { showModal, onOpenLoginModal, onOpenSignUp, renderModal } = useModal();

	const onMyPageClick = () => {
		if (isLoggedIn === userLoginAuthState.LOGGINED)
			router.push('/my-page/profile');
		else onOpenLoginModal();
	};

	return (
		<header>
			<UpperHeader
				onOpenLoginModal={onOpenLoginModal}
				onOpenSignUpModal={onOpenSignUp}
			/>
			<div className="dt:py-0 dt:px-[10px] mt-10 flex justify-around items-center mb-4 text-[var(--color-onBackground-300)]">
				<div className="flex items-center justify-between w-full px-[10%]">
					<Link href="/" passHref>
						<span className="text-[2rem] cursor-pointer font-['Gugi']">
							온라인명륜당
						</span>
					</Link>
					<ul className="flex list-none dt:mx-3">
						<li className="mx-8 list-none">
							<Link href="/courses" passHref>
								<span className={btnStyle}>강좌목록</span>
							</Link>
						</li>
						<li className="mx-8 list-none">
							<Link href="/notices" passHref>
								<span className={btnStyle}>공지사항</span>
							</Link>
						</li>
						<li className="mx-8 list-none">
							<Link href="/internship" passHref>
								<span className={btnStyle}>인턴십</span>
							</Link>
						</li>
						<li className="mx-8 list-none">
							<button onClick={onMyPageClick}>
								<span className={btnStyle}>마이페이지</span>
							</button>
						</li>
					</ul>
				</div>
				{showModal && renderModal()}
			</div>
		</header>
	);
};

export default Header;

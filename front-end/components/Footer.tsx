import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { DEVICE_BREAKPOINT } from 'constants/breakpoint';

const Footer = (): JSX.Element => {
	return (
		<footer className="flex justify-center items-center min-w-[desktop] bg-[#323232] text-[#fefefe] p-4">
			<div
				className="flex justify-between"
				style={{ width: DEVICE_BREAKPOINT.DESKTOP }}
			>
				<div className="m-[34px]">
					<div className="flex mb-8">
						<Image
							src="/images/main_logo.png"
							alt="Main Logo Image"
							width={158}
							height={48}
						/>
						<div className="font-[Gugi] text-[2rem] my-0 ml-[20px] text-[#c7c6c6]">
							온라인 명륜당
						</div>
					</div>
					<p className="mb-1">성균관대학교 소프트웨어융합대학</p>
					<p className="mb-1">
						경기도 수원시 장안구 서부로 2066 성균관대학교 자연과학캠퍼스
					</p>
					<p>
						소프트웨어융합대학 Copyrght ⓒ 2022 SUNGKYUNKWAN UNIVERSITY ALL
						RIGHTS RESERVED.
					</p>
				</div>
				<div className="m-[34px] mt-11">
					<Link href="https://www.skku.edu/skku/etc/pop_email.do" passHref>
						<span className="text-[#fefefe] no-underline cursor-pointer">
							이메일
						</span>
					</Link>
					<span className="m-4">|</span>
					<Link href="https://www.skku.edu/skku/etc/pop_email.do" passHref>
						<span className="text-[#fefefe] no-underline cursor-pointer">
							무단수집거부
						</span>
					</Link>
					<span className="m-4">|</span>
					<Link href="https://www.skku.edu/skku/etc/private.do" passHref>
						<span className="text-[#fefefe] no-underline cursor-pointer">
							개인정보처리방침
						</span>
					</Link>
					<span className="m-4">|</span>
					<Link href="/" passHref>
						<span className="text-[#fefefe] no-underline cursor-pointer uppercase">
							contact us
						</span>
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

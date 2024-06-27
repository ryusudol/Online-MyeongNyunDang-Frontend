import React from 'react';
import Image from 'next/image';

const listStyle =
	'border-solid border-[#dfdfdf] text-[#393939] text-[0.95rem] my-[3px] mx-0';

const LectureIntroduction = (): JSX.Element => {
	return (
		<div className='w-full py-[18px] px-[23px] font-["Noto Sans KR"] border-solid border-[#dfdfdf]'>
			<div className="text-[0.5rem] text-[#c2c1c1] font-bold">OVERVIEW</div>
			<h2 className="m-0 text-[#393939] font-bold ">강의 소개</h2>
			<hr />
			<h1 className="m-0 text-[#393939]">실전! 스프링 부트와 JPA 활용1</h1>
			<h3 className="m-0 text-[#393939]">
				초급자 대상의 스프링부트를 활용한 백엔드/웹 개발 강의입니다.{' '}
			</h3>
			<p className="text-[#bcbcbc] text-[0.8rem] font-bold">
				실무에 가까운 예제로, 스프링 부트와 JPA를 활용해서 웹 애플리케이션을
				설계하고 개발합니다. 이 과정을 통해{' '}
			</p>
			<div className="my-[10px] mx-0">
				<Image
					src="/images/check.png"
					width={300}
					height={300}
					alt="Check Img"
				/>
				<span className="text-[#393939] font-bold text-[1.4rem]">
					이런걸 배워요
				</span>
			</div>
			<ul className="m-0 p-0 pl-[15px]">
				<li className={listStyle}>
					스프링 부트와 JPA를 활용해서 실무에서 자바 웰 애플리케이션을 개발할 수
					있습니다.
				</li>
				<li className={listStyle}>
					스프링 부트와 JPA를 활용해서 실무에서 자바 웰 애플리케이션을 개발할 수
					있습니다.
				</li>
				<li className={listStyle}>
					스프링 부트와 JPA를 활용해서 실무에서 자바 웰 애플리케이션을 개발할 수
					있습니다.
				</li>
				<li className={listStyle}>
					스프링 부트와 JPA를 활용해서 실무에서 자바 웰 애플리케이션을 개발할 수
					있습니다.
				</li>
			</ul>
		</div>
	);
};

export default LectureIntroduction;

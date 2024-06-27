import React from 'react';
import Image from 'next/image';

const LearningStatus = (): JSX.Element => {
	return (
		<div className="w-full py-[18px] px-[23px] bg-[#343535] text-white font-['Noto Sans KR'] font-thin">
			<div className="text-[#9a9a9a] text-[0.5rem] font-bold">
				progress in learning
			</div>
			<div className="text-base font-bold text-white">나의 학습 상황</div>
			<div className="flex justify-around">
				<div className="mt-[13px]">
					<div className="flex text-center">
						<Image
							src="/images/complete-course.png"
							className="m-0 mr-[13px] w-8 h-8"
							alt="badge"
						/>
						<div className="text-[1.3rem]">
							<span className="font-bold">14</span> / 36
						</div>
					</div>
					<div className="text-center">완료한 수업</div>
				</div>
				<div className="mt-[13px]">
					<div className="flex text-center">
						<Image
							src="/images/total-learning-time.png"
							className="m-0 mr-[13px] w-8 h-8"
							alt="badge"
						/>
						<div className="text-[1.3rem]">
							<span className="font-bold">2</span>h{' '}
							<span className="font-bold">53</span>m
						</div>
					</div>
					<div className="text-center">총 학습시간</div>
				</div>
				<div className="mt-[13px]">
					<div className="flex text-center">
						<Image
							src="/images/complete-rate.png"
							className="m-0 mr-[13px] w-8 h-8"
							alt="badge"
						/>
						<div className="text-[1.3rem]">
							{' '}
							<span className="font-bold">53 </span>%
						</div>
					</div>
					<div className="text-center">학습 달성율</div>
				</div>
			</div>
		</div>
	);
};

export default LearningStatus;

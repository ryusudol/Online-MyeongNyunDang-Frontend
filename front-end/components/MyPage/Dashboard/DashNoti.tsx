import React from 'react';

const DashNoti = (): JSX.Element => {
	return (
		<div>
			<div>
				<div className="flex text-[#393939] font-['Noto Sans KR'] text-[0.8rem] border-none">
					<ul className="w-full p-0 list-none">
						<li className="w-full p-[0.3rem] border-solid border-[#e2e2e2] border-b-2">
							<span className="overflow-hidden text-ellipsis">
								질문에 대한 답변이 등록되었습니다. 프로필이 수정
							</span>
						</li>
						<li className="w-full p-[0.3rem] border-solid border-[#e2e2e2] border-b-2">
							<span className="overflow-hidden text-ellipsis">
								수강중인 React입문 강좌에 새 강의가 등록되었습니
							</span>
						</li>
						<li className="w-full p-[0.3rem] border-solid border-[#e2e2e2] border-b-2">
							<span className="overflow-hidden text-ellipsis">
								수강중인 React입문 강좌에 새 강의가 등록되었습니
							</span>
						</li>
						<li className="w-full p-[0.3rem] border-solid border-[#e2e2e2] border-b-2">
							<span className="overflow-hidden text-ellipsis">
								수강중인 React입문 강좌에 새 강의가 등록되었습니
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default DashNoti;

// const Container = styled.div`
// 	.profile-img {
// 		width: 40%;
// 	}
// 	.user {
// 		font-weight: bold;
// 	}
// `;

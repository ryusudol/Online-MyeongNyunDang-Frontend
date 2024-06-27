import React, { ReactElement } from 'react';
import Image from 'next/image';

const SignupMailSuccess = (): ReactElement => {
	return (
		<div className="w-full h-full flex justify-center items-center bg-[#f0f0f0]">
			<div className="flex flex-col justify-center items-center pb-[50px] w-[600px] h-[450px] bg-white rounded-[30px]">
				<Image src="/images/mail.png" width={360} height={330} alt="mail" />
				<h1>회원가입을 환영합니다!</h1>
				<div>이메일 인증을 위한 메일이 발송되었습니다.</div>
				<div>회원가입 완료를 위해 이메일의 링크를 클릭해주세요.</div>
			</div>
		</div>
	);
};

export default SignupMailSuccess;

import React from 'react';
import Image from 'next/image';

const LoginMailSuccess = (): JSX.Element => {
	return (
		<div className="w-full h-full flex justify-center items-center bg-[#f0f0f0]">
			<div className="flex flex-col justify-center items-center pb-[50px] w-[600px] h-[450px] bg-white rounded-[30px]">
				<Image src="/images/mail.png" width={360} height={330} alt="mail" />
				<h1>로그인 메일이 발송되었습니다!</h1>
				<div>이메일의 링크를 클릭하여 로그인 할 수 있습니다.</div>
			</div>
		</div>
	);
};

export default LoginMailSuccess;

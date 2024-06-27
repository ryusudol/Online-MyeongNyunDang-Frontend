import React, { ReactElement } from 'react';
import Image from 'next/image';

const SignupMailFailed = (): ReactElement => {
	return (
		<div className="w-full h-full flex justify-center items-center bg-[#f0f0f0]">
			<div className="flex flex-col justify-center items-center pb-[50px] w-[600px] h-[450px] bg-white rounded-[30px]">
				<Image
					src="/images/mail_failed.jpg"
					width={400}
					height={360}
					alt="mail failed"
				/>
				<h1>이메일이 발송되지 않았습니다</h1>
				<div>이메일 주소를 확인 후 다시 가입해주세요.</div>
			</div>
		</div>
	);
};

export default SignupMailFailed;

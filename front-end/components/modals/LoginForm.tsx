import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { sendLogInRequest } from 'apis/LogIn/logInApi';
import { fetchEmailCheck } from 'apis/SignUp/signUpApi';

type PropsType = {
	onClose: () => void;
	onOpenSignUp: () => void;
};

//이메일 값 받기
//값없으면 disabled
function LoginForm({ onClose, onOpenSignUp }: PropsType): JSX.Element {
	const router = useRouter();

	const [sendingMail, setSendingMail] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const email: string = e.currentTarget.email.value;

		if (!email) {
			alert('이메일 주소를 입력하세요');
			return;
		}
		setSendingMail(true);
		try {
			const res = await fetchEmailCheck(email);
			if (res.data.statusCode === 200) {
				setSendingMail(false);
				alert('가입되지 않은 이메일 입니다.');
				return;
			} else throw new Error('Wrong status code from response or no response');
		} catch (e: unknown) {
			console.log('Error');
		}

		try {
			const res = await sendLogInRequest(email);
			if (res.data.success === true) {
				router.push('/auth/login/mail-success');
				onClose();
			} else {
				router.push('/auth/login/mail-failed');
				onClose();
			}
		} catch (e: unknown) {
			console.log('Error');
		}
	};

	const handleOpenSignUpClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		onClose();
		onOpenSignUp();
	};

	return (
		<>
			{sendingMail ? (
				<div className="flex justify-center items-center h-[300px]">
					<Image
						src="/images/loading.gif"
						alt="loading"
						width={100}
						height={100}
					/>
				</div>
			) : (
				<div className="flex flex-col justify-between h-[150px] mt-[50px]">
					<form onSubmit={handleSubmit}>
						<label htmlFor="email" className="font-bold">
							이메일
						</label>
						<input
							className="relative overflow-hidden w-full h-10 my-2 py-[5px] pr-[39px] pl-[11px] border-[1px] border-solid border-slate-400 rounded-[5px] bg-white box-border"
							id="email"
							name="email"
							placeholder="로그인할 이메일을 입력해주세요"
						/>
						<button
							type="submit"
							className="text-lg font-bold leading-[49px] block w-full h-[49px] mt-5 cursor-pointer text-center text-white border-none rounded-[5px] bg-[#94c865]/[0.9]"
						>
							로그인
						</button>
					</form>
					<hr />
					<div className="flex mt-2 h-[60px] py-0 px-10 justify-evenly items-center">
						처음이신가요?{' '}
						<span
							className="font-bold cursor-pointer"
							onClick={handleOpenSignUpClick}
						>
							회원가입
						</span>
					</div>
				</div>
			)}
		</>
	);
}

export default LoginForm;

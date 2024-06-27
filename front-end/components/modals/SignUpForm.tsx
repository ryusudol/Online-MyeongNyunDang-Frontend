import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import {
	fetchEmailCheck,
	fetchNicknameCheck,
	sendSignUpRequest,
} from 'apis/SignUp/signUpApi';

enum CHECK_STATUS {
	NONE = 0,
	CHECKED = 1,
	CONFLICT = 2,
}

type PropsType = {
	onClose: () => void;
};

//이메일 닉네임 값 받기
//값없으면 disabled
function SignUpForm({ onClose }: PropsType): JSX.Element {
	const router = useRouter();

	// 0: 중복, 1: 중복확인 통과, 2: 초기 상태
	const [emailUnique, setEmailUnique] = useState(CHECK_STATUS.NONE);
	const [nicknameUnique, setNicknameUnique] = useState(CHECK_STATUS.NONE);

	const [emailValue, setEmailValue] = useState('');
	const [nicknameValue, setNicknameValue] = useState('');

	const [sendingMail, setSendingMail] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (
			!(
				emailUnique === CHECK_STATUS.CHECKED &&
				nicknameUnique === CHECK_STATUS.CHECKED
			)
		) {
			alert('이메일 주소 및 닉네임의 중복 확인이 필요합니다.');
			return;
		}

		const email: string = e.currentTarget.email.value;
		const nickname: string = e.currentTarget.nickname.value;
		setSendingMail(true);

		try {
			const res = await sendSignUpRequest(email, nickname);
			if (res.data.success === true) {
				router.push('/auth/signup/mail-success');
				onClose();
			} else {
				router.push('/auth/signup/mail-failed');
				onClose();
			}
		} catch (e: unknown) {
			console.log('Error');
		}
	};

	const handleChange =
		(
			setValue: React.Dispatch<React.SetStateAction<string>>,
			setUnique: React.Dispatch<React.SetStateAction<CHECK_STATUS>>,
		) =>
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setValue(e.target.value);
			setUnique(CHECK_STATUS.NONE);
		};

	const handleClickEmailCheck = async (
		e: React.MouseEvent<HTMLButtonElement>,
	) => {
		e.preventDefault();
		if (!emailValue) return;
		try {
			const res = await fetchEmailCheck(emailValue);
			if (res.data.statusCode === 200) setEmailUnique(CHECK_STATUS.CHECKED);
			else if (res.data.statusCode === 409)
				setEmailUnique(CHECK_STATUS.CONFLICT);
			else throw new Error('Wrong status code from response or no response');
		} catch (e: unknown) {
			console.log('Error');
		}
	};

	const handleClickNicknameCheck = async (
		e: React.MouseEvent<HTMLButtonElement>,
	) => {
		e.preventDefault();
		if (!nicknameValue) return;
		try {
			const res = await fetchNicknameCheck(nicknameValue);
			if (res.data.statusCode === 200) setNicknameUnique(CHECK_STATUS.CHECKED);
			else if (res.data.statusCode === 409)
				setNicknameUnique(CHECK_STATUS.CONFLICT);
			else throw new Error('Wrong status code from response or no response');
		} catch (e: unknown) {
			console.log('Error');
		}
	};

	return (
		<>
			{sendingMail ? (
				<div className="flex justify-center items-center h-[400px]">
					<Image
						className="w-[100px]"
						width={300}
						height={300}
						src="https://mblogthumb-phinf.pstatic.net/MjAxODEwMjNfNjAg/MDAxNTQwMjg2OTk2NTcw.mfWKPtzKVO1mJaBBIFKIkVBlMQQIF1Vc-yrlbbGaoP0g.KNJWAgMmhsfQrZI3n0UT-LMi_qpHAZls4qPMvbNaJBcg.GIF.chingguhl/Spinner-1s-200px.gif?type=w800"
						alt="loading"
					/>
				</div>
			) : (
				<form onSubmit={handleSubmit}>
					<div className="flex flex-col justify-between h-[330px] mt-[50px]">
						<div className="flex flex-col justify-between h-[110px]">
							<label htmlFor="email" className="font-bold">
								이메일
							</label>
							<input
								className="relative box-border rounded-[5px] bg-white overflow-hidden w-full h-10 mx-0 mt-0 mb-2 py-[5px] pr-[39px] pl-[11px] border-[1px] border-solid border-slate-400"
								id="email"
								name="email"
								type="email"
								placeholder="이메일을 입력해주세요"
								onChange={handleChange(setEmailValue, setEmailUnique)}
							/>
							<div className="flex flex-row-reverse">
								<button
									className="hover:text-black/[0.6] duration-150 w-[80px] font-normal leading-5 rounded-[3px] bg-[#fcfcfc]"
									onClick={handleClickEmailCheck}
								>
									중복 체크
								</button>
								<span className="pr-[10px] align-middle">
									{emailUnique === CHECK_STATUS.NONE ? null : emailUnique ===
									  CHECK_STATUS.CHECKED ? (
										<span className="font-green-400 align-middle">
											사용 가능한 이메일입니다.
										</span>
									) : (
										<span className="text-red-500 align-middle">
											이미 사용 중인 이메일입니다.
										</span>
									)}
								</span>
							</div>
						</div>

						<div className="flex flex-col justify-between h-[110px]">
							<label htmlFor="nickname" className="font-bold">
								닉네임
							</label>
							<input
								className="relative box-border rounded-[5px] bg-white overflow-hidden w-full h-10 mx-0 mt-0 mb-2 py-[5px] pr-[39px] pl-[11px] border-[1px] border-solid border-slate-400"
								id="nickname"
								name="nickname"
								placeholder="닉네임을 입력해주세요"
								onChange={handleChange(setNicknameValue, setNicknameUnique)}
							/>
							<div className="flex flex-row-reverse">
								<button
									className="hover:text-black/[0.6] duration-150 w-[80px] font-normal leading-5 rounded-[3px] bg-[#fcfcfc]"
									onClick={handleClickNicknameCheck}
								>
									중복 체크
								</button>
								<span className="pr-[10px] align-middle">
									{nicknameUnique ===
									CHECK_STATUS.NONE ? null : nicknameUnique ===
									  CHECK_STATUS.CHECKED ? (
										<span className="font-green-400 align-middle">
											사용 가능한 닉네임입니다.
										</span>
									) : (
										<span className="text-red-500 align-middle">
											이미 사용 중인 닉네임입니다.
										</span>
									)}
								</span>
							</div>
						</div>

						<button
							className="bg-[#94c865]/[0.9] text-lg font-bold leading-[49px] block w-full h-[49px] mt-5 cursor-pointer text-center text-white border-none rounded-[5px]"
							type="submit"
						>
							회원가입
						</button>
					</div>
				</form>
			)}
		</>
	);
}

export default SignUpForm;

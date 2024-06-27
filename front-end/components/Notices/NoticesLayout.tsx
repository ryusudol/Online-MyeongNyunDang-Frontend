import React, { ReactElement } from 'react';

type PropsType = {
	children: ReactElement[] | ReactElement<string> | string;
};

const NoticesLayout = ({ children }: PropsType): JSX.Element => {
	return (
		<div className="w-full h-full flex flex-col my-0 mx-auto font-['Noto Sans KR']">
			<h2 className="select-none w-full bg-[var(--color-Primary)] p-8 font-['Gugi'] text-2xl text-white border-b-2 border-solid border-[var(--color-Background)]">
				{'공지사항'}
			</h2>
			<div className="flex w-full tbl:w-[80%] bg-[var(--color-Surface)] bg-white">
				{children}
			</div>
		</div>
	);
};

export default NoticesLayout;

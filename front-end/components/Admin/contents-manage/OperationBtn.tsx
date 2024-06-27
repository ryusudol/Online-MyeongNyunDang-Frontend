import React from 'react';

type PropsType = {
	oper: boolean;
	onChangeOper: () => void;
};

const OperationBtn = ({ oper, onChangeOper }: PropsType): JSX.Element => {
	return (
		<button
			onClick={onChangeOper}
			className="text-xl font-semibold rounded-lg bg-[#b3df8c] py-2 px-4 shadow-lg transition hover:bg-[#b9c7ad]"
		>
			{oper ? '운영 中' : '미운영'}
		</button>
	);
};

export default OperationBtn;

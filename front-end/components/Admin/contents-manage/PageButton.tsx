import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

type PropsType = {
	id: string;
	onBtnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	icon: IconDefinition;
};

const PageButton = ({ id, onBtnClick, icon }: PropsType): JSX.Element => {
	return (
		<button id={id} onClick={onBtnClick} className="mx-4">
			<FontAwesomeIcon icon={icon} />
		</button>
	);
};

export default PageButton;

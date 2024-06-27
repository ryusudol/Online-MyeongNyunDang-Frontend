import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { curations } from 'constants/mainCuration';

const CurationFloatingBar = (): JSX.Element => {
	return (
		<>
			<ul className="mt-12 flex text-[#232323] rounded-xl items-center justify-center text-center text-[var(--color-Background)] px-2">
				{curations.map((info, index) => (
					<li key={index} className="min-w-[130px] mx-3">
						<a
							key={index}
							href={info.url}
							className="flex flex-col items-center justify-center"
						>
							<FontAwesomeIcon
								icon={info.logoIconImage}
								className={`w-16 h-16 my-2 hover:scale-[1.08] transition`}
								style={{ color: `${info.color}` }}
							/>
							<span>{info.category}</span>
						</a>
					</li>
				))}
			</ul>
		</>
	);
};

export default CurationFloatingBar;

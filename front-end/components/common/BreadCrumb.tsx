import React from 'react';

// category > menu1 > menu2
interface IBreadCrumb {
	category: string;
	menu?: string[];
	categoryColor?: string;
	containerPadding?: string;
}

const BreadCrumb = ({ category, menu = [], containerPadding }: IBreadCrumb) => {
	return (
		<div
			className={`flex text-2xl text-[var(--color-onBackground-100)] ${containerPadding} `}
		>
			<div>{category}</div>
			{menu.length > 0 &&
				menu.map((elem, idx) => (
					<span key={idx}>
						<span className="pl-2 opacity-70">&gt;</span>
						<span className="pl-2 text-[var(--color-onBackground)]">
							{elem}
						</span>
					</span>
				))}
		</div>
	);
};

export default React.memo(BreadCrumb);

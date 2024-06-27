import {
	faChartSimple,
	faBookOpen,
	faBullhorn,
} from '@fortawesome/free-solid-svg-icons';

const menus = [
	{
		title: '편성',
		path: 'management',
		icon: faChartSimple,
	},
	{
		title: '강좌관리',
		path: 'contents',
		icon: faBookOpen,
	},
	{
		title: '공지사항관리',
		path: 'notification',
		icon: faBullhorn,
	},
];

export default menus;

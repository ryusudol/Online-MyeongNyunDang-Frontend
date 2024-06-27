import { MYPAGE_PATH, MYPAGE_MENU } from '.';

const root = '/my-page';

const menus = [
	{
		title: MYPAGE_MENU.RECENT_WATCHING_LECTURES,
		path: `${root}/${MYPAGE_PATH.HISTORY}`,
	},
	{
		title: MYPAGE_MENU.CURRENT_WATCHING_LECTURES,
		path: `${root}/${MYPAGE_PATH.LEARNING}`,
	},
	{
		title: MYPAGE_MENU.COMPLETED_WATCHING_LECTURES,
		path: `${root}/${MYPAGE_PATH.COMPLETED}`,
	},
	{
		title: MYPAGE_MENU.MY_QNA,
		path: `${root}/${MYPAGE_PATH.MY_QNA}`,
	},
	{
		title: MYPAGE_MENU.BOOKMARK,
		path: `${root}/${MYPAGE_PATH.BOOKMARK}`,
	},
];

export default menus;

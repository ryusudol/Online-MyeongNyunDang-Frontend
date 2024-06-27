import {
	faBrain,
	faLaptopCode,
	faWindowRestore,
	faBookOpen,
	faDatabase,
} from '@fortawesome/free-solid-svg-icons';

export const curations = [
	{
		category: '인공지능',
		url: './courses?category2sId=1',
		logoIconImage: faBrain,
		// color: '#ac92eb',
		color: '#00000090',
	},
	{
		category: '데이터 사이언스',
		url: './courses?category2sId=3',
		logoIconImage: faDatabase,
		// color: '#4fc1e8',
		color: '#00000090',
	},

	{
		category: '소프트웨어 공학',
		url: './courses?category2sId=5',
		logoIconImage: faWindowRestore,
		// color: '#a0d568',
		color: '#00000090',
	},
	{
		category: '개발/프로그래밍',
		url: './courses?category2sId=7',
		logoIconImage: faLaptopCode,
		// color: '#ffce54',
		color: '#00000090',
	},
	{
		category: '교양',
		url: './courses?category2sId=9',
		logoIconImage: faBookOpen,
		// color: '#ed5564',
		color: '#00000090',
	},
];

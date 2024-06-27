/** @type {import('next').NextConfig} */
const path = require('path');
const withImages = require('next-images');
module.exports = withImages();

module.exports = {
	typescript: {
		// TODO : 타입 다 채워서 이거 빼고도 빌드 되어야함.
		ignoreBuildErrors: true,
	},
	reactStrictMode: true,
	images: {
		default: 'fill',
		domains: [
			'mrdang-lectures.s3.ap-northeast-2.amazonaws.com',
			'mblogthumb-phinf.pstatic.net',
		],
		disableStaticImages: true,
	},
	webpack(config, options) {
		config.resolve = {
			alias: {
				'@apis': path.join(__dirname, 'apis'),
				'@components': path.join(__dirname, 'components'),
				'@interfaces': path.join(__dirname, 'interfaces'),
			},
			...config.resolve,
		};
		return config;
	},

	async redirects() {
		return [
			{
				source: '/my-page',
				destination: '/my-page/history',
				permanent: true,
			},
		];
	},
};

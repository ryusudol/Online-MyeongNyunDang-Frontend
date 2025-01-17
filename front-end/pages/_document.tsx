import React, { ReactElement } from 'react';
import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<{
		styles: JSX.Element;
		html: string;
		head?: (JSX.Element | null)[] | undefined;
	}> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;
		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});
			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render(): ReactElement {
		return (
			<Html>
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Gugi&family=Noto+Sans+KR&display=swap"
						rel="stylesheet"
					/>
					<style>{`body { margin: 0 } /* custom! */`}</style>
				</Head>
				<body>
					<Main />
					<NextScript />
					<div id="modal-root"></div>
				</body>
			</Html>
		);
	}
}

/** @format */

import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import Favicon from '@components/Favicon/Favicon'

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)

		return initialProps
	}

	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta charSet='utf-8' />
					<meta name='description' content='Breve descripción de la app' />
					<meta name='robots' content='index-follow' />
					<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
					<Favicon />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument

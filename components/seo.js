import Head from 'next/head';

export function SearchEngineOptimization({ title, description, article, image }) {
	const defaultDescription = 'Blogging about everything dev.';

	return (
		<Head>
			<title>{[title, 'Ondrej Sevcik'].filter((t) => t).join(' | ')}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="description" content={description || defaultDescription} />
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
		</Head>
	);
}

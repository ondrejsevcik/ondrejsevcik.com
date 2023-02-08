import Script from 'next/script';

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Script
				defer
				data-domain="ondrejsevcik.com"
				data-api="/hello/api/event"
				src="/hello/js/script.js"
			/>
			<Component {...pageProps} />
		</>
	);
}

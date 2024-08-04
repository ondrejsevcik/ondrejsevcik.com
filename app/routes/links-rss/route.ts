import type { LoaderFunctionArgs } from "@vercel/remix"; // or cloudflare/deno
import { getRssFeedContent } from "./getRssFeedContent";

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const feedContent = getRssFeedContent();
	const headers = new Headers(request.headers);
	headers.set("Content-Type", "text/xml");
	headers.set("Cache-Control", "public, max-age=86400, s-maxage=86400");

	return new Response(feedContent, {
		status: 200,
		headers,
	});
};

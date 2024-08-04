import type { LoaderFunctionArgs } from "@vercel/remix";
import { getRssFeedContent } from "./getRssFeedContent";

export async function loader({ request }: LoaderFunctionArgs) {
	const feedContent = getRssFeedContent();
	const headers = new Headers(request.headers);
	headers.set("content-type", "text/xml");
	// Vercel is invalidating CDN cache on re-deploy.
	// cache for 1 day in browser and 7 days on CDN
	headers.set("cache-control", "public, max-age=86400, s-maxage=604800");

	return new Response(feedContent, {
		status: 200,
		headers,
	});
}

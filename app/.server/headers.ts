import type { HeadersFunction } from "@vercel/remix";

/**
 * Shared headers for cache control
 */
export const cacheControlHeaders = {
	// Vercel is invalidating CDN cache on re-deploy.
	// cache for 1 day in browser and 7 days on CDN
	"cache-control": "public, max-age=86400, s-maxage=604800",
};

export const keepCacheControl: HeadersFunction = ({ loaderHeaders }) => {
	const headers = new Headers();

	const value = loaderHeaders.get("cache-control");
	if (value) {
		headers.set("cache-control", value);
	}

	return headers;
};

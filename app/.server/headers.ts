/**
 * Shared headers for cache control
 */
export const cacheControlHeaders = {
	// Vercel is invalidating CDN cache on re-deploy.
	// cache for 1 day in browser and 7 days on CDN
	"cache-control": "public, max-age=86400, s-maxage=604800",
};

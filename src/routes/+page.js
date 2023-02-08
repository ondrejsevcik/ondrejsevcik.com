// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

// Disable hydratation. It's not required for static pages.
export const csr = false;

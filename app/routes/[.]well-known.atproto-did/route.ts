import type { LoaderFunction } from "@remix-run/node"; // or cloudflare/deno

export const loader: LoaderFunction = async () => {
	return new Response("did:plc:mrft3lf3g2cajjngco6vmda2", {
		status: 200,
		headers: {
			"Content-Type": "text/plain",
		},
	});
};

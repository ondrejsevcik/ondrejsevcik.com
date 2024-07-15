import { vitePlugin as remix } from "@remix-run/dev";
import { vercelPreset } from "@vercel/remix/vite";
import { defineConfig } from "vite";

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		remix({
			presets: [vercelPreset()],
		}),
	],
});

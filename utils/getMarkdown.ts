import fs from "node:fs";
import path from "node:path";
import z from "zod";
import { getMarkdownContent } from "./getMarkdownContent";

const blogDir = path.join(process.cwd(), "_blog-content");
const notesDir = path.join(process.cwd(), "_notes-content");
const linksDir = path.join(process.cwd(), "_links-content");

export function getSortedPosts(type: "blog" | "notes"): BlogPostContent[] {
	const dir = type === "blog" ? blogDir : notesDir;
	return getAllMarkdownContent(dir)
		.map((data) => BlogPostContentSchema.parse(data))
		.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getSortedLinkPosts(): LinkPostContent[] {
	return getAllMarkdownContent(linksDir)
		.map((data) => LinkPostContentSchema.parse(data))
		.sort((a, b) => (a.date < b.date ? 1 : -1));
}

function getAllMarkdownContent(dir: string) {
	const fileNames = fs.readdirSync(dir);
	return fileNames
		.map((fn) => fn.replace(/\.md$/, ""))
		.map((id) => getMarkdownData({ id, dir }));
}

const LinkPostContentSchema = z.object({
	id: z.string().min(1),
	title: z.string().min(1),
	date: z.string().min(1),
	html: z.string().min(1),
	ogUrl: z.string().url(),
	tags: z.array(z.string().min(1)),
});

type LinkPostContent = z.infer<typeof LinkPostContentSchema>;

export function getLinkPostMarkdown(id: string): LinkPostContent {
	const data = getMarkdownData({ id, dir: linksDir });
	return LinkPostContentSchema.parse(data);
}

const BlogPostContentSchema = z.object({
	id: z.string().min(1),
	title: z.string().min(1),
	// TODO check if I can add min(1) restriction
	description: z.string(),
	date: z.string().min(1),
	image: z.string().optional(),
	html: z.string().min(1),
});

type BlogPostContent = z.infer<typeof BlogPostContentSchema>;

export function getNoteMarkdown(id: string): BlogPostContent {
	const data = getMarkdownData({ id, dir: notesDir });
	return BlogPostContentSchema.parse(data);
}

export function getBlogMarkdown(id: string): BlogPostContent {
	const data = getMarkdownData({ id, dir: blogDir });
	return BlogPostContentSchema.parse(data);
}

function getMarkdownData({
	id,
	dir,
}: { id: string; dir: string }): Record<string, unknown> {
	const fullPath = path.join(dir, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const content = getMarkdownContent(fileContents);

	return { id, ...content };
}

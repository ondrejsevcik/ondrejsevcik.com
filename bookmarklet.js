// Inspired by https://nicolas-hoizey.com/articles/2023/02/08/a-bookmarklet-to-create-a-new-link-content-markdown-on-github/
// Compile at https://make-bookmarklets.com/

const slugify = (str) => {
	let slug = str.toString();
	console.log(`1: ${slug}`);
	slug = slug.replaceAll("/", " ");
	console.log(`2: ${slug}`);
	slug = slug.normalize("NFD");
	console.log(`3: ${slug}`);
	slug = slug.replace(/[\u0300-\u036f]/g, "");
	console.log(`4: ${slug}`);
	slug = slug.toLowerCase();
	console.log(`5: ${slug}`);
	slug = slug.replace(/\s+/g, " ");
	console.log(`6: ${slug}`);
	slug = slug.replace(/[^\w ]+/g, " ");
	console.log(`7: ${slug}`);
	slug = slug.trim();
	console.log(`8: ${slug}`);
	slug = slug.replace(/ +/g, "-");
	console.log(`9: ${slug}`);

	return slug;
};

const linkUrl = window.location.href;
const title = window.prompt("Title of the link?", window.document.title) ?? "";
const selectionText = window?.getSelection()?.toString()?.trim() ?? "";
const slug = window.prompt("Slug of the link?", slugify(title)) ?? "";
const dateString = new Date().toISOString().substring(0, 10);
const fileContent = `---
title: "${title}"
date: "${dateString}"
tags: []
ogUrl: ${linkUrl}
---

${selectionText ? `> ${selectionText.replaceAll("\n", "\n> ")}` : ""}
`;

const filename = `_links-content/${slug}.md`;
const newFileUrl = `https://github.com/ondrejsevcik/ondrejsevcik.com/new/main/?filename=${filename}&value=${encodeURIComponent(fileContent)}`;

window.open(newFileUrl);

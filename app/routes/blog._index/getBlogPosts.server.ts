import { getSortedPosts } from "../../../utils/getMarkdown";

export function getBlogPosts() {
	return getSortedPosts("blog");
}

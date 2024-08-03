import { getSortedPosts } from "../../../utils/getMarkdown";

export function getNotes() {
	return getSortedPosts("notes");
}

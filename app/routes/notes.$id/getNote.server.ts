import { getNoteMarkdown } from "../../../utils/getMarkdown";

export function getNote(id: string) {
	return getNoteMarkdown(id);
}

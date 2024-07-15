export function formatDate(date: Date) {
	return new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(date);
}

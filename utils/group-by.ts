export function groupBy<T>(arr: T[], getKeyFn: (item: T) => string) {
	const groups: Record<string, T[]> = {};
	for (const el of arr) {
		const key = getKeyFn(el);
		if (!(key in groups)) {
			groups[key] = [];
		}
		groups[key].push(el);
	}
	return groups;
}

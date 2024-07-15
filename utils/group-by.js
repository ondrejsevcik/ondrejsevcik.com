export function groupBy(arr, getKeyFn) {
	const groups = {};
	for (const el of arr) {
		const key = getKeyFn(el);
		if (!(key in groups)) {
			groups[key] = [];
		}
		groups[key].push(el);
	}
	return groups;
}

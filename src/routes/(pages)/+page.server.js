import { loadReadingList, loadReadIndex } from '$lib/data-load.server.js';

export async function load() {
	const list = loadReadingList();
	const index = loadReadIndex();
	return {
		readingList: list,
		index: index
	};
}

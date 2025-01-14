import { loadReadingList, loadReadIndex } from '$lib/data-load.server.js';

export async function load() {
  return {
    list:loadReadingList().filter(read=> new Date(read.date))
  };
}

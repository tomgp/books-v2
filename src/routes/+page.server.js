import * as fs from 'fs';
import { loadReadingList } from '../lib/data-load.js';

export async function load() {
  const list = loadReadingList();
  const index = fs.readFileSync('static/data/readIndex.json','utf-8');
  return {
    readingList:list,
    index:JSON.parse(index)
  };
}
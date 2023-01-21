import * as fs from 'fs';
import { csvParse } from 'd3';

export async function load() {
  const list = fs.readFileSync('static/data/reading-list.csv','utf-8');
  const index = fs.readFileSync('static/data/readIndex.json','utf-8');
  return {
    readingList:csvParse(list),
    index:JSON.parse(index)
  };
}
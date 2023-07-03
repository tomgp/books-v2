import * as fs from 'fs';
import { loadReadingList, loadReadIndex } from '../lib/data-load.js';

export async function load() {
  const list = loadReadingList();
  const index = loadReadIndex()
  return {
    readingList:list,
    index:index
  };
}
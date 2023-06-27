import * as fs from 'fs';
import { rowParser } from '../../lib/data-load.js';
import { csvParse } from 'd3';

const list = fs.readFileSync('static/data/reading-list.csv','utf-8');

export async function load({params}) {
  return {
    books: list,
    slug: params.authSlug
  };
}
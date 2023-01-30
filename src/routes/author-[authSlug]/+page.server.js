import * as fs from 'fs'
export async function load({params}) {
  return {
    slug: params.authSlug
  };
}
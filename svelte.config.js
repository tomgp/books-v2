//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-cloudflare'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ 
			pages: 'docs',
      assets: 'docs',
      fallback: null,
      precompress: false,
      strict: true
		}),
		prerender:{
			handleHttpError:(msg)=>{
				console.log('MMM',msg);
			}
		}
	}
};

export default config;

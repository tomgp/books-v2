//import adapter from '@sveltejs/adapter-auto';
//import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-cloudflare'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			routes: {
				exclude: ['/*']
			}
		}),
		prerender:{
			handleHttpError:(msg)=>{
				console.log('ERROR', msg);
			}
		}
	}
};

export default config;

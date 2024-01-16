//import adapter from '@sveltejs/adapter-auto';
//import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-cloudflare'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender:{
			handleHttpError:(msg)=>{
				console.log('Prerender error',msg);
			}
		}
	}
};

export default config;

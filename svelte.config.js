//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ handleHttpError: 'warn' }),
		prerender:{
			handleHttpError:(msg)=>{
				console.log('MMM',msg);
			}
		}
	}
};

export default config;

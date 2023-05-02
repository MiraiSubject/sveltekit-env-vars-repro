import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			runtime: 'edge',
			envVarsInUse: [
				'DATABASE_URL',
				'GITHUB_CLIENT_ID',
				'GITHUB_CLIENT_SECRET',
				'GITHUB_CALLBACK_URL',
				'GITHUB_CALLBACK_URL_DEV',
				'GITHUB_CALLBACK_URL_PROD',
				'GITHUB_CALLBACK_URL_PREVIEW',
			]
		})
	}
};

export default config;

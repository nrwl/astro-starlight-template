// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// Replace with your deployed site URL (used for sitemap and canonical links).
	site: 'https://example.com',
	integrations: [
		starlight({
			title: 'Nx Starlight Starter',
			description: 'A documentation site starter powered by Astro Starlight, featuring the ui-components utility library.',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/nrwl/astro-starlight-template',
				},
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Getting Started', slug: 'guides/getting-started' },
						{ label: 'Contributors', slug: 'guides/contributors' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
			editLink: {
				baseUrl: 'https://github.com/nrwl/astro-starlight-template/edit/main/apps/docs/',
			},
		}),
	],
});

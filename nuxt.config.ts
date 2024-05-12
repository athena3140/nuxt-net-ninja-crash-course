// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss"],
	runtimeConfig: {
		currencyKey: process.env.API_KEY,
	},
	app: {
		head: {
			title: "Nuxt Dojo",
			meta: [
				{
					name: "description",
					content: "Nuxt 3 by net ninja",
				},
			],
			link: [
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/icon?family=Material+Icons",
				},
			],
		},
	},
});

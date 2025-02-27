// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Factory",
	tagline: "Factory Next",
	url: "https://docs.vactory.k8s.lapreprod.com",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "voidagency", // Usually your GitHub org/user name.
	projectName: "Factory", // Usually your repo name.

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl: "https://github.com/voidagency/vactory_nextjs/tree/main/apps/docs/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			autoCollapseSidebarCategories: false,
			navbar: {
				title: "",
				logo: {
					alt: "Factory",
					src: "img/logo.png",
				},
				items: [
					{
						type: "doc",
						docId: "learn/introduction",
						position: "left",
						label: "Get started",
					},
					{
						type: "doc",
						docId: "develop/introduction",
						position: "left",
						label: "Develop",
					},
					{ to: "/blog", label: "Blog", position: "left" },
					{
						href: "https://github.com/voidagency/vactory_nextjs",
						label: "Next.js",
						position: "right",
					},
					{
						href: "https://github.com/voidagency/vactory_starter_kit",
						label: "Drupal",
						position: "right",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Docs",
						items: [
							{
								label: "Tutorial",
								to: "/learn/intro",
							},
						],
					},
					{
						title: "Community",
						items: [
							{
								label: "Stack Overflow",
								href: "https://stackoverflow.com/questions/tagged/docusaurus",
							},
							{
								label: "Discord",
								href: "https://discordapp.com/invite/docusaurus",
							},
							{
								label: "Twitter",
								href: "https://twitter.com/docusaurus",
							},
						],
					},
					{
						title: "More",
						items: [
							{
								label: "Blog",
								to: "/blog",
							},
							{
								label: "GitHub",
								href: "https://github.com/voidagency/vactory_nextjs",
							},
							{
								label: "GitHub",
								href: "https://github.com/voidagency/vactory_starter_kit",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Factory, Inc. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
}

module.exports = config

import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
	title: "GX+",
	tagline: "GX+, A FleetPoint Product",
	favicon: "img/gxplus.png",

	// Set the production url of your site here
	url: "https://FleetPoint.github.io",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/gxplus-docs/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "FleetPoint", // Usually your GitHub org/user name.
	projectName: "gxplus-docs", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					editUrl: "https://github.com/FleetPoint/gxplus-docs/tree/master/",
					showLastUpdateAuthor: true,
					showLastUpdateTime: true,
				},
				blog: {
					showReadingTime: true,
					editUrl: "https://github.com/FleetPoint/gxplus-docs/tree/master/",
					showLastUpdateAuthor: true,
					showLastUpdateTime: true,
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: "img/docusaurus-social-card.jpg",
		navbar: {
			title: "GX+",
			logo: {
				alt: 'GX+ "Plus" Icon',
				src: "img/gxplus.png",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "tutorialSidebar",
					position: "left",
					label: "Docs",
				},
				{ to: "/blog", label: "Blog", position: "left" },
				{
					href: "roblox://placeId=16798209428&launchData=36bmp1sunmj5rzty92lhiicy5x70",
					label: "Get GX+",
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
							label: "Docs",
							to: "/docs",
						},
					],
				},
				{
					title: "Community",
					items: [
						{
							label: "Discord",
							href: "https://discordapp.com/invite/ccrZ2cZJDU",
						},
						{
							label: "Roblox",
							href: "https://www.roblox.com/groups/13299030/FleetPoint#!/about",
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
							href: "https://github.com/FleetPoint",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} GX+, a FleetPoint Product. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
			additionalLanguages: ["lua"],
		},
	} satisfies Preset.ThemeConfig,

	plugins: [
		[
			require.resolve("docusaurus-lunr-search"),
			{
				highlightResult: true,
			},
		],
	],
};

export default config;

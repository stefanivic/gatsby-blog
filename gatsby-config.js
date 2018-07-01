module.exports = {
	siteMetadata: {
		title: 'Personal blog',
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/posts`,
				name: `posts`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-prismjs`,
						classPrefix: 'language-',
						inlineCodeMarker: null,
						aliases: {},
					},
				],
			},
		},
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography.js`,
			},
		},
	],
}

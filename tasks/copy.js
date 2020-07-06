module.exports = () =>
{
	'use strict';

	const config =
	{
		distWebsite:
		{
			src:
			[
				'assets/**',
				'cache/**',
				'database/**',
				'includes/**',
				'languages/en.json',
				'libraries/**',
				'modules/AliasGenerator/**',
				'modules/Analytics/**',
				'modules/ConfirmAction/**',
				'modules/Dialog/**',
				'modules/FormValidator/**',
				'modules/HtmlValidator/**',
				'modules/PageCache/**',
				'modules/RankSorter/**',
				'modules/Reporter/**',
				'modules/SitemapXml/**',
				'modules/SyntaxHighlighter/**',
				'modules/TextareaResizer/**',
				'modules/UnmaskPassword/**',
				'templates/admin/**',
				'config.php',
				'console.php',
				'index.php',
				'.htaccess'
			],
			dest: 'build',
			cwd: 'vendor/redaxscript/redaxscript/',
			expand: true
		},
		distTemplate:
		{
			src:
			[
				'templates/ncss/**'
			],
			dest: 'build',
			cwd: 'vendor/redaxmedia/ncss-template/',
			expand: true
		}
	};

	return config;
};

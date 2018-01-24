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
				'dist/**',
				'includes/**',
				'languages/en.json',
				'libraries/**',
				'modules/Analytics/**',
				'modules/PageCache/**',
				'modules/SitemapXml/**',
				'modules/SyntaxHighlighter/**',
				'modules/Validator/**',
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
module.exports = () =>
{
	const config =
	{
		configDatabase:
		{
			command:
			[
				'cd build',
				'php console.php config parse --db-url $DB_URL --halt-on-error',
				'php console.php status database'
			]
			.join('&&')
		},
		configTemplates:
		{
			command:
			[
				'replace \'vendor/redaxscript\' \'../../redaxscript\' -- vendor/redaxmedia/ncss-template/templates/ncss/assets/styles/_ncss.css'
			]
			.join('&&')
		},
		configModules:
		{
			command:
			[
				'replace \'UA-00000000-0\' \'UA-16122280-17\' -- build/modules/Analytics/assets/scripts/init.js',
				'replace \'auto\' \'ncss.io\' -- build/modules/Analytics/assets/scripts/init.js',
				'echo sitemap: https://ncss.io/module/sitemap-xml > build/robots.txt'
			]
			.join('&&')
		},
		removeBuild:
		{
			command: 'rm -rf build'
		},
		options:
		{
			stdout: true,
			failOnError: true
		}
	};

	return config;
};

module.exports = () =>
{
	const config =
	{
		deploy:
		{
			src:
			[
				'build'
			],
			dest: 'ncss',
			options:
			{
				url: process.env.FTP_URL,
				command:
				[
					'debug 1',
					'set sftp:auto-confirm yes',
					'mirror {SOURCE} {TARGET}-new-{TIMESTAMP} --reverse --delete-first --parallel=10 --use-pget-n=10',
					'chmod 0444 {TARGET}-new-{TIMESTAMP}/config.php',
					'mv {TARGET} {TARGET}-old-{TIMESTAMP}',
					'mv {TARGET}-new-{TIMESTAMP} {TARGET}',
					'rm -rf {TARGET}-old-{TIMESTAMP}',
					'exit'
				]
			}
		}
	};

	return config;
};

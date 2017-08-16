#!/usr/bin/env bash

replace 'UA-00000000-0' 'UA-16122280-17' -- build/modules/Analytics/assets/scripts/init.js
replace 'auto' 'ncss.io' -- build/modules/Analytics/assets/scripts/init.js
replace 'true' 'rs.registry.secondParameter !== '\''classes'\'' && rs.registry.secondParameter !== '\''tools'\' -- build/modules/SyntaxHighlighter/assets/scripts/init.js
echo sitemap: https://ncss.io/sitemap_xml > build/robots.txt

cd build
php console.php config parse --db-url $DB_URL
php console.php status database
rm console.php

const generate = require('@retrogen/generate');
const fs = require('node:fs/promises');
const path = require('node:path');
const { DateTime } = require('luxon');

async function markdown() {
	const organization = 'continuousauth'; // change this if you want to use a different organization

	const now = DateTime.now();
	const then = now.minus({ days: 7 }); // change this if you want to set a different period - you can set to weeks or months, too. Check the Luxon DateTime API.

	// the date range we want to get information for
	const dates = {
		start: then.toISODate(),
		end: now.toISODate(),
	};

	const retro = await generate(organization, dates);

	// write the data out to a file
	fs.writeFile(path.resolve(`./retros/continuousauth-${dates.start}.md`), retro);
}

markdown();

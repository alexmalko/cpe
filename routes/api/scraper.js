const express = require('express');
const router = express.Router();
const puppeteer = require('puppeteer');

async function scrapeChannel(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	// wait for a page to load all of the data
	await page.goto(url, { waitUntil: 'networkidle2' });
	const hrefs = await page.$$eval('.hyperlink-text-link', (link) => link.map((a) => a.href));
	browser.close();
	return hrefs;
}

router.get('/', async (req, res) => {
	const hrefs = await scrapeChannel('https://www.ey.com/en_gl/webcasts');
	res.send(hrefs);
});

module.exports = router;

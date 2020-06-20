// puppeteer for webscraping
const puppeteer = require('puppeteer');
const fs = require('fs');

async function scrapeChannel(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	// wait for a page to load all of the data
	await page.goto(url, { waitUntil: 'networkidle2' });
	const hrefs = await page.$$eval('.hyperlink-text-link', (link) => link.map((a) => a.href));
	console.log(hrefs);
	browser.close();
	return hrefs;
}

scrapeChannel('https://www.ey.com/en_gl/webcasts');

// // create PDF
// await page.pdf({
// 	path: 'hn.pdf',
// 	format: 'letter'
// });

// // take a screenshot
// await page.screenshot({ path: 'hello.png', fullPage: true });

//  get all of the html back
// let html = await page.content();
// console.log(html);

// // save generated html
// fs.writeFile('sample.html', html, (err) => {
// 	// throws an error, you could also catch it here
// 	if (err) throw err;

// 	// success case, the file was saved
// 	console.log('File saved!');
// });

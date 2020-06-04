// puppeteer for webscraping

const puppeteer = require('puppeteer');

async function scrapeChannel(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);

	const [ el ] = await page.$x(
		'/html/body/div[1]/div/div[2]/div/div/div/div/div/div[6]/div/div[3]/div/div[2]/div/div[8]/div[2]/div[1]/h3/a'
	);
	console.log(el);
	const text = await el.getProperty('p a');
	const name = await text.jsonValue();

	console.log(name);
	browser.close();
}

scrapeChannel('https://www.ey.com/en_gl/webcasts');

// webscraping
// https://www.youtube.com/watch?v=ALizgnSFTwQ || Intro To Web Crawlers & Scraping With Scrapy
// https://www.youtube.com/watch?v=LoziivfAAjE&t=884s || Intro To Web Scraping With Node.js & Cheerio

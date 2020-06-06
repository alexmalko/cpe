// puppeteer for webscraping

const puppeteer = require('puppeteer');

async function scrapeChannel(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);

	const [ el ] = await page.$x('//*[@id="footer"]/div/div/div/div[1]/div/div/div/div[1]/div/img');
	console.log(el);
	const text = await el.getProperty('src');
	const name = await text.jsonValue();

	console.log(name);
	browser.close();
}

scrapeChannel('https://www.ey.com/en_gl/webcasts');

// webscraping
// https://www.youtube.com/watch?v=ALizgnSFTwQ || Intro To Web Crawlers & Scraping With Scrapy
// https://www.youtube.com/watch?v=LoziivfAAjE&t=884s || Intro To Web Scraping With Node.js & Cheerio
// test #1
// alex

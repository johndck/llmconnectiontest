const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.legalandgeneral.com/retirement/pensions/personal-pension/');
  await page.screenshot({path: 'example.png'});

  await browser.close();
}   )();    



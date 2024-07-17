const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
  });

  await page.goto('https://www.legalandgeneral.com/retirement/pensions/personal-pension/',{waitUntil: 'networkidle0', timeout:0});
  await page.waitForSelector('#onetrust-accept-btn-handler', { visible: true });
  await page.click('#onetrust-accept-btn-handler');

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  await page.waitForTimeout(3000);


  await page.screenshot({path: 'example.png', fullPage: true});

  await browser.close();
}   )();    



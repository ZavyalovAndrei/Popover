import puppeteer from 'puppeteer';


describe('check popup', () => {
    let browser;
    let page;

    beforeEach(async () => {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 100,
            devtools: true,
        });

        page = await browser.newPage();
    });

    test('Popup should appear if press the button 1', async () => {
        await page.goto('http://localhost:9000');

        const form = await page.$('.form');
        const button1 = await form.$('[name="button1"]');
        await button1.click();
        await page.waitForSelector('.popup-title');
    });

    test('Popup should appear if press the button 2', async () => {
        await page.goto('http://localhost:9000');

        const form = await page.$('.form');
        const button2 = await form.$('[name="button2"]');  
        await button2.click();
        await page.waitForSelector('.popup-title');
        const popup = await form.$('.popup-title');
    });
    afterEach(async () => {
        await browser.close();
    });
});
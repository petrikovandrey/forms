const puppeteer = require('puppeteer');

describe('Puppeteer test cases', () => {
  beforeAll(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.click('.btn');
  });
  it('popover', async () => {
    const elem = document.querySelector('.popover');
    await expect(elem).resolves.toMatch('<div class="popover"><div class="arrow" style="top: 34px;"></div><h3 class="popover-header">Popover title</h3><div class="popover-body">And here\'s some amazing content. It\'s very engaging. Right?</div></div>');
  });
});

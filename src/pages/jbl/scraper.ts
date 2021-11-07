import puppeteer from 'puppeteer';
import { link } from '../../helpers/links';

export const scrapeJBL = async () => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      slowMo: 25,
    });

    const page = await browser.newPage();

    await page.goto(link.JBL);

    await browser.close();

  } catch (error) {

  }
};
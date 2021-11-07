import * as puppeteer from 'puppeteer';

export async function time(time: number) {
  await new Promise(resolve => {
    setTimeout(resolve, time * 1000 * 3);
  });
}

export async function getTextByXPath(
  page: puppeteer.Page,
  xpath: string
): Promise<string> {
  const path = await page.$x(xpath);
  const property = await path[0].getProperty('innerText');
  if (property === undefined) {
    throw `XPath ${path} not found`;
  }
  const text = String(await property.jsonValue());
  return text;
}

export async function getLinkByQuerySelector(
  page: puppeteer.Page,
  selector: string
) {
  const link = await page.$eval(selector, el => el.getAttribute('href'));
  return link;
}

export async function getClassNameByQuerySelector(
  page: puppeteer.Page,
  selector: string
) {
  const className = await page.$eval(selector, el => el.className);
  return className;
}

export async function getTextByQuerySelector(
  page: puppeteer.Page,
  selector: string
) {
  let text = await page.$eval(selector, el => el.textContent);
  if (text === null) {
    text = '';
  }
  return text;
}
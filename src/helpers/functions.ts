import * as puppeteer from 'puppeteer';

export async function time(time: number) {
  await new Promise(resolve => {
    setTimeout(resolve, time * 1000 * 3);
  });
}

export async function getLinks (page: puppeteer.Page) {
  const elementHandles = await page.$$('a');
  const propertyJsHandles = await Promise.all(
    elementHandles.map(handle => handle.getProperty('href'))
  );
  const links = await Promise.all(
    propertyJsHandles.map(handle => handle.jsonValue())
  );

  let urls = links.map(elem => elem.toString());
  urls = urls.filter(elem => elem !== '');

  return urls;
}

export function findEarphone (text: string): Boolean {
  if(text.includes('earphone') || 
      text.includes('Earphone') || 
      text.includes('fone') || 
      text.includes('Fone') || 
      text.includes('phone') || 
      text.includes('Phone') || 
      text.includes('earbud') || 
      text.includes('Earbud') || 
      text.includes('earpod') || 
      text.includes('Earpod') || 
      text.includes('headphone') || 
      text.includes('Headphone')) {
     return true;
  }
  false;
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
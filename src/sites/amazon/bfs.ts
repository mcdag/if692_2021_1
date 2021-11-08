import * as Puppeteer from "puppeteer";
import { EarphoneDTO } from "../../dtos/earphone.dto";
import { links, paths } from "../../helpers/enum";
import { findEarphone, getLinks, getTextByXPath } from "../../helpers/functions";

export async function bfs (page: Puppeteer.Page, earphones: EarphoneDTO[], pages: number, queue: string[]) {
  while(pages < 1000){
    if(findEarphone(page.url.toString())){
      const name = await getTextByXPath(page, paths.NAME_AMAZON);
      const type = await getTextByXPath(page, paths.TYPE_AMAZON);
      const brand = await getTextByXPath(page, paths.BRAND_AMAZON);
      const price = await getTextByXPath(page, paths.PRICE_AMAZON);
      const site = links.AMAZON;

      const earphone = new EarphoneDTO(name, type, brand, price, site);
      earphones.push(earphone);
    }
    const pageLinks = await getLinks(page);

    queue = queue.concat(pageLinks);

    while(queue.length !== 0){
      pages = pages + 1;
      const pop = queue.shift();
      await page.goto(pop);
      bfs(page,earphones, pages, queue);
    }
  }
  return earphones;
}
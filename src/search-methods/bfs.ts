import * as Puppeteer from "puppeteer";
import { Data } from "../controller/search-methods";
import { EarphoneDTO } from "../dtos/earphone.dto";
import {findEarphone, getLinks, getTextByXPath, time } from "../helpers/functions";

export async function bfs (page: Puppeteer.Page, earphones: EarphoneDTO[], pages: number, queue: string[], data: Data) {
  while(queue.length > 0 && pages <= 1000){

    console.log(`pagina: ${pages}`);

    const link = queue.shift();
  
    await page.goto(link);

    await time(1);
  
    if(findEarphone(page.url.toString())){
      const name = await getTextByXPath(page, data.nameXPath);
      const type = await getTextByXPath(page, data.typeXpath);
      const brand = await getTextByXPath(page, data.brandXpath);
      const price = await getTextByXPath(page, data.priceXpath);
      const site = data.siteUrl;
    
      const earphone = new EarphoneDTO(name, type, brand, price, site);
      earphones.push(earphone);
    }
    const pageLinks = await getLinks(page);
    
    for(let i=0; i<pageLinks.length; i++){
      if(!queue.includes[pageLinks[i]]){
        queue.push(pageLinks[i]);
      }
    }
    pages = pages + 1;
  }
  return earphones;
}
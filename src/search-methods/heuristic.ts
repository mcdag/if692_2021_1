import PriorityQueue from "ts-priority-queue";
import * as Puppeteer from "puppeteer";
import { Data } from "../controller/search-methods";
import { EarphoneDTO } from "../dtos/earphone.dto";
import { findEarphone, getLinks, getTextByXPath, time } from "../helpers/functions";
import { Link } from "../helpers/interfaces";

export async function heuristic (page: Puppeteer.Page, earphones: EarphoneDTO[], pages: number, queue: PriorityQueue<Link> , data: Data) {
  const linkedAdd: string[] = [];
  linkedAdd.push((queue.peek().url));

  while(queue.length > 0 && pages <= 10){
    const link = queue.dequeue();

    await page.goto(link.url);

    console.log(`página: ${pages}`);
    
    console.log(page.url());

    await time(5);
      
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
      if(!linkedAdd.includes(pageLinks[i])){
        const linkToBeAdded: Link = {
          url: pageLinks[i],
          rank: 0,
        }
        if(findEarphone(pageLinks[i])){
          linkToBeAdded.rank = 10;
        }
        queue.queue(linkToBeAdded);
        linkedAdd.push(pageLinks[i]);
      }
    }
    pages++;
  }
  console.log(earphones);
  return earphones;
}
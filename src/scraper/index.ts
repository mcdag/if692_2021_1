import * as puppeteer from 'puppeteer';
import PriorityQueue from "ts-priority-queue";
import { getDataInformation } from '../controller/search-methods';
import { EarphoneDTO } from '../dtos/earphone.dto';
import { Link } from '../helpers/interfaces';
import { bfs } from '../search-methods/bfs';
import { heuristic } from '../search-methods/heuristic';
 
export const scrape = async (site: string, search: string) => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      slowMo: 25,
    });

    const page = await browser.newPage();
    
    let earphones: EarphoneDTO[] =[];
    let pages: number = 1;

    let queue: string[] = [];

    let priorityQueue = new PriorityQueue(
      {
        comparator: function (a: Link, b: Link) {
          return a.rank > b.rank ? -1 : a.rank < b.rank ? 1 : 0;
        }
      }
    );

    const dataInformation = getDataInformation(site);
    
    if(search === 'bfs'){
      queue.push(dataInformation.siteUrl);
      earphones = await bfs(page, earphones, pages, queue, dataInformation);

    } else if(search === 'heuristic'){

      const pageLink: Link = {
        url: dataInformation.siteUrl,
        rank: 0,
      };

      priorityQueue.queue(pageLink);

      earphones = await heuristic(page, earphones, pages, priorityQueue, dataInformation);
      
    }else{
      console.log('Método de busca não encontrado');
    }

    await browser.close();

    return earphones;

  } catch (error) {
    console.log(error);
  } 
};


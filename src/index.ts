import schedule from 'node-schedule';
import { EarphoneDTO } from './dtos/earphone.dto';
import { EarphonesDTO } from './dtos/earphones.dto';
import { scrapeAmazon } from './sites/amazon';

import * as fs from 'fs';
import { scrape } from './scraper';

enum search {
  BFS = "bfs",
  HEURISTIC = "heuristic",
}

schedule.scheduleJob('0 0 */1 * *', async () => {
  let earphones: EarphoneDTO[] = [];

  earphones = earphones.concat(await scrape('amazon', search.BFS));
  earphones = earphones.concat(await scrape('americanas', search.BFS));
  earphones = earphones.concat(await scrape('extra', search.BFS));
  earphones = earphones.concat(await scrape('jbl', search.BFS));
  earphones = earphones.concat(await scrape('magazine-luiza', search.BFS));
  earphones = earphones.concat(await scrape('mercado-livre', search.BFS));
  earphones = earphones.concat(await scrape('netshoes', search.BFS));
  earphones = earphones.concat(await scrape('olx', search.BFS));
  earphones = earphones.concat(await scrape('shopee', search.BFS));
  earphones = earphones.concat(await scrape('submarino', search.BFS));

  const allSitesEarphones = new EarphonesDTO(earphones);

  fs.writeFile(
    `earphones.json`,
    JSON.stringify(allSitesEarphones, null, '\t'),
    err => {
      if (err) throw err;
    }
  );
});

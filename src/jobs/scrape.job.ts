import { Job } from './job.decorator';
import { Job as IJob } from './job.interface';

@Job({
  name: 'Scrape',
  description: 'Scrape the provided webpage.',
})
export class ScrapeJob implements IJob {
  execute() {
    console.log('Scraping page...');
  }
}

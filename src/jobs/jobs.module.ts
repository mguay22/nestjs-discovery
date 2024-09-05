import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { ScrapeJob } from './scrape.job';
import { WeatherJob } from './weather.job';

@Module({
  controllers: [JobsController],
  providers: [ScrapeJob, WeatherJob, JobsService],
})
export class JobsModule {}

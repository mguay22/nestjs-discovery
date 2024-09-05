import { Controller, Get, Param, Post } from '@nestjs/common';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  getJobs() {
    return this.jobsService.getJobs();
  }

  @Post(':name/execute')
  async executeJob(@Param('name') name: string) {
    return this.jobsService.executeJob(name);
  }
}

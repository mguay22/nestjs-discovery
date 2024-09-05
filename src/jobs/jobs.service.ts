import {
  DiscoveryService,
  DiscoveredClassWithMeta,
} from '@golevelup/nestjs-discovery';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { JOB_METADATA_KEY, JobMetdata } from './job.decorator';
import { Job } from './job.interface';

@Injectable()
export class JobsService implements OnModuleInit {
  private jobs: DiscoveredClassWithMeta<JobMetdata>[] = [];

  constructor(private readonly discoveryService: DiscoveryService) {}

  async onModuleInit() {
    this.jobs = await this.discoveryService.providersWithMetaAtKey<JobMetdata>(
      JOB_METADATA_KEY,
    );
  }

  async getJobs() {
    return this.jobs.map((job) => job.meta);
  }

  async executeJob(name: string) {
    const job = this.jobs.find((job) => job.meta.name === name)?.discoveredClass
      .instance as Job;
    return job.execute();
  }
}

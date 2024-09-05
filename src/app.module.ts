import { Module } from '@nestjs/common';
import { DiscoveryModule } from '@golevelup/nestjs-discovery';
import { JobsModule } from './jobs/jobs.module';

@Module({
  imports: [JobsModule, DiscoveryModule],
})
export class AppModule {}

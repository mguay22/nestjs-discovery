import { DiscoveryService } from '@golevelup/nestjs-discovery';
import { Job } from './job.decorator';
import { Job as IJob } from './job.interface';

@Job({
  name: 'Weather',
  description: 'Fetch the latest weather for your area.',
})
export class WeatherJob implements IJob {
  constructor(private discoveryService: DiscoveryService) {}

  execute() {
    console.log('Fetching weather...');
  }
}

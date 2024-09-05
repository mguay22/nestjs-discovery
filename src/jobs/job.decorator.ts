import { applyDecorators, Injectable, SetMetadata } from '@nestjs/common';

export interface JobMetdata {
  name: string;
  description: string;
}

export const JOB_METADATA_KEY = 'job';

export const Job = (meta: JobMetdata) =>
  applyDecorators(Injectable(), SetMetadata(JOB_METADATA_KEY, meta));

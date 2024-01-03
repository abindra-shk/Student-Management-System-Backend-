import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheck,
  MongooseHealthIndicator,
  TypeOrmHealthIndicator,
  DiskHealthIndicator,
  MemoryHealthIndicator,
} from '@nestjs/terminus';
import { ResponseTransformInterceptorIgnore } from '../core/http/interceptors/response-transform.interceptor';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ResponseMessage } from 'src/core/decorators/response.decorator';

@ApiTags('Health Check')
@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private mongoDBHealth: MongooseHealthIndicator,
    private memoryHealthIndicator: MemoryHealthIndicator,
  ) {}

  @Get()
  @ApiOkResponse({ description: 'Backend Health status retrieved' })
  @ResponseMessage("Backend Health status retrieved")
  @HealthCheck()
  @ResponseTransformInterceptorIgnore()
  check() {
    // return this.health.check([() => this.http.pingCheck('base-OKR', 'http://localhost:3002')]);
    return this.health.check([
      () => this.mongoDBHealth.pingCheck('database'),
      // the process should not use more than 300MB memory
      () =>
        this.memoryHealthIndicator.checkHeap('memory heap', 300 * 1024 * 1024),
      // The process should not have more than 300MB RSS memory allocated
      () =>
        this.memoryHealthIndicator.checkRSS('memory RSS', 300 * 1024 * 1024),
    ]);
  }
}

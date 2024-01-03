import { Module } from '@nestjs/common';
import { ResponseTransformInterceptor } from './http/interceptors/response-transform.interceptor';
import { CoreController } from './http/controller.ts/core.controllers';

@Module({
  imports: [],
  providers: [ResponseTransformInterceptor],
  controllers: [CoreController],
  exports: [],
})
export class CoreModule {}

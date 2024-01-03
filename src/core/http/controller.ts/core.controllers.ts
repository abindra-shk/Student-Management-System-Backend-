import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Core API')
@Controller()
export class CoreController {
  @Get('/health')
  health() {
    return {
      message: 'All good!',
    };
  }
}

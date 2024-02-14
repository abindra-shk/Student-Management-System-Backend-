import { Test, TestingModule } from '@nestjs/testing';
import { AttendanceLogController } from './attendance.controller';
import { AttendanceLogService } from './attendance.service';

describe('AttendanceLogController', () => {
  let controller: AttendanceLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttendanceLogController],
      providers: [AttendanceLogService],
    }).compile();

    controller = module.get<AttendanceLogController>(AttendanceLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

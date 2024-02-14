import { Test, TestingModule } from '@nestjs/testing';
import { FinalAttendanceController } from './final_attendance.controller';
import { FinalAttendanceService } from './final_attendance.service';

describe('FinalAttendanceController', () => {
  let controller: FinalAttendanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinalAttendanceController],
      providers: [FinalAttendanceService],
    }).compile();

    controller = module.get<FinalAttendanceController>(FinalAttendanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

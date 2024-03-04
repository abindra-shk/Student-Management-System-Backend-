import { Test, TestingModule } from '@nestjs/testing';
import { FinalAttendanceService } from './final_attendance.service';

describe('FinalAttendanceService', () => {
  let service: FinalAttendanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinalAttendanceService],
    }).compile();

    service = module.get<FinalAttendanceService>(FinalAttendanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});


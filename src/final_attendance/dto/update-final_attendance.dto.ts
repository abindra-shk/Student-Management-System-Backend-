import { PartialType } from '@nestjs/swagger';
import { CreateFinalAttendanceDto } from './create-final_attendance.dto';

export class UpdateFinalAttendanceDto extends PartialType(CreateFinalAttendanceDto) {}

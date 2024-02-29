import { PartialType } from '@nestjs/swagger';
import { CreateAttendanceLogDto } from './create-attendance.dto';

export class UpdateAttendanceDto extends PartialType(CreateAttendanceLogDto) {}

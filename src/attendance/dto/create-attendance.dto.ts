// create-attendance-log.dto.ts

import { IsDateString, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAttendanceLogDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsDateString()
  date: string;

  @IsOptional()
  @IsDateString()
  entrytime?: string;

  @IsOptional()
  @IsDateString()
  exittime?: string;
}

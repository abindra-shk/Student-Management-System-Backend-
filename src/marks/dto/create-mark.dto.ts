import { IsInt, IsNotEmpty, IsEnum, IsString } from 'class-validator';
import { ResultEnum } from 'src/common/enums/result.enum';


export class CreateMarkDto {
  @IsNotEmpty()
  studentId: string;

  @IsString()
  subjectName: string;

  @IsString()
  @IsNotEmpty()
  classId: string;

  @IsInt()
  academicYear: number;

  @IsInt()
  marksObtained: number;

  @IsEnum(ResultEnum)
  result: ResultEnum;
}

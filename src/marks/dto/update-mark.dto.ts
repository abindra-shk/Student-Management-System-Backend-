import { PartialType } from '@nestjs/swagger';
import { CreateMarkDto } from './create-mark.dto';

export class UpdateMarkDto extends PartialType(CreateMarkDto) {}

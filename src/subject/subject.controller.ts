import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('subject')
@ApiTags('Subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Post()
  create(@Body() createSubjectDto: CreateSubjectDto) {
    return this.subjectService.create(createSubjectDto);
  }

  @Post('all-subjects')
  createAll(@Body() createSubjectDto: CreateSubjectDto[]) {
    return this.subjectService.createAll(createSubjectDto);
  }

  @Get()
  findAll() {
    return this.subjectService.findAll();
  }

  @Get('findByClassId/:classId')
  findByClassId(@Param('classId') classId: string) {
    return this.subjectService.findByClassId(classId);
  }

  @Get('findBySubjectNameAndClassId')
  async findBySubjectNameAndClassId(
    @Query('subjectName') subjectName: string,
    @Query('classId') classId: string,
  ) {
    return this.subjectService.findBySubjectNameAndClassId(subjectName, classId);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subjectService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubjectDto: CreateSubjectDto) {
    return this.subjectService.update(id, updateSubjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subjectService.remove(id);
  }
}

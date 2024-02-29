import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { ApiTags } from '@nestjs/swagger';
import { ResponseMessage } from 'src/core/decorators/response.decorator';
import { ReturnDocument } from 'typeorm';

@Controller('student')
@ApiTags('Student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  @ResponseMessage('Student created successfully')
  create(@Body() createStudentDto: any) {
    return this.studentService.create(createStudentDto);
  }
  
  @Post('allstudents')
  @ResponseMessage('Student created successfully')
  createAll(@Body() createStudentDto: CreateStudentDto[]) {
    console.log(createStudentDto)
    return this.studentService.createAll(createStudentDto);
  }

  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  @Get('totalstudents')
  countTotalStudents(){
    return this.studentService.countTotalStudents();
  }

  @Get('countByClass')
  async countStudentsByClass() {
    return this.studentService.countStudentsByClass();

  }

  @Get('byClass/:classId')
  async findByClassId(@Param('classId') classId: string) {
    return this.studentService.findByClassId(classId);
  }

  @Get('gender-by-class')
  async getGenderCountByClass() {
    return this.studentService.getGenderCountByClass();
  }

  @Get('total-gender-count')
  async getTotalGenderCount() {
    return this.studentService.getTotalGenderCount();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateStudentDto: CreateStudentDto) {
  //   return this.studentService.update(id, updateStudentDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.remove(id);
  }
}

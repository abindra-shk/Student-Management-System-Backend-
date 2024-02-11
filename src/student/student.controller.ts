import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { ApiTags } from '@nestjs/swagger';
import { ResponseMessage } from 'src/core/decorators/response.decorator';

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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: CreateStudentDto) {
    return this.studentService.update(id, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.remove(id);
  }
}

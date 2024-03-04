// mark.controller.ts

import { Controller, Get, Post, Body, Param, Delete, Query, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { MarksService } from './marks.service';
import { CreateMarkDto } from './dto/create-mark.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('marks')
@ApiTags('Marks')
export class MarksController {
  constructor(private readonly marksService: MarksService) {}

  @Post()
  create(@Body() createMarkDto: CreateMarkDto) {
    return this.marksService.create(createMarkDto);
  }

  @Post('allmarks')
  async createAll(@Body() createMarkDtos: CreateMarkDto[]) {
    try {
      const createdMarks = await this.marksService.createAll(createMarkDtos);
      return { statusCode: 201, message: 'Marks created successfully', data: createdMarks };
    } catch (error) {
      return { statusCode: 400, message: 'Failed to create marks', error: error.message };
    }
  }
  @Get()
  findAll() {
    return this.marksService.findAll();
  }

  @Get('student/:studentId')
  async findMarksByStudentId(@Param('studentId') studentId: string) {
    try {
      return await this.marksService.findMarksByStudentId(studentId);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw new InternalServerErrorException('Something went wrong');
    }
  }

  @Get('class/:classId')
  async getMarksByClassId(@Param('classId') classId: string) {
    return this.marksService.findMarksByClassId(classId);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.marksService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string){
    return this.marksService.remove(id);
  }
}

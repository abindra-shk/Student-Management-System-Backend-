// mark.controller.ts

import { Controller, Get, Post, Body, Param, Delete, Query } from '@nestjs/common';
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

  @Get()
  findAll() {
    return this.marksService.findAll();
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

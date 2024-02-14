// mark.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateMarkDto } from './dto/create-mark.dto';
import { SubjectService } from 'src/subject/subject.service';
import { StudentService } from 'src/student/student.service';
// import { Marks } from './entities/mark.entity';


@Injectable()
export class MarksService {
  // constructor(
  //   @InjectRepository(Marks)
  //   private marksRepository: Repository<Marks>,
  //   private subjectService: SubjectService,
  //   private studentService: StudentService
  // ) {}

  // async create(createMarksDto: CreateMarkDto){
  //   const { studentId, subjectId, academicYear, marksObtained } = createMarksDto;

  //   // Find student
  //   const student = await this.studentService.findOne(studentId);
  //   if (!student) {
  //     throw new Error('Student not found');
  //   }

  //   // Find subject
  //   const subject = await this.subjectService.findOne(subjectId);
  //   if (!subject) {
  //     throw new Error('Subject not found');
  //   }

  //   // Checks if markss obtained is greater than pass markss
  //   const result = marksObtained >= subject.passMarkss ? Result.Pass : Result.Fail;

  //   const marks = this.marksRepository.create({
  //     student,
  //     subject,
  //     academicYear,
  //     marksObtained,
  //     result
  //   });

  //   return this.marksRepository.save(marks);
  // }

  // async findAll(){
  //   return this.marksRepository.find();
  // }

  // async findOne(id: number){
  //   return this.marksRepository.findOne(id);
  // }

  // async remove(id: number): Promise<void> {
  //   await this.marksRepository.delete(id);
  // }
}

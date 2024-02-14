// mark.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateMarkDto } from './dto/create-mark.dto';
import { SubjectService } from 'src/subject/subject.service';
import { StudentService } from 'src/student/student.service';
import { Marks } from './entities/mark.entity';
import { ResultEnum } from 'src/common/enums/result.enum';


@Injectable()
export class MarksService {
  constructor(
    @InjectRepository(Marks)
    private marksRepository: Repository<Marks>,
    private subjectService: SubjectService,
    private studentService: StudentService
  ) {}

  async create(createMarkDto: CreateMarkDto){
    const { studentId, subjectName, classId, academicYear, marksObtained } = createMarkDto;

    // Find student
    const student = await this.studentService.findOne(studentId);
    if (!student) {
      throw new Error('Student not found');
    }

    // Find subject
    const subject = await this.subjectService.findBySubjectNameAndClassId(subjectName, classId);
    if (!subject) {
      throw new Error('Subject not found');
    }

    // Check if marks obtained is greater than pass marks
    const result = marksObtained >= subject.passMarks ? ResultEnum.PASS : ResultEnum.FAIL;

    const mark = this.marksRepository.create({
      student,
      subject,
      academicYear,
      marksObtained,
      result
    });

    return this.marksRepository.save(mark);
  }

  async createAll(createMarkDtos: CreateMarkDto[]) {
    const marks: Marks[] = [];

    for (const createMarkDto of createMarkDtos) {
      const { studentId, subjectName, classId, academicYear, marksObtained } = createMarkDto;

      // Find student
      const student = await this.studentService.findOne(studentId);
      if (!student) {
        throw new Error(`Student with ID ${studentId} not found`);
      }

      // Find subject
      const subject = await this.subjectService.findBySubjectNameAndClassId(subjectName, classId);
      if (!subject) {
        throw new Error(`Subject '${subjectName}' not found for class ${classId}`);
      }

      // Check if marks obtained is greater than pass marks
      const result = marksObtained >= subject.passMarks ? ResultEnum.PASS : ResultEnum.FAIL;

      const mark = this.marksRepository.create({
        student,
        subject,
        academicYear,
        marksObtained,
        result,
      });

      marks.push(mark);
    }

    return this.marksRepository.save(marks);
  }
  
  async findMarksByStudentId(studentId: string) {
    const student = await this.studentService.findOne(studentId);
    if (!student) {
      throw new NotFoundException(`Student with ID ${studentId} not found`);
    }
    return this.marksRepository.find({ where: { student: { id: studentId } } });
  }

  async findAll(){
    return this.marksRepository.find();
  }

  async findOne(id: string){
    return this.marksRepository.findOne({ where: { id: id } });
  }

  async remove(id: string){
    await this.marksRepository.delete(id);
  }
}

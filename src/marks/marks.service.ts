// mark.service.ts

import { Injectable } from '@nestjs/common';
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

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

  // async create(createMarkDto: CreateMarkDto){
  //   const { student_id, subjectName, classId, academicYear, marksObtained } = createMarkDto;

  //   // Find student
  //   const student = await this.studentService.findOne(student_id);
  //   if (!student) {
  //     throw new Error('Student not found');
  //   }

  //   // Find subject
  //   const subject = await this.subjectService.findBySubjectNameAndClassId(subjectName, classId);
  //   if (!subject) {
  //     throw new Error('Subject not found');
  //   }

  //   // Check if marks obtained is greater than pass marks
  //   const result = marksObtained >= subject.passMarks ? ResultEnum.PASS : ResultEnum.FAIL;

  //   const mark = this.marksRepository.create({
  //     student,
  //     subject,
  //     academicYear,
  //     marksObtained,
  //     result
  //   });

  //   return this.marksRepository.save(mark);
  // }

  async create(createMarkDto: CreateMarkDto){
    const { student_id, subjectName, classId, academicYear, marksObtained } = createMarkDto;

    // Find student
    const student = await this.studentService.findOne(student_id);
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

    // Check if the mark already exists
    const existingMark = await this.findExistingMark(student_id, subject.id, academicYear);
    console.log('existingMark',existingMark)
    if (existingMark) {
      return { message: 'Record already exists' };
    }
  
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
      const { student_id, subjectName, classId, academicYear, marksObtained } = createMarkDto;


      const student = await this.studentService.findOne(student_id);
      if (!student) {
        throw new Error(`Student with ID ${student_id} not found`);
      }

      const subject = await this.subjectService.findBySubjectNameAndClassId(subjectName, classId);
      if (!subject) {
        throw new Error(`Subject '${subjectName}' not found for class ${classId}`);
      }
      
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
    const marks = await this.marksRepository.createQueryBuilder("mark")
      .leftJoin("mark.subject", "subject")
      .leftJoin("mark.student", "student")
      .leftJoin("student.class", "class")
      .select([
        "student.id as studentId",
        "student.firstName as studentName",
        "mark.academicYear as academicyear",
        "subject.subjectName as subjectname",
        "mark.marksObtained as marksobtained",
        "subject.fullMarks as fullmarks",
        "subject.passMarks as passmarks",
        "mark.result as result",
        "class.className as classname"
      ])
      .where("student.id = :studentId", { studentId })
      .orderBy("mark.academicYear", "DESC")
      .getRawMany();
    console.log('marks',marks)
    // Group marks by student
    const marksByStudent = {
      studentid:'',
      studentname: '',
      classname:'',
      academicYears: {}
    };

    marks.forEach(mark => {
      const { studentid, studentname,classname, academicyear, subjectname, marksobtained, fullmarks, passmarks,result } = mark;
      marksByStudent.studentid = studentid;
      marksByStudent.studentname = studentname;
      marksByStudent.classname = classname;

      if (!marksByStudent.academicYears[academicyear]) {
        marksByStudent.academicYears[academicyear] = [];
      }
      marksByStudent.academicYears[academicyear].push({ subjectname, marksobtained, fullmarks, passmarks,result });
    });
  
    return marksByStudent;
}



  async findMarksByClassId(classId: string) {
    const marks = await this.marksRepository.createQueryBuilder("mark")
      .leftJoin("mark.subject", "subject")
      .leftJoin("mark.student", "student")
      .leftJoin("student.class", "class")
      .select([
        "student.id as studentId",
        "student.firstName as studentName",
        "class.className as className",
        "mark.academicYear as academicyear",
        "subject.subjectName as subjectname",
        "mark.marksObtained as marksobtained",
        "mark.result as result",
        "subject.fullMarks as fullmarks",
        "subject.passMarks as passmarks"
      ])
      .where("class.id = :classId", { classId })
      .orderBy("student.id")
      .addOrderBy("mark.academicYear")
      .getRawMany();
  console.log('marks',marks)
    // Group marks by student
    const marksByStudent = {};
    marks.forEach(mark => {
      const { studentid, studentname,classname,academicyear, subjectname, marksobtained, fullmarks, passmarks,result  } = mark;
      if (!marksByStudent[studentid]) {
        marksByStudent[studentid] = { studentid, studentname,classname, academicYears: {} };
      }
      if (!marksByStudent[studentid].academicYears[academicyear]) {
        marksByStudent[studentid].academicYears[academicyear] = [];
      }
      marksByStudent[studentid].academicYears[academicyear].push({subjectname, marksobtained, fullmarks, passmarks,result });
    });
  
    return marksByStudent;
  }
  
  async updateMarksByStudentId(createMarkDto: CreateMarkDto) {
    const { student_id, subjectName, classId, academicYear, marksObtained } = createMarkDto;

    // Find student
    const student = await this.studentService.findOne(student_id);
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

    // Find the existing mark
    const existingMark = await this.findExistingMark(student_id, subject.id, academicYear);
    if (!existingMark) {
      throw new Error('Record not found');
    }

    // Update marks obtained
    existingMark.marksObtained = marksObtained;
    existingMark.result = result;

    return this.marksRepository.save(existingMark);
  }


  async findExistingMark(studentId: string, subjectId: string, academicYear: number) {
    const existingMark = await this.marksRepository.createQueryBuilder("mark")
      .leftJoin("mark.student", "student")
      .leftJoin("mark.subject", "subject")
      .select("mark.id", "id")
      .where("student.id = :studentId", { studentId })
      .andWhere("subject.id = :subjectId", { subjectId })
      .andWhere("mark.academicYear = :academicYear", { academicYear })
      .getRawOne();

    return existingMark;
}

  async update(id: string, data: CreateMarkDto) {
    const { student_id, subjectName, classId, academicYear, marksObtained } = data;

    // Find student
    const student = await this.studentService.findOne(student_id);
    if (!student) {
      throw new NotFoundException(`Student with ID ${student_id} not found`);
    }

    // Find subject
    const subject = await this.subjectService.findBySubjectNameAndClassId(subjectName, classId);
    if (!subject) {
      throw new NotFoundException(`Subject '${subjectName}' not found for class ${classId}`);
    }

    // Check if marks obtained is greater than pass marks
    const result = marksObtained >= subject.passMarks ? ResultEnum.PASS : ResultEnum.FAIL;

    // Find the mark to update
    const mark = await this.marksRepository.findOne({ where: { id: id } });
    if (!mark) {
      throw new NotFoundException(`Mark with ID ${id} not found`);
    }

    // Update mark properties
    mark.student = student;
    mark.subject = subject;
    mark.academicYear = academicYear;
    mark.marksObtained = marksObtained;
    mark.result = result;

    return this.marksRepository.save(mark);
  }

  async getPercentageByStudentId(studentId: string){
    const marksByYearQuery = this.marksRepository.createQueryBuilder('marks')
      .innerJoin('marks.subject', 'subject')
      .select('marks.academicYear', 'academicYear')
      .addSelect('SUM(marks.marksObtained)', 'totalMarks')
      .addSelect('SUM(subject.fullMarks)', 'totalFullMarks')
      .where('marks.student = :studentId', { studentId })
      .groupBy('marks.academicYear');

    const marksByYear = await marksByYearQuery.getRawMany();

    const percentages = marksByYear.map(row => ({
      academicYear: parseInt(row.academicYear),
      percentage: (row.totalMarks / row.totalFullMarks) * 100,
    }));

    return percentages;
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

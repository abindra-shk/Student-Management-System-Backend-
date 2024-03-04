import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject } from './entities/subject.entity';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { ClassService } from 'src/class/class.service';
import { StudentService } from 'src/student/student.service';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private subjectRepository: Repository<Subject>,
    private classService: ClassService,
    private studentService: StudentService
  ) {}

  async create(createSubjectDto: any) {
    const classEntity = await this.classService.findOneByClassName(createSubjectDto.class);
    if (!classEntity) {
      throw new Error('Class not found');
    }
    const newSubject = this.subjectRepository.create({
      subjectName: createSubjectDto.subjectName,
      class: classEntity, // Associate the class entity with the subject
      fullMarks: createSubjectDto.fullMarks,
      passMarks: createSubjectDto.passMarks,
    });

    // Save the new subject entity
    return this.subjectRepository.save(newSubject);
  }

  async createAll(createSubjectDtos: CreateSubjectDto[]) {
    const subjects: Subject[] = [];
    
    for (const createSubjectDto of createSubjectDtos) {
      const classEntity = await this.classService.findOneByClassName(createSubjectDto.class);
      if (!classEntity) {
        throw new Error(`Class not found for subject: ${createSubjectDto.subjectName}`);
      }
      
      const newSubject = this.subjectRepository.create({
        subjectName: createSubjectDto.subjectName,
        class: classEntity,
        fullMarks: createSubjectDto.fullMarks,
        passMarks: createSubjectDto.passMarks,
      });
      
      subjects.push(newSubject);
    }

    // Save all the new subject entities
    return this.subjectRepository.save(subjects);
  }

  async findAll() {
    return this.subjectRepository
    .createQueryBuilder('subject')
    .leftJoinAndSelect('subject.class', 'class')
    .getMany();
  }

  async findByClassId(classId: string) {
    return this.subjectRepository.find({ where: { class: { id: classId } } });
  }

  async findBySubjectNameAndClassId(subjectName: string, classId: string) {
    return this.subjectRepository
      .createQueryBuilder('subject')
      .where('subject.subjectName = :subjectName', { subjectName })
      .andWhere('subject.classId = :classId', { classId })
      .leftJoinAndSelect('subject.class', 'class')
      .getOne();
  }

  async findSubjectsByStudentId(studentId: string): Promise<Subject[]> {
    // Find the student by ID
    const student = await this.studentService.findOne(studentId)

    if (!student) {
      throw new Error(`Student with ID ${studentId} not found`);
    }

    // Get the class ID from the student entity
    const classId = student.class.id;

    // Query subjects based on the class ID
    const subjects = await this.subjectRepository
      .createQueryBuilder('subject')
      .where('subject.class.id = :classId', { classId })
      .getMany();

    return subjects;
  }

  async findOne(id: string) {
    return this.subjectRepository.findOne({ where: { id: id } });
  }

  async update(id: string, updateSubjectDto: CreateSubjectDto) {
    const { class: className, ...restData } = updateSubjectDto;
    const classEntity = await this.classService.findOneByClassName(className);
    if (!classEntity) {
      throw new Error('Class not found');
    }
  
    await this.findOne(id); // Check if subject exists
  
    return this.subjectRepository.update(id, {
      ...restData,
      class: classEntity
    });
  }
  

  async remove(id: string) {
    await this.subjectRepository.delete(id);
  }
}

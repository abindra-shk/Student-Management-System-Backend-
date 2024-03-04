import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity'; // Make sure to import the correct entity
import { UserService } from 'src/user/http/services/user.service';
import { Role } from 'src/user/types';
import { CreateStudentDto } from './dto/create-student.dto';
import { Class } from 'src/class/entities/class.entity';
import { ClassService } from 'src/class/class.service';
import { FinalAttendanceService } from 'src/final_attendance/final_attendance.service';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
    private readonly userService: UserService,
    private readonly classService: ClassService,
    // private readonly finalAttendanceService: FinalAttendanceService,

  ) {}

  async create(createStudentDto: any) {
    console.log()
    const user = await this.userService.create({
      username: createStudentDto.username,
      password: createStudentDto.password,
      role: Role.student,
    });
    const classEntity = await this.classService.findOneByClassName(createStudentDto.class);

    // Create student with the user ID
    const student = this.studentRepository.create({
      firstName: createStudentDto.firstName,
      lastName: createStudentDto.lastName,
      gender: createStudentDto.gender,
      dateOfBirth: createStudentDto.dateOfBirth,
      rollNo: createStudentDto.rollNo,
      class: classEntity,
      guardianName: createStudentDto.guardianName,
      guardianPhone: createStudentDto.guardianPhone,
      address: createStudentDto.address,
      user: user.raw[0], // Assign the user entity
    });

    return this.studentRepository.save(student);
  }

  async createAll(createStudentDtoArray: CreateStudentDto[]) {
    const createdStudents = [];
  
    for (const createStudentDto of createStudentDtoArray) {
      const user = await this.userService.create({
        username: createStudentDto.username,
        password: createStudentDto.password,
        role: Role.student,
      });
      const classEntity = await this.classService.findOneByClassName(createStudentDto.class);
  
      // Create student with the user ID
      const student = this.studentRepository.create({
        firstName: createStudentDto.firstName,
        lastName: createStudentDto.lastName,
        gender: createStudentDto.gender,
        dateOfBirth: createStudentDto.dateOfBirth,
        rollNo: createStudentDto.rollNo,
        class: classEntity,
        guardianName: createStudentDto.guardianName,
        guardianPhone: createStudentDto.guardianPhone,
        address: createStudentDto.address,
        user: user.raw[0], // Assign the user entity
      });
  
      createdStudents.push(student);
    }
  
    return this.studentRepository.save(createdStudents);
  }

  async findAll() {
    return this.studentRepository.createQueryBuilder("student")
      .leftJoinAndSelect('student.class', 'class')
      .leftJoinAndSelect('student.user', 'user')
      .getMany();
  }
  
  async findOne(id: string) {
    return this.studentRepository.createQueryBuilder('student')
      .leftJoinAndSelect('student.class', 'class')
      .leftJoinAndSelect('student.user', 'user')
      .where('student.id = :id', { id })
      .getOne();
  }
  

  async countTotalStudents(){
    return this.studentRepository.count();
  }

  async countStudentsByClass(){
    const classCounts = await this.studentRepository
    .createQueryBuilder('student')
    .select('student.classId as classId, COUNT(*) as count')
    .groupBy('student.classId')
    .orderBy('student.classId')
    .getRawMany();

  // Log only the 'count' values
  console.log(classCounts.map(count => count.count));

  return classCounts;
  }  

  async findByClassId(classId: string) {
    return this.studentRepository.createQueryBuilder('student')
      .leftJoinAndSelect('student.class', 'class')
      .leftJoinAndSelect('student.user', 'user')
      .where('class.id = :classId', { classId })
      .getMany();
  }

  async getGenderCountByClass(): Promise<any> {
    const result = await this.studentRepository
      .createQueryBuilder('student')
      .select('COUNT(student.id)', 'count')
      .addSelect('student.gender', 'gender')
      .addSelect('student.class', 'class')
      .groupBy('student.gender')
      .addGroupBy('student.class')
      .orderBy('student.class')
      .getRawMany();

    return result;
  }

  async getTotalGenderCount(): Promise<any> {
    const result = await this.studentRepository
      .createQueryBuilder('student')
      .select('COUNT(student.id)', 'count')
      .addSelect('student.gender', 'gender')
      .groupBy('student.gender')
      .getRawMany();

    return result;
  }

  async findOneByUsername(username: string){
    return this.studentRepository
      .createQueryBuilder('student')
      .leftJoinAndSelect('student.user', 'user')
      .where('user.username = :username', { username })
      .getOne();
  }
  
  async update(id:string, data:CreateStudentDto) {
    const { class: className, ...restData } = data;
    const classEntity = await this.classService.findOneByClassName(className);
    if (!classEntity) {
      throw new NotFoundException(`Class '${className}' not found`);
    }
  
    return this.studentRepository.createQueryBuilder("user")
      .update(Student)
      .set({
        ...restData,
        class: classEntity
      })
      .where("user.id=:id", { id: +id })
      .execute();
  }
  
  async remove(id: string) {
    await this.studentRepository.delete(id);
  }
}

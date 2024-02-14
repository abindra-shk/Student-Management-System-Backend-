import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity'; // Make sure to import the correct entity
import { UserService } from 'src/user/http/services/user.service';
import { Role } from 'src/user/types';
import { CreateStudentDto } from './dto/create-student.dto';
import { Class } from 'src/class/entities/class.entity';
import { ClassService } from 'src/class/class.service';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
    private readonly userService: UserService,
    private readonly classService: ClassService
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
    return this.studentRepository.findOne({ where: { id: id } });
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

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teacher } from './entities/teacher.entity';
import { UserService } from 'src/user/http/services/user.service';
import { Role } from 'src/user/types';
import { SubjectService } from 'src/subject/subject.service';
import { AddressService } from 'src/address/address.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private teacherRepository: Repository<Teacher>,
    private readonly userService: UserService,
    private readonly subjectService: SubjectService,
    private readonly addressService: AddressService,
    

  ) {}

  async create(createTeacherDto: any) {
    console.log('Inside create method...', createTeacherDto);
    const user = await this.userService.create({
      username: createTeacherDto.username,
      password: createTeacherDto.password,
      role: Role.teacher,
      
    });
    
    const address = await this.addressService.create({
      address: createTeacherDto.address,
      city: createTeacherDto.city,
      state: createTeacherDto.state,
      zipCode: createTeacherDto.zipCode,
      country: createTeacherDto.country,
    });
    
    // Create teacher with the user ID
    const teacher = this.teacherRepository.create({
      firstName: createTeacherDto.firstName,
      lastName: createTeacherDto.lastName,
      gender: createTeacherDto.gender,
      dateOfBirth: createTeacherDto.dateOfBirth,
      mobile: createTeacherDto.mobile,
      joiningDate: createTeacherDto.joiningDate,
      qualification: createTeacherDto.qualification,
      experience: createTeacherDto.experience,
      email: createTeacherDto.email,
      user: user.raw[0], // Assign the user entity
      address: address,
      subjects:[]
    });
   
    const savedTeacher = await this.teacherRepository.save(teacher);
    console.log('savedteacher',savedTeacher.subjects)

  // Add subjects to the teacher
  for (const subjectInfo of createTeacherDto.subjects) {
    const subject = await this.subjectService.findBySubjectNameAndClassId(subjectInfo.subjectName, subjectInfo.classId);
    if (subject) {
      savedTeacher.subjects.push(subject);
    } else {
      throw new NotFoundException(`Subject '${subjectInfo.subjectName}' for class '${subjectInfo.classId}' not found`);
    }
  }

  // Save the updated teacher entity with associated subjects
  await this.teacherRepository.save(savedTeacher);

  return savedTeacher;
  }
  
  async createAll(createTeacherDtoArray: CreateTeacherDto[]) {
    const createdTeachers = [];
  
    for (const createTeacherDto of createTeacherDtoArray) {
      const user = await this.userService.create({
        username: createTeacherDto.username,
        password: createTeacherDto.password,
        role: Role.teacher,
        
      });
      
      const address = await this.addressService.create({
        address: createTeacherDto.address,
        city: createTeacherDto.city,
        state: createTeacherDto.state,
        zipCode: createTeacherDto.zipCode,
        country: createTeacherDto.country,
      });
      // Create student with the user ID
      const teacher = this.teacherRepository.create({
        firstName: createTeacherDto.firstName,
        lastName: createTeacherDto.lastName,
        gender: createTeacherDto.gender,
        dateOfBirth: createTeacherDto.dateOfBirth,
        mobile: createTeacherDto.mobile,
        joiningDate: createTeacherDto.joiningDate,
        qualification: createTeacherDto.qualification,
        experience: createTeacherDto.experience,
        email: createTeacherDto.email,
        user: user.raw[0], // Assign the user entity
        address: address,
        subjects:[]
      });

      for (const subjectInfo of createTeacherDto.subjects) {
        const subject = await this.subjectService.findBySubjectNameAndClassId(subjectInfo.subjectName, subjectInfo.classId);
        if (subject) {
          teacher.subjects.push(subject);
        } else {
          throw new NotFoundException(`Subject '${subjectInfo.subjectName}' for class '${subjectInfo.classId}' not found`);
        }
      }

  
      createdTeachers.push(teacher);
    }
  
    return this.teacherRepository.save(createdTeachers);
  }

  async findAll() {
    return this.teacherRepository.createQueryBuilder("teacher")
      .leftJoinAndSelect("teacher.address", "address")
      .leftJoinAndSelect("teacher.user", "user")
      .getMany();
  }

  async findOne(id: string) {
    return this.teacherRepository.createQueryBuilder("teacher")
      .leftJoinAndSelect("teacher.address", "address")
      .leftJoinAndSelect("teacher.user", "user")
      .where("teacher.id = :id", { id: id })
      .getOne();
  }

  async update(id, data) {
    return this.teacherRepository.createQueryBuilder("user")
      .update(Teacher)
      .where("user.id=:id", { id: +id })
      .set({
        ...data
      })
      .execute();
  }

  async remove(id: string) {
    await this.teacherRepository.delete(id);
  }
}

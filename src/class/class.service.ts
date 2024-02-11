import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Class } from './entities/class.entity';
import { CreateClassDto } from './dto/create-class.dto';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(Class)
    private classRepository: Repository<Class>,
  ) {}

  async create(createClassDto: CreateClassDto) {
    return this.classRepository.save(createClassDto);
  }

  async findAll() {
    return this.classRepository.find();
  }

  async findOne(id: string) {
    return this.classRepository.findOne({ where: { id: id } });
  }

  async findOneByClassName(className:string){
    return this.classRepository.findOne({ where: { className: className } });
  }

  async update(id: string, createClassDto: CreateClassDto) {
    await this.findOne(id); // Check if user details exist
    return this.classRepository.update(id, createClassDto);
  }

  async remove(id: string) {
    await this.classRepository.delete(id);
  }
}

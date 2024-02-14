import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from './entities/address.entity';
import { CreateAddressDto } from './dto/create-address.dto';


@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) {}

  async create(addressDto: CreateAddressDto) {
    return this.addressRepository.save(addressDto);
  }

  async findAll() {
    return this.addressRepository.find();
  }

  async findOne(id: string) {
    return this.addressRepository.findOne({ where: { id: id } });
  }

  async update(id: string, addressDto: CreateAddressDto) {
    await this.findOne(id); // Check if address exists
    return this.addressRepository.update(id, addressDto);
  }

  async remove(id: string) {
    await this.addressRepository.delete(id);
  }
}

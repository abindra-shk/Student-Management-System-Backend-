import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from './entities/teacher.entity';
import { UserService } from 'src/user/http/services/user.service';
import { User } from 'src/user/entities/user.entity';
import { UserModule } from 'src/user/user.module';
import { SubjectModule } from 'src/subject/subject.module';
import { AddressModule } from 'src/address/address.module';

@Module({
  imports: [TypeOrmModule.forFeature([Teacher,User]),UserModule,SubjectModule,AddressModule],
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}

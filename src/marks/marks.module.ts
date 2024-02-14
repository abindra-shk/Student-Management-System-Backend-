import { Module } from '@nestjs/common';
import { MarksService } from './marks.service';
import { MarksController } from './marks.controller';
import { SubjectModule } from 'src/subject/subject.module';
import { Marks } from './entities/mark.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { StudentModule } from 'src/student/student.module';

@Module({
  imports: [TypeOrmModule.forFeature([Marks]),SubjectModule,StudentModule],
  controllers: [MarksController],
  providers: [MarksService],
  exports: [MarksService]  
})
export class MarksModule {}

import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserCommand } from 'src/user/commands/create-user.command';
import { CreateUserExceptionFilter } from '../exception-filters/create-user.exception-filter';
import { DuplicateUserExceptionFilter } from '../exception-filters/duplicate-user.exception-filter';
import { CreateUserRequest } from '../requests/create-user.request';
import { ResponseMessage } from 'src/core/decorators/response.decorator';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly commandBus: CommandBus
    ) {
  }

  // @UseFilters(new DuplicateUserExceptionFilter())
  // @UseFilters(new CreateUserExceptionFilter())
  // @Post("/user")
  // @ResponseMessage('User created successfully')
  // async createUser(@Body() body: CreateUserRequest) {
  //   // if (body.role !== Role.STAFF_ADMIN ) {
  //   //   throw new CreateUserException(`You are not allowed to create ${body.role} user`);
  //   // }

  //   const userdata = await this.commandBus.execute(new CreateUserCommand(body));
  //   return userdata;
  // }
  @Post("/user")
  @ResponseMessage('User created successfully')
  @ApiBody({
    type: CreateUserRequest,
    description: 'Create user body'
  })
  async createUser(@Body() body: CreateUserRequest) {
    return this.userService.create(body);
  }

  // @Post()
  // create(@Body() createUserDto: any) {
  //   return this.userService.create(createUserDto);
  // }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('byUsername/:username')
  findOneByUsername(@Param('username') username: string) {
    return this.userService.findOneByUsername(username);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }

}


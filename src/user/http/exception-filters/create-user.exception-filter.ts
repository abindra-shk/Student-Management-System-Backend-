import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserException } from '../../exceptions/create-user.exception';
import { IErrorBody } from '../../../core/http/response/types';

@Catch(CreateUserException)
export class CreateUserExceptionFilter implements ExceptionFilter<CreateUserException> {
  catch(exception: CreateUserException, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
      title: 'Could not create user',
      status: HttpStatus.UNPROCESSABLE_ENTITY,
      detail: exception.message,
    } as IErrorBody);
  }
}

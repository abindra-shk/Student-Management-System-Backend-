import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { DuplicateUserException } from '../../exceptions/duplicate-user.exception';
import { IErrorBody } from '../../../core/http/response/types';

@Catch(DuplicateUserException)
export class DuplicateUserExceptionFilter implements ExceptionFilter<DuplicateUserException> {
  catch(exception: DuplicateUserException, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
      title: 'Duplicate user',
      status: HttpStatus.UNPROCESSABLE_ENTITY,
      detail: exception.message,
    } as IErrorBody);
  }
}

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ISuccessBody } from '../response/types';
import { ResponseMessageKey } from '../../decorators/response.decorator';
import { Reflector } from '@nestjs/core';

const IgnoredPropertyName = Symbol('IgnoredPropertyName');

export function ResponseTransformInterceptorIgnore() {
  return function (
    target,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    descriptor.value[IgnoredPropertyName] = true;
  };
}

@Injectable()
export class ResponseTransformInterceptor<T>
  implements NestInterceptor<T, ISuccessBody<T> | null>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ISuccessBody<any> | null> {
    const responseMessage =
      new Reflector().get<string>(ResponseMessageKey, context.getHandler()) ??
      '';
    const isIgnored = context.getHandler()[IgnoredPropertyName];
    if (!!isIgnored) {
      return next.handle().pipe(map((data) => data));
    }

    return next.handle().pipe(
      map((data: ISuccessBody<any> | undefined) => {
        if (data === undefined) {
          return null;
        }

        if (data.hasOwnProperty('items')) {
          return data;
        }

        return {
          statusCode: context.switchToHttp().getResponse().statusCode,
          reqId: context.switchToHttp().getRequest().reqId,
          message: responseMessage ?? '',
          data,
        };
      }),
    );
  }
}

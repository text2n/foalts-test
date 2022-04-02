import { Context, Get, HttpResponseOK } from '@foal/core';
import { JWTRequired } from '@foal/jwt';

@JWTRequired()
export class UsersController {

  @Get('/')
  foo(ctx: Context) {
    return new HttpResponseOK();
  }

}

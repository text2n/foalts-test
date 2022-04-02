import { ApiDefineSecurityScheme, ApiInfo, ApiServer, Context, controller, Get, HttpResponseOK } from '@foal/core';
import { JWTRequired } from '@foal/jwt';
import { AuthController, UsersController } from './api';

@ApiInfo({
  title: 'A Great API',
  version: '1.0.0'
})
@ApiServer({
  url: '/api'
})
// @ApiDefineSecurityScheme('bearerAuth', {
//   type: 'http',
//   scheme: 'bearer',
//   bearerFormat: 'JWT'
// })
//@JWTRequired()
export class ApiController {
  subControllers = [
    controller('/users', UsersController),
    controller('/auth', AuthController)
  ];
}

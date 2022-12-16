import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAdminCustomerGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const req: Request = context.switchToHttp().getRequest();
      const authHeader = req.headers.authorization;
      const bearer = authHeader.split(' ')[0];
      const token = authHeader.split(' ')[1];
      let param = req.params.id;

      console.log(token);
      if (bearer !== 'Bearer' || !token) {
        // console.log(token)
        throw new UnauthorizedException({
          message: 'The user is not authorized1',
        });
      }
      // console.log(token)
      const user = this.jwtService.verify(token, {
        publicKey: process.env.ACCESS_TOKEN_KEY,
      });

      if (user['email']) {
        if (param) {
          if (param == user.id) return true;

          throw new UnauthorizedException({
            message: 'You are not allowed',
          });
        }
        return true;
      } 

      if (user.is_creator) {
        return true;
      }
      if (!user.is_active) {
        throw new UnauthorizedException({
          message: 'You are not allowed',
        });
      }
      // console.log(user);
      return true;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'The user is not authorized',
        HttpStatus.FORBIDDEN,
      );
    }
  }
}

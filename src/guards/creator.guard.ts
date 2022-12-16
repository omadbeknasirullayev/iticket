import {
    CanActivate,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import {JwtService} from '@nestjs/jwt'
  import { Observable } from 'rxjs';
  
  @Injectable()
  export class JwtCreatorGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {}
  
    canActivate(
      context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
      try {
        const req = context.switchToHttp().getRequest();
        const authHeader = req.headers.authorization;
        const bearer = authHeader.split(' ')[0];
        const token = authHeader.split(' ')[1];

        
        if (bearer !== 'Bearer' || !token) {
            // console.log(token)
            throw new UnauthorizedException({
                message: "The creator is not authorized1",
            });
        }

        const creator = this.jwtService.verify(token, {publicKey: process.env.ACCESS_TOKEN_KEY});

        if (creator.is_creator) {
            return true
        }
        throw new UnauthorizedException({
            message: "The creator is not authorized1",
        });

      } catch (error) {
        console.log(error)
        throw new HttpException(
          'The creator is not authorized',
          HttpStatus.FORBIDDEN
        );
      }
    }
  }
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Response } from 'express';
import * as bcrypt from 'bcryptjs';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload, Tokens } from './types';
import { AdminDto } from './dto/admin.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin) private adminRepository: typeof Admin,
    private jwtService: JwtService,
  ) {}

  // signin
  async signin(adminDto: AdminDto, res: Response): Promise<Tokens> {
    const { login, password } = adminDto;
    const admin = await this.adminRepository.findOne({
      where: { login },
    });
    if (!admin) throw new ForbiddenException('Access Denied');

    const passwordMatches = await bcrypt.compare(
      password,
      admin.hashed_password,
    );
    if (!passwordMatches) throw new ForbiddenException('Access Denied');

    const tokens = await this.getTokens(admin);
    await this.updateRefreshTokenHash(admin.id, tokens.refresh_token);

    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return tokens;
  }

  //signup
  async signup(adminDto: CreateAdminDto, res: Response): Promise<Tokens> {
    const candidate = await this.adminRepository.findOne({
      where: { login: adminDto.login },
    });
    if (candidate) throw new BadRequestException('Such an email exists');

    const hashedPassword = await bcrypt.hash(adminDto.password, 7);
    const newAdmin = await this.adminRepository.create({
      ...adminDto,
      hashed_password: hashedPassword,
    });

    const tokens = await this.getTokens(newAdmin);
    await this.updateRefreshTokenHash(newAdmin.id, tokens.refresh_token);

    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return tokens;
  }

  // logout
  async logout(id: number, res: Response): Promise<boolean> {
    const admin = await this.adminRepository.update(
      { hashed_refresh_token: null },
      { where: { id: +id } },
    );

    if (!admin) throw new ForbiddenException('Access Denied');
    res.clearCookie('refresh_token');
    return true;
  }

  //getToken
  async getTokens(admin: Admin): Promise<Tokens> {
    const jwtPayload: JwtPayload = {
      sub: admin.id,
      login: admin.login,
      is_active: admin.is_active,
      is_creator: admin.is_creator,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),

      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  //updaterefreshToken
  async updateRefreshTokenHash(
    adminId: number,
    refreshToken: string,
  ): Promise<void> {
    const hashedRefreshToken = await bcrypt.hash(refreshToken, 7);
    await this.adminRepository.update(
      { hashed_refresh_token: hashedRefreshToken },
      { where: { id: adminId } },
    );
  }

  // refreshToken
  async refreshTokens(
    adminId: number,
    refreshToken: string,
    res: Response,
  ): Promise<Tokens> {
    const admin = await this.adminRepository.findOne({
      where: { id: adminId },
    });

    if (!admin || !admin.hashed_refresh_token)
      throw new ForbiddenException('Access Denied');

    const rtMatches = await bcrypt.compare(
      refreshToken,
      admin.hashed_refresh_token,
    );

    if (!rtMatches) throw new ForbiddenException('Access Denied');

    const tokens = await this.getTokens(admin);
    await this.updateRefreshTokenHash(admin.id, tokens.refresh_token);

    res.clearCookie('refresh_token');
    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    return tokens;
  }

  async activate(id: number) {
    const admin = await this.adminRepository.findOne({where: {id}})
    if (!admin) {
      throw new NotFoundException('No such admin exists');
    }
    if (admin.is_active == true) {
      return {message: "Admin alraedy active"}
    }
    await this.adminRepository.update({is_active: true}, {where: {id}})
    return {message: "Successfully acivated"}
  }

  async deActivate(id: number) {
    const admin = await this.adminRepository.findOne({where: {id}})
    if (!admin) {
      throw new NotFoundException('No such admin exists');
    }
    if (admin.is_active == false) {
      return {message: "Admin alraedy inactive"}
    }
    await this.adminRepository.update({is_active: false}, {where: {id}})
    return {message: "Successfully inacivated"}
  }

  async findAll() {
    const admins = await this.adminRepository.findAll();
    return admins;
  }

  async findOne(id: number) {
    const admin = await this.adminRepository.findOne({ where: { id } });
    return admin;
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    const admin = await this.adminRepository.findOne({ where: { id } });
    if (!admin) {
      throw new NotFoundException('No such admin exists');
    }
    const updated = await this.adminRepository.update(updateAdminDto, {
      where: { id },
      returning: true,
    });
    return updated;
  }

  async remove(id: number) {
    const deleted = await this.adminRepository.destroy({ where: { id } });
    return { message: 'Successfully removed' };
  }
}

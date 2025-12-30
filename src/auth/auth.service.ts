import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(RegisterDto: RegisterDto) {
    const hashed = await bcrypt.hash(RegisterDto.password, 10);

    const user = await this.usersService.create({
      email: RegisterDto.email,
      password: hashed,
      name: RegisterDto.name,
    });

    return this.signToken(user.id, user.email);
  }

  async login(LoginDto: LoginDto) {
    const user = await this.usersService.findByEmail(LoginDto.email);

    if (!user || !(await bcrypt.compare(LoginDto.password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.signToken(user.id, user.email);
  }

  private signToken(userId: number, email: string) {
    return {
      accessToken: this.jwtService.sign({
        sub: userId,
        email,
      }),
    };
  }
}

import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from '../users/dto/login.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login utilisateur' })
  @ApiResponse({ status: 200, description: 'Token JWT + user' })
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }
}

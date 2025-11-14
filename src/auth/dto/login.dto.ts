import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ description: 'Email de l’utilisateur ou username' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Mot de passe de l’utilisateur' })
  @IsString()
  password: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsOptional } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'Prénom de l’utilisateur' })
  @IsString()
  firstname: string;

  @ApiProperty({ description: 'Nom de famille de l’utilisateur' })
  @IsString()
  lastname: string;

  @ApiProperty({ description: 'Email de l’utilisateur' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Mot de passe de l’utilisateur' })
  @IsString()
  password: string;

  @ApiProperty({ description: 'Téléphone', required: false })
  @IsOptional()
  @IsString()
  phone?: string;
}

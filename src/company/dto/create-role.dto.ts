import { IsNotEmpty, IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ description: 'Nom du rôle' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Niveau dans l’organigramme' })
  @IsInt()
  @IsNotEmpty()
  level: number;

  @ApiProperty({ description: 'ID de la société' })
  @IsString()
  @IsNotEmpty()
  companyId: string;
}

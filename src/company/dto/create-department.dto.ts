import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDepartmentDto {
  @ApiProperty({ description: 'Nom du département' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'ID de la division' })
  @IsString()
  @IsNotEmpty()
  divisionId: string;
}

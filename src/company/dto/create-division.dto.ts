import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDivisionDto {
  @ApiProperty({ description: 'Nom de la division' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'ID de la société' })
  @IsString()
  @IsNotEmpty()
  companyId: string;
}

import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCompanyDto {
  @ApiProperty({ description: 'Nom de l’entreprise' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @ApiProperty({ description: 'Slug unique de l’entreprise' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  slug: string;
}

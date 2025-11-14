import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CompanyService } from './company.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CreateDivisionDto } from './dto/create-division.dto';
import { UpdateDivisionDto } from './dto/update-division.dto';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@ApiTags('Companies')
@Controller()
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  // --- Company ---
  @Post('companies')
  @ApiOperation({ summary: 'Créer une société' })
  createCompany(@Body() dto: CreateCompanyDto) {
    return this.companyService.createCompany(dto);
  }

  @Get('companies/:id')
  @ApiOperation({ summary: 'Récupérer une société par ID' })
  getCompany(@Param('id') id: string) {
    return this.companyService.getCompany(id);
  }

  @Put('companies/:id')
  updateCompany(@Param('id') id: string, @Body() dto: UpdateCompanyDto) {
    return this.companyService.updateCompany(id, dto);
  }

  @Delete('companies/:id')
  removeCompany(@Param('id') id: string) {
    return this.companyService.deleteCompany(id);
  }

  // --- Division ---
  @Post('divisions')
  createDivision(@Body() dto: CreateDivisionDto) {
    return this.companyService.createDivision(dto);
  }

  @Get('divisions/:id')
  getDivision(@Param('id') id: string) {
    return this.companyService.getDivision(id);
  }

  @Put('divisions/:id')
  updateDivision(@Param('id') id: string, @Body() dto: UpdateDivisionDto) {
    return this.companyService.updateDivision(id, dto);
  }

  @Delete('divisions/:id')
  removeDivision(@Param('id') id: string) {
    return this.companyService.deleteDivision(id);
  }

  // --- Department ---
  @Post('departments')
  createDepartment(@Body() dto: CreateDepartmentDto) {
    return this.companyService.createDepartment(dto);
  }

  @Get('departments/:id')
  getDepartment(@Param('id') id: string) {
    return this.companyService.getDepartment(id);
  }

  @Put('departments/:id')
  updateDepartment(@Param('id') id: string, @Body() dto: UpdateDepartmentDto) {
    return this.companyService.updateDepartment(id, dto);
  }

  @Delete('departments/:id')
  removeDepartment(@Param('id') id: string) {
    return this.companyService.deleteDepartment(id);
  }

  // --- Role ---
  @Post('roles')
  createRole(@Body() dto: CreateRoleDto) {
    return this.companyService.createRole(dto);
  }

  @Get('roles/:id')
  getRole(@Param('id') id: string) {
    return this.companyService.getRole(id);
  }

  @Put('roles/:id')
  updateRole(@Param('id') id: string, @Body() dto: UpdateRoleDto) {
    return this.companyService.updateRole(id, dto);
  }

  @Delete('roles/:id')
  removeRole(@Param('id') id: string) {
    return this.companyService.deleteRole(id);
  }
}

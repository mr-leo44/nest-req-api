import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCompanyDto } from '../company/dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CreateDivisionDto } from './dto/create-division.dto';
import { UpdateDivisionDto } from './dto/update-division.dto';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class CompanyService {
  constructor(private readonly prisma: PrismaService) {}

  // --- Company ---
  async createCompany(dto: CreateCompanyDto) {
    return this.prisma.company.create({ data: dto });
  }

  async getCompany(id: string) {
    const company = await this.prisma.company.findUnique({
      where: { id },
      include: { divisions: true, roles: true, users: true },
    });
    if (!company) throw new NotFoundException('Company not found');
    return company;
  }

  async updateCompany(id: string, dto: UpdateCompanyDto) {
    return this.prisma.company.update({ where: { id }, data: dto });
  }

  async deleteCompany(id: string) {
    return this.prisma.company.delete({ where: { id } });
  }

  // --- Division ---
  async createDivision(dto: CreateDivisionDto) {
    return this.prisma.division.create({ data: dto });
  }

  async getDivision(id: string) {
    const division = await this.prisma.division.findUnique({
      where: { id },
      include: { departments: true, approvers: true, company: true },
    });
    if (!division) throw new NotFoundException('Division not found');
    return division;
  }

  async updateDivision(id: string, dto: UpdateDivisionDto) {
    return this.prisma.division.update({ where: { id }, data: dto });
  }

  async deleteDivision(id: string) {
    return this.prisma.division.delete({ where: { id } });
  }

  // --- Department ---
  async createDepartment(dto: CreateDepartmentDto) {
    return this.prisma.department.create({ data: dto });
  }

  async getDepartment(id: string) {
    const department = await this.prisma.department.findUnique({
      where: { id },
      include: { users: true, division: true },
    });
    if (!department) throw new NotFoundException('Department not found');
    return department;
  }

  async updateDepartment(id: string, dto: UpdateDepartmentDto) {
    return this.prisma.department.update({ where: { id }, data: dto });
  }

  async deleteDepartment(id: string) {
    return this.prisma.department.delete({ where: { id } });
  }

  // --- Role ---
  async createRole(dto: CreateRoleDto) {
    return this.prisma.role.create({ data: dto });
  }

  async getRole(id: string) {
    const role = await this.prisma.role.findUnique({
      where: { id },
      include: { users: true, company: true },
    });
    if (!role) throw new NotFoundException('Role not found');
    return role;
  }

  async updateRole(id: string, dto: UpdateRoleDto) {
    return this.prisma.role.update({ where: { id }, data: dto });
  }

  async deleteRole(id: string) {
    return this.prisma.role.delete({ where: { id } });
  }
}

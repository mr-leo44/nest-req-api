import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, CompanyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

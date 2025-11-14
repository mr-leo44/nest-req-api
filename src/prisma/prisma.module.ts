import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // permet d'utiliser PrismaService partout sans le réimporter
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}

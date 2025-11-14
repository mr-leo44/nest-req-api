import { Injectable, OnModuleInit, INestApplication } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  enableShutdownHooks(app: INestApplication): void {
    // Workaround officiel Prisma 6 : caster la méthode, pas l’event
    const prismaOn = this.$on.bind(this) as (event: string, handler: () => void) => void;

    prismaOn('beforeExit', () => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      app.close();
    });
  }
}

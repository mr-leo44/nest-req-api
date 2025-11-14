import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const email = process.env.SUPERADMIN_EMAIL!;
  const password = process.env.SUPERADMIN_PASSWORD!;

  if (!email || !password) {
    throw new Error('SUPERADMIN_EMAIL et SUPERADMIN_PASSWORD doivent être définis');
  }

  const hashed: string = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      firstname: 'Super',
      lastname: 'Admin',
      email: email,
      password: hashed,
      isActive: true,
    },
  });

  console.log('Super-admin created');
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());

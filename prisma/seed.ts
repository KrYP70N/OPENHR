import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const defaultUser = await prisma.user.upsert({
    where: {
      name: 'admin'
    },
    update: {},
    create: {
      name: 'admin',
      email: 'admin@gmail.com',
      password: '123'
    }
  });

  console.log(`default user created: ${defaultUser}`)
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
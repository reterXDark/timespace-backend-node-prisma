import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    const res = await prisma.users.update({
      where: { id: 2 },
      data: {
        name: "Aasdssssssssss",
        email: "auhs@prisma.iooo",
        password: "kaj*&*ahasdKssJH",
      },
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

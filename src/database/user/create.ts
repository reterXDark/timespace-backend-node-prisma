import { PrismaClient } from "@prisma/client";
import { createUser } from "../../types/types";

const prisma = new PrismaClient();

export async function create_user({ name, email, password }: createUser) {
  try {
    const res = await prisma.users.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
    });
    console.log(res);
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}

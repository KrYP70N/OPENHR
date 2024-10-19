import { PrismaClient } from "@prisma/client";
import { procedure, router } from "../trpc";

const prisma = new PrismaClient();

export const userRouter = router({
  getUser: procedure.query(async () => {
    return prisma.user.findMany();
  })
});
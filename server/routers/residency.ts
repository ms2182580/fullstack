import { router, publicProcedure } from '../trpc';
import ResidencyTypes from '../types/ResidencyTypes';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const residencyRouter = router({
  addMany: publicProcedure
    .input( z.array(ResidencyTypes) )
    .mutation(async ({ input }) => {
      const result = await prisma.residency.createMany({
        data: input
      });
      return result;
    }),

  addOne: publicProcedure
    .input(ResidencyTypes)
    .mutation(async ({ input }) => {
      const result = await prisma.residency.create({
        data: input
      });
      return result;
    }),

  getAll: publicProcedure
    .query(async () => {
      const result = await prisma.residency.findMany();
      return result;
    }),

  getOne: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const result = await prisma.residency.findUnique({
        where: { id: input.id },
      });
      return result ? result : {};
    }),
});

export type ResidencyRouter = typeof residencyRouter;

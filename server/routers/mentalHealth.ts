import { router, publicProcedure } from '../trpc';
import MentalHealthTypes from '../types/MentalHealthTypes';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const mentalHealthRouter = router({
  addMany: publicProcedure
    .input( z.array(MentalHealthTypes) )
    .mutation(async ({ input }) => {
      const result = await prisma.mentalHealth.createMany({
        data: input
      });
      return result;
    }),

  addOne: publicProcedure
    .input(MentalHealthTypes)
    .mutation(async ({ input }) => {
      const result = await prisma.mentalHealth.create({
        data: input
      });
      return result;
    }),

  getAll: publicProcedure
    .query(async () => {
      const result = await prisma.mentalHealth.findMany();
      return result;
    }),

  getOne: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const result = await prisma.mentalHealth.findUnique({
        where: { id: input.id },
      });
      return result ? result : {};
    }),
});

export type MentalHealthRouter = typeof mentalHealthRouter;

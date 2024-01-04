import { router, publicProcedure } from '../trpc';
import VocationTypes from '../types/VocationTypes';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const vocationRouter = router({
  addMany: publicProcedure
    .input( z.array(VocationTypes) )
    .mutation(async ({ input }) => {
      const result = await prisma.vocation.createMany({
        data: input
      });
      return result;
    }),

  addOne: publicProcedure
    .input(VocationTypes)
    .mutation(async ({ input }) => {
      const result = await prisma.vocation.create({
        data: input
      });
      return result;
    }),

  getAll: publicProcedure
    .query(async () => {
      const result = await prisma.vocation.findMany();
      return result;
    }),

  getOne: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const result = await prisma.vocation.findUnique({
        where: { id: input.id },
      });
      return result ? result : {};
    }),
});

export type VocationRouter = typeof vocationRouter;

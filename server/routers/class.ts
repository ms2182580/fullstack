import { router, publicProcedure } from '../trpc';
import ClassTypes from '../types/ClassTypes';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const classRouter = router({
  addMany: publicProcedure
    .input( z.array(ClassTypes) )
    .mutation(async ({ input }) => {
      const result = await prisma.class.createMany({
        data: input
      });
      return result;
    }),

  addOne: publicProcedure
    .input(ClassTypes)
    .mutation(async ({ input }) => {
      const result = await prisma.class.create({
        data: input
      });
      return result;
    }),

  getAll: publicProcedure
    .query(async () => {
      const result = await prisma.class.findMany();
      return result;
    }),

  getOne: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const result = await prisma.class.findUnique({
        where: { id: input.id },
      });
      return result ? result : {};
    }),
});

export type ClassRouter = typeof classRouter;

import { router, publicProcedure } from '../trpc';
import ClassTypes from '../types/ClassTypes';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const classRouter = router({
  addMany: publicProcedure
    .input( z.array(ClassTypes) )
    .mutation(async ({ input }) => {
      await prisma.class.deleteMany({});

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
    .input(z.object({ 
      limit: z.number().min(1).max(100).nullish(),
      cursor: z.string().nullish(),
      filter: z.record(z.any()).optional(),
    }))
    .query(async ({ input }) => {
      const limit = input.limit ?? 50;
      const { cursor, filter } = input ;
      const result = await prisma.class.findMany({
        take: limit,
        skip: cursor ? 1 : 0,
        cursor: cursor ? {id: cursor} : undefined,
        where: filter,
      });
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

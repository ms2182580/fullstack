import { router, publicProcedure } from '../trpc';
import LegalTypes from '../types/LegalTypes';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const legalRouter = router({
  addMany: publicProcedure
    .input( z.array(LegalTypes) )
    .mutation(async ({ input }) => {
      await prisma.legal.deleteMany({});

      const result = await prisma.legal.createMany({
        data: input
      });
      return result;
    }),

  addOne: publicProcedure
    .input(LegalTypes)
    .mutation(async ({ input }) => {
      const result = await prisma.legal.create({
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
      const result = await prisma.legal.findMany({
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
      const result = await prisma.legal.findUnique({
        where: { id: input.id },
      });
      return result ? result : {};
    }),
});

export type LegalRouter = typeof legalRouter;

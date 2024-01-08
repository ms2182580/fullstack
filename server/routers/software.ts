import { router, publicProcedure } from '../trpc';
import SoftwareTypes from '../types/SoftwareTypes';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const softwareRouter = router({
  addMany: publicProcedure
    .input( z.array(SoftwareTypes) )
    .mutation(async ({ input }) => {
      const result = await prisma.software.createMany({
        data: input
      });
      return result;
    }),

  addOne: publicProcedure
    .input(SoftwareTypes)
    .mutation(async ({ input }) => {
      const result = await prisma.software.create({
        data: input
      });
      return result;
    }),

    getAll: publicProcedure
    .input(z.object({ 
      limit: z.number().min(1).max(100).nullish(),
      cursor: z.string().nullish()
    }))
    .query(async ({ input }) => {
      const limit = input.limit ?? 50;
      const { cursor } = input ;
      const result = await prisma.software.findMany({
        take: limit,
        skip: 1,
        cursor: cursor ? {id: cursor} : undefined,
      });
      return result;
    }),

  getOne: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const result = await prisma.software.findUnique({
        where: { id: input.id },
      });
      return result ? result : {};
    }),
});

export type SoftwareRouter = typeof softwareRouter;

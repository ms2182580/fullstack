import { router, publicProcedure } from '../trpc';
import AgencyTypes from '../types/UserTypes';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const userRouter = router({
  addMany: publicProcedure
    .input( z.array(AgencyTypes) )
    .mutation(async ({ input }) => {
      const result = await prisma.user.createMany({
        data: input
      });
      return result;
    }),

  addOne: publicProcedure
    .input(AgencyTypes)
    .mutation(async ({ input }) => {
      const result = await prisma.user.create({
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
      const result = await prisma.user.findMany({
        take: limit,
        skip: 1,
        cursor: cursor ? {id: cursor} : undefined,
      });
      return result;
    }),

  getOne: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const result = await prisma.user.findUnique({
        where: { id: input.id },
      });
      return result ? result : {};
    }),
});

export type UserRouter = typeof userRouter;

import { router, publicProcedure } from '../trpc';
import BusinessTypes from '../types/BusinessTypes';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const businessRouter = router({
  // Procedure to add a new business
  addMany: publicProcedure
    .input( z.array(BusinessTypes) )
    .mutation(async ({ input }) => {
      const businesses = await prisma.business.createMany({
        data: input
      });
      return businesses;
    }),

  addOne: publicProcedure
    .input(BusinessTypes)
    .mutation(async ({ input }) => {
      const business = await prisma.business.create({
        data: input
      });
      return business;
    }),

  // Procedure to get all businesses
  getAll: publicProcedure
    .query(async () => {
      const businesses = await prisma.business.findMany();
      return businesses;
    }),

  // Procedure to get a business by ID
  getOne: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const business = await prisma.business.findUnique({
        where: { id: input.id },
      });
      return business ? business : {};
    }),
});

export const appRouter = router({
  business: businessRouter
})


export type AppRouter = typeof appRouter;

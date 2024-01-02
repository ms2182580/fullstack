import { router, publicProcedure } from '../trpc';
import AgencyTypes from '../types/AgencyTypes';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const agencyRouter = router({
  addMany: publicProcedure
    .input( z.array(AgencyTypes) )
    .mutation(async ({ input }) => {
      const result = await prisma.agency.createMany({
        data: input
      });
      return result;
    }),

  addOne: publicProcedure
    .input(AgencyTypes)
    .mutation(async ({ input }) => {
      const result = await prisma.agency.create({
        data: input
      });
      return result;
    }),

  getAll: publicProcedure
    .query(async () => {
      const result = await prisma.agency.findMany();
      return result;
    }),

  getOne: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const result = await prisma.agency.findUnique({
        where: { id: input.id },
      });
      return result ? result : {};
    }),
});

export type AgencyRouter = typeof agencyRouter;

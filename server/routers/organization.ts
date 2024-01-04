import { router, publicProcedure } from '../trpc';
import OrganizationTypes from '../types/OrganizationTypes';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const organizationRouter = router({
  addMany: publicProcedure
    .input( z.array(OrganizationTypes) )
    .mutation(async ({ input }) => {
      const result = await prisma.organization.createMany({
        data: input
      });
      return result;
    }),

  addOne: publicProcedure
    .input(OrganizationTypes)
    .mutation(async ({ input }) => {
      const result = await prisma.organization.create({
        data: input
      });
      return result;
    }),

  getAll: publicProcedure
    .query(async () => {
      const result = await prisma.organization.findMany();
      return result;
    }),

  getOne: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const result = await prisma.organization.findUnique({
        where: { id: input.id },
      });
      return result ? result : {};
    }),
});

export type OrganizationRouter = typeof organizationRouter;

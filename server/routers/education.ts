import { router, publicProcedure } from '../trpc';
import EducationTypes from '../types/EducationTypes';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const educationRouter = router({
  addMany: publicProcedure
    .input( z.array(EducationTypes) )
    .mutation(async ({ input }) => {
      const result = await prisma.education.createMany({
        data: input
      });
      return result;
    }),

  addOne: publicProcedure
    .input(EducationTypes)
    .mutation(async ({ input }) => {
      const result = await prisma.education.create({
        data: input
      });
      return result;
    }),

  getAll: publicProcedure
    .query(async () => {
      const result = await prisma.education.findMany();
      return result;
    }),

  getOne: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const result = await prisma.education.findUnique({
        where: { id: input.id },
      });
      return result ? result : {};
    }),
});

export type EducationRouter = typeof educationRouter;

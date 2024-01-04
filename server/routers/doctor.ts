import { router, publicProcedure } from '../trpc';
import DoctorTypes from '../types/DoctorTypes';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const doctorRouter = router({
  addMany: publicProcedure
    .input( z.array(DoctorTypes) )
    .mutation(async ({ input }) => {
      const result = await prisma.doctor.createMany({
        data: input
      });
      return result;
    }),

  addOne: publicProcedure
    .input(DoctorTypes)
    .mutation(async ({ input }) => {
      const result = await prisma.doctor.create({
        data: input
      });
      return result;
    }),

  getAll: publicProcedure
    .query(async () => {
      const result = await prisma.doctor.findMany();
      return result;
    }),

  getOne: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const result = await prisma.doctor.findUnique({
        where: { id: input.id },
      });
      return result ? result : {};
    }),
});

export type DoctorRouter = typeof doctorRouter;

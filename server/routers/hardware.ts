import { router, publicProcedure } from '../trpc';
import HardwareTypes from '../types/HardwareTypes';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const hardwareRouter = router({
  addMany: publicProcedure
    .input( z.array(HardwareTypes) )
    .mutation(async ({ input }) => {
      const result = await prisma.hardware.createMany({
        data: input
      });
      return result;
    }),

  addOne: publicProcedure
    .input(HardwareTypes)
    .mutation(async ({ input }) => {
      const result = await prisma.hardware.create({
        data: input
      });
      return result;
    }),

  getAll: publicProcedure
    .query(async () => {
      const result = await prisma.hardware.findMany();
      return result;
    }),

  getOne: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const result = await prisma.hardware.findUnique({
        where: { id: input.id },
      });
      return result ? result : {};
    }),
});

export type HardwareRouter = typeof hardwareRouter;

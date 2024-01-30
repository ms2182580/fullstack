import { PrismaClient } from "@prisma/client"
import { z } from "zod"
import { publicProcedure, router } from "../trpc"
import MentalHealthTypes from "../types/MentalHealthTypes"

const prisma = new PrismaClient()

export const mentalHealthRouter = router({
  addMany: publicProcedure
    .input(z.array(MentalHealthTypes))
    .mutation(async ({ input }) => {
      await prisma.mentalHealth.deleteMany({});

      const result = await prisma.mentalHealth.createMany({
        data: input,
      })
      return result
    }),

  addOne: publicProcedure
    .input(MentalHealthTypes)
    .mutation(async ({ input }) => {
      const result = await prisma.mentalHealth.create({
        data: input,
      })
      return result
    }),

  getAll: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.string().nullish(),
        filter: z.record(z.any()).optional(),
      })
    )
    .query(async ({ input }) => {
      const limit = input.limit ?? 50
      const { cursor, filter } = input ;
      const result = await prisma.mentalHealth.findMany({
        take: limit,
        skip: cursor ? 1 : 0,
        cursor: cursor ? {id: cursor} : undefined,
        where: filter,
      })
      return result
    }),

  getOne: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const result = await prisma.mentalHealth.findUnique({
        where: { id: input.id },
      })
      return result ? result : {}
    }),
})

export type MentalHealthRouter = typeof mentalHealthRouter

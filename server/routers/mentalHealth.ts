import { PrismaClient } from "@prisma/client"
import { z } from "zod"
import { publicProcedure, router } from "../trpc"
import MentalHealthTypes from "../types/MentalHealthTypes"

const prisma = new PrismaClient()

export const mentalHealthRouter = router({
  addMany: publicProcedure
    .input(z.array(MentalHealthTypes))
    .mutation(async ({ input }) => {
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
      })
    )
    .query(async ({ input }) => {
      const limit = input.limit ?? 50
      const { cursor } = input
      const result = await prisma.mentalHealth.findMany({
        take: limit,
        skip: 1,
        cursor: cursor ? { id: cursor } : undefined,
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

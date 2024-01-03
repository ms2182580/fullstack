import { PrismaClient } from "@prisma/client"
import { z } from "zod"
import { publicProcedure, router } from "../trpc"
import CampTypes from "../types/CampTypes"

const prisma = new PrismaClient()

export const campRouter = router({
  addMany: publicProcedure
    .input(z.array(CampTypes))
    .mutation(async ({ input }) => {
      const result = await prisma.camp.createMany({
        data: input,
      })
      return result
    }),

  addOne: publicProcedure.input(CampTypes).mutation(async ({ input }) => {
    const result = await prisma.camp.create({
      data: input,
    })
    return result
  }),

  getAll: publicProcedure.query(async () => {
    const result = await prisma.camp.findMany()
    return result
  }),

  getOne: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const result = await prisma.camp.findUnique({
        where: { id: input.id },
      })
      return result ? result : {}
    }),
})

export type CampRouter = typeof campRouter

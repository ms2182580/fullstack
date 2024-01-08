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

  getAll: publicProcedure
    .input(z.object({ 
      limit: z.number().min(1).max(100).nullish(),
      cursor: z.string().nullish()
    }))
    .query(async ({ input }) => {
      const limit = input.limit ?? 50;
      const { cursor } = input ;
      const result = await prisma.camp.findMany({
        take: limit,
        skip: 1,
        cursor: cursor ? {id: cursor} : undefined,
      });
      return result;
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

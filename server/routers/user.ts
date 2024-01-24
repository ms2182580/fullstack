import { PrismaClient } from "@prisma/client"
import { z } from "zod"
import { publicProcedure, router } from "../trpc"
import AgencyTypes from "../types/UserTypes"

const prisma: any = new PrismaClient()

export const userRouter = router({
  addMany: publicProcedure
    .input(z.array(AgencyTypes))
    .mutation(async ({ input }) => {
      const result = await prisma.user.createMany({
        data: input,
      })
      return result
    }),

  addOne: publicProcedure.input(AgencyTypes).mutation(async ({ input }) => {
    const result = await prisma.user.create({
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
      const result = await prisma.user.findMany({
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
      const result = await prisma.user.findUnique({
        where: { id: input.id },
      })
      return result ? result : {}
    }),
})

export type UserRouter = typeof userRouter

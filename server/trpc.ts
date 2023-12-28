import { initTRPC } from '@trpc/server';
import dotenv from 'dotenv';

dotenv.config();

const t = initTRPC.create()
export const router = t.router;
export const publicProcedure = t.procedure;
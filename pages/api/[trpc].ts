import express from "express"
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from '../../server/routers/index';
import csvToJson from "./middleware/csvToJson";

const app =  express();

app.use(express.text()); 
app.use(csvToJson);

app.use('/api', trpcExpress.createExpressMiddleware({
    router: appRouter,
    onError({ error }) {
        console.error('Error in tRPC procedure:', error);
      },
}));

export default app
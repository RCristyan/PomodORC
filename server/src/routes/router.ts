import { Router } from 'express';
import listRouter from './list.routes'

const router = Router();

router.use("/api", listRouter);

export default router;
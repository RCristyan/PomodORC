import { Request, Response, Router } from 'express';
import listServer from '../services/list.server';

const router = Router();

router.post('/create', listServer.createList);
router.get('/read', listServer.readList);

export default router;
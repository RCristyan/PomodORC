import { Router } from 'express';
import listServer from '../services/list.server';
import activitieServer from '../services/activities.server';

const router = Router();

router.post('/create', listServer.createList);
router.get('/read', listServer.readList);
router.get('/readone/:id/', listServer.readOneList);
router.delete('/delete/:id/', listServer.deleteList);
router.put('/update/:id', listServer.updateList);

router.post('/create/:id/', activitieServer.createActivity);
router.get('/readact/:id/', activitieServer.readActivity);
router.delete('/deleteact/:id/', activitieServer.deleteActivity);
router.put('/updateact/:id/', activitieServer.updateActivity);
router.put('/updatestatus/:id/', activitieServer.updateStatus);

export default router;
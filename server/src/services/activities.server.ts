import { Request, Response } from 'express';
import { List } from '../schema/list';
import { Activities } from '../schema/activities';

export default {

  async createActivity(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;
    const { id } = req.params;
    try {
      const newActivity = await Activities.create({
        name,
      });

      await List.findByIdAndUpdate(id, { $push: { activities: newActivity._id } });

      return res.status(201).json(newActivity);

    } catch (err) {
      return res.status(400).json({ err });
    }
  },

  async readActivity(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const allActivities = (await List.findById(id)).activities;

      return res.status(201).json(allActivities);

    } catch (err) {
      return res.status(400).json({ err });
    }
  },

  async readActivityName(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const ActivityName = (await Activities.findById(id)).name;

      return res.status(201).json(ActivityName);

    } catch (err) {
      return res.status(400).json({ err });
    }
  },
  
  

  async updateActivity(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const updateActivity = await Activities.findByIdAndUpdate(id, { name }, { new: true });
      return res.status(201).json(updateActivity);

    } catch (err) {
      return res.status(400).json({ err });
    }
  },

  async updateStatus(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {

      const changeStatus = await Activities.findById(id);

      changeStatus.status = !changeStatus.status;

      const updateStatus = await Activities.findByIdAndUpdate(id, { status: changeStatus.status }, { new: true });
      return res.status(201).json(updateStatus);

    } catch (err) {
      return res.status(400).json({ err });
    }
  },

  async deleteActivity(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      await Activities.findByIdAndDelete(id);
      return res.status(201).json({ message: "Atividade excluída com sucesso!" });

    } catch (err) {
      return res.status(400).json({ err });
    }
  },

}
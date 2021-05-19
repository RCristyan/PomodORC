import { Request, Response } from 'express';
import { List } from '../schema/list';
import { Activities } from '../schema/activities';

export default {
  async createList(req: Request, res: Response): Promise<Response> {
    const { title, body } = req.body;

    try {
      const newList = await List.create({
        title,
        body,
      });

      return res.status(201).json(newList);

    } catch (err) {
      return res.status(400).json({ message: "Error in create List" });
    }

  },
  async readList(req: Request, res: Response): Promise<Response> {
    try {
      const lists = await List.find().populate("activities").exec();
      return res.status(201).json(lists);
    } catch (err) {
      return res.status(400).json({ message: "Error in find List" });
    }
  },

  async readOneList(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const lists = await List.findById(id).populate("activities").exec();
      return res.status(201).json(lists);
    } catch (err) {
      return res.status(400).json({ message: "Error in find List" });
    }
  },

  async deleteList(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {

      const list = await List.findById(id);

      await Promise.all(

        list.activities.map(
          async (activity) => { await Activities.findByIdAndRemove(activity) })
      );

      await List.findByIdAndDelete(id);

      return res.status(201).json({ message: "List deleted" });

    } catch (err) {
      return res.status(400).json({ message: "Error in delete List" });
    }
  },

  async updateList(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { title, body } = req.body;

    try {

      const updateList = await List.findByIdAndUpdate(id, {
        title,
        body,
      }, { new: true }).populate("activities").exec();

      return res.status(201).json(updateList);

    } catch (err) {
      return res.status(400).json({ message: "Error in update List" });
    }
  }


}
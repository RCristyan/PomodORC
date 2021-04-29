import { Request, Response } from 'express';
import { List } from '../schema/list';

export default {
  async createList(req: Request, res: Response): Promise<Response> {
    const { title, body } = req.body;

    try {
      const newList = await List.create({
        title,
        body
      });

      return res.status(201).json(newList);

    } catch (err) {
      return res.status(400).json({ message: "Error in create List" });
    }

  },
  async readList(req: Request, res: Response): Promise<Response> {
    try {
      const lists = await List.find();
      return res.status(201).json(lists);
    } catch (err) {
      return res.status(400).json({ message: "Error in find List" });
    }
  }

}
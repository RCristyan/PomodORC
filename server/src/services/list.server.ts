import { Request, Response } from 'express';
import { List } from '../schema/list';

export default {
  async createList(req: Request, res: Response): Promise<Response> {
    const { title, body, activities } = req.body;

    try {
      const newList = await List.create({
        title,
        body,
        activities,
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
  },
  async deleteList(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;
    try {
      const deleteList = await List.findOneAndDelete({ id });
      return res.status(201).json(deleteList);

    } catch (err) {
      return res.status(400).json({ message: "Error in delete List" });
    }
  },
  async updateList(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;
    const { title, body, activities } = req.body;
    try {
      const updateList = await List.findOneAndUpdate({ 
        title,
        body,
        activities,
       },{where: { id }});
    } 
  }


}
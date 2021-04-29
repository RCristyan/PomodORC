import { Document, Schema, model } from 'mongoose';

interface IList extends Document {
  title: string,
  body: string,
}

const ListSchema = new Schema<IList>({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  body: {
    type: String
  }
});

export const List = model<IList>("List", ListSchema);
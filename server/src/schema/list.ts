import { Document, Schema, model } from 'mongoose';
interface IList extends Document {
  title: string,
  body: string,
  activities: [{
    name: string,
    number: number,
    status: boolean,
  }]
}

const ListSchema = new Schema<IList>({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  body: {
    type: String
  },
  activities: [{
    name: { type: String },
    number: { type: Number, required: true },
    status: { type: Boolean }
  }]
});

export const List = model<IList>("List", ListSchema);
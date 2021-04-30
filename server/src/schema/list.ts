import { Document, Schema, model } from 'mongoose';
interface IList extends Document {
  title: string,
  body: string,
  activities: [{
    name: string,
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
  }]
});

export const List = model<IList>("List", ListSchema);
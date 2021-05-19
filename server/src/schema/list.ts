import { Document, Schema, model } from 'mongoose';
interface IList extends Document {
  title: string,
  body: string,
  activities: string[],
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
    type: Schema.Types.ObjectId,
    ref: 'Activities'
  }]
});

export const List = model<IList>("List", ListSchema);
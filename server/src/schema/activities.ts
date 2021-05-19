import { Document, Schema, model } from 'mongoose';
interface IActivities extends Document {
  name: string,
  status: boolean,
}

const ActivitiesSchema = new Schema<IActivities>({
  name: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: false,
  },
});

export const Activities = model<IActivities>("Activities", ActivitiesSchema);
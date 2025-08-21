import mongoose, { Document, model, Schema } from "mongoose";

export interface PushSubscription extends Document {
    sub: object,
    id: string
};

const PushSubscriptionSchema = new Schema<PushSubscription>(
    {
        sub: Object,
        id: String
    }
);

export default mongoose.models.PushSubscription || model<PushSubscription>("PushSubscription", PushSubscriptionSchema);
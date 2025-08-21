import PushSubscription from "@/app/models/PushSubscription";
import dbConnect from "@/lib/dbConnect";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const { sub, id } = await req.json();

    // Connect mongoose database
    await dbConnect();

    // Update subscription if it already exists in the database.
    // Otherwise, create a new entry.
    try {
        await PushSubscription.findOneAndUpdate({ id }, { sub, id }, { upsert: true });
    }
    catch (err) {
        return new Response("Error subscribing user to push notifications", { status: 500 });
    }

    return new Response("ok", { status: 200 });
}
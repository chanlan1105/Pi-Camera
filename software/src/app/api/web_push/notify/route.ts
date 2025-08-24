import PushSubscription from "@/app/models/PushSubscription";
import dbConnect from "@/lib/dbConnect";
import { NextRequest } from "next/server";
import webpush from "web-push";
import "dotenv/config";
import { applicationServerPrivateKey, applicationServerPublicKey } from "../vapidKeys";

export async function POST(req: NextRequest) {
    const { id }: { id: string } = await req.json();

    // Connect mongoose database
    await dbConnect();

    // Fetch subscription from database
    const sub = await PushSubscription.findOne({ id });

    if (!sub) {
        return new Response("Could not find push subscription payload for this user", { status: 400 });
    }

    webpush.sendNotification(sub.sub, "Test notification!", { 
        vapidDetails: {
            subject: "https://npmjs.com",
            publicKey: applicationServerPublicKey,
            privateKey: applicationServerPrivateKey
        }
    });

    return new Response(null, { status: 200 });
}
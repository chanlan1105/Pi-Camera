import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    console.log(req.body);

    return new Response("ok", { status: 200 });
}
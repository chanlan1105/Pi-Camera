import mongoose from "mongoose";
import "dotenv/config";
import chalk from "chalk";

export default async function dbConnect() {
    const MONGO_URI: string = process.env.MONGO_URI ?? (() => {
        throw new Error("MONGO_URI is not defined in environment variables.");
    })();

    if (mongoose.connection.readyState !== 0) {
        // Database already connected, don't attempt to reconnect.
        return;
    }

    // Otherwise, connect to database cluster
    try {
        await mongoose.connect(MONGO_URI, { dbName: "pi_camera" });
        console.log(chalk.greenBright("Database connected!"));
    }
    catch (err) {
        console.error(chalk.red("Database error: "), err);
    }
}
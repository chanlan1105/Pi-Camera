import "dotenv/config";

/** Push notification VAPID public key */
export const applicationServerPublicKey: string = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY ?? (() => {
    throw new Error("NEXT_PUBLIC_VAPID_PUBLIC_KEY is not defined in environment variables. Please run @/app/api/web_push/generateVapidKeys.js and add to the .env file.");
})();

/** Push notification VAPID private key (DO NOT EXPOSE) */
export const applicationServerPrivateKey: string = process.env.NEXT_PUBLIC_VAPID_PRIVATE_KEY ?? (() => {
    throw new Error("VAPID_PRIVATE_KEY is not defined in environment variables. Please run @/app/api/web_push/generateVapidKeys.js and add to the .env file.");
})();
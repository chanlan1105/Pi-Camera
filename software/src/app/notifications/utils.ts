import { Dispatch, SetStateAction, useEffect } from "react";
import swRegistration from "./init";
import "dotenv/config";

/** Push notification VAPID public key */
const applicationServerPublicKey: string = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY ?? (() => {
    throw new Error("NEXT_PUBLIC_VAPID_PUBLIC_KEY is not defined in environment variables. Please run @/app/api/web_push/generateVapidKeys.js and add to the .env file.");
})();

export function urlB64ToUint8Array(base64String: Base64URLString) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

/** Attempts to subscribe the user to push notifications. */
export function subscribeUser(setIsSubscribed: Dispatch<SetStateAction<any>>, setNotificationsAllowed: Dispatch<SetStateAction<any>>, id: string) {
    const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);

    if ('serviceWorker' in navigator && swRegistration instanceof ServiceWorkerRegistration) {
        swRegistration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey
        }).then(async (subscription: PushSubscription) => {
            console.log("Push notifications registered to service worker.");

            // Update subscription on server
            await fetch("/api/web_push/subscribe", {
                method: "POST",
                body: JSON.stringify({
                    subscription,
                    id
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            setIsSubscribed(true);
        }).catch(err => {
            console.log("Failed to subscribe the user.", err);
            
            setNotificationsAllowed(({
                "default": null,
                "granted": true,
                "denied": false
            })[Notification.permission]);

            setIsSubscribed(false);
        });
    }
    else {
        return console.error("Service worker is not registered.");
    }
}
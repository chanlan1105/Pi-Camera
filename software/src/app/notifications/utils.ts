import { Dispatch, SetStateAction, useEffect } from "react";
import swRegistration from "./init";
import "dotenv/config";
import { NotificationStatusTypes } from "./enum";
import { applicationServerPublicKey } from "../api/web_push/vapidKeys";

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
export function subscribeUser(setIsSubscribed: Dispatch<SetStateAction<any>>, setNotificationStatus: Dispatch<SetStateAction<any>>, id: string) {
    // Prevent the user from clicking the subscribe button twice
    setNotificationStatus(NotificationStatusTypes.Processing);

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
                    sub: subscription,
                    id
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            setNotificationStatus(Notification.permission);
            setIsSubscribed(true);
        }).catch(err => {
            console.log("Failed to subscribe the user.", err);
            
            setNotificationStatus(Notification.permission);
            setIsSubscribed(false);
        });
    }
    else {
        return console.error("Service worker is not registered.");
    }
}

export function sendTestNotification(setTestNotificationStatus: Dispatch<SetStateAction<any>>, id: string) {
    setTestNotificationStatus("processing");

    fetch("/api/web_push/notify", {
        method: "POST",
        body: JSON.stringify({
            id
        })
    }).then(async res => {
        setTestNotificationStatus("idle");
    }).catch(err => {
        alert("There was an error sending a push notification.");
        console.error(err);
    });
}
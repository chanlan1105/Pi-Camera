"use client";

import SideMenu from "@/components/SideMenu";
import { Button } from "flowbite-react";
import { useCallback } from "react";
import init from "./init";
import SubscribedOptions from "./subscribed_options";

export default function() {
    let swRegistration = null;
    let isSubscribed: boolean | null = null;

    useCallback(async () => {
        console.log("yappa yappa");
        const swRegistration = await init();
        if ('serviceWorker' in navigator && swRegistration instanceof ServiceWorkerRegistration) {
            const subscription = await swRegistration.pushManager.getSubscription();
            isSubscribed = subscription !== null;
        }
    }, []);

    return <main className="flex">
        <SideMenu activePage="notifications"></SideMenu>

        <div className="px-10 py-5">
            <h2 className="text-gray-800 text-2xl font-bold mb-3">Notification Preferences</h2>

            {
                typeof swRegistration == "string" && ["error", "unsupported"].includes(swRegistration) ?
                    <p>Your browser does not support push notifications.</p> :
                    isSubscribed ? <></> : <>
                        <p className="mb-2">Push notifications are not enabled.</p>
                        <Button size="sm" className="cursor-pointer">Enable Push Notifications</Button>
                    </>
            }

            {
                isSubscribed ? <SubscribedOptions></SubscribedOptions> : <></>
            }
        </div>
    </main>;
}
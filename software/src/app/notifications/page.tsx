"use client";

import SideMenu from "@/components/SideMenu";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import swRegistration from "./init";
import SubscribedOptions from "./SubscribedOptions";
import { subscribeUser } from "./utils";
import getUUID from "@/lib/uuid";
import { NotificationStatusTypes } from "./enum";

export default function() {
    const [isSubscribed, setIsSubscribed] = useState<boolean | string>(false);
    const [uuid, setUuid] = useState<string>("");
    const [notificationStatus, setNotificationStatus] = useState<NotificationStatusTypes>(NotificationStatusTypes.Default);

    // Get UUID from localStorage
    useEffect(() => {
        setUuid(getUUID());
    }, []);

    useEffect(() => {
        (async () => {
            // Determine if service worker is subscribed to push notifications
            if ('serviceWorker' in navigator && swRegistration instanceof ServiceWorkerRegistration) {
                const subscription = await swRegistration.pushManager.getSubscription();
                setIsSubscribed(subscription !== null);
            }
            else {
                setIsSubscribed("unsupported");
            }
        })();
    }, []);

    useEffect(() => {
        // Determine if user has allowed push notifications on this browser
        setNotificationStatus(Notification.permission as NotificationStatusTypes);
    }, []);

    return <main className="flex">
        <SideMenu activePage="notifications"></SideMenu>

        <div className="px-10 py-5">
            <h2 className="text-gray-800 text-2xl font-bold mb-3">Notification Preferences</h2>

            {
                isSubscribed == "unsupported" ? 
                    <p>Your browser does not support push notifications.</p> :
                isSubscribed === true ?
                    null :
                    <>
                        <p className="mb-2">Push notifications are not enabled.</p>
                        <Button
                            size="sm"
                            className={"select-none " + uuid && notificationStatus !== NotificationStatusTypes.Denied ? "cursor-pointer" : "cursor-not-allowed"}
                            disabled={!uuid || notificationStatus === NotificationStatusTypes.Denied || notificationStatus === NotificationStatusTypes.Processing}
                            onClick={() => 
                                subscribeUser(setIsSubscribed, setNotificationStatus, uuid)
                            }
                        >
                            {
                                notificationStatus === NotificationStatusTypes.Denied ?
                                    "Push Notifications Blocked" :
                                notificationStatus === NotificationStatusTypes.Processing ? 
                                    <>Processing&hellip;</> :
                                    "Enable Push Notifications"
                            }
                        </Button>
                    </>
            }

            {
                isSubscribed ? <SubscribedOptions></SubscribedOptions> : <></>
            }
        </div>
    </main>;
}
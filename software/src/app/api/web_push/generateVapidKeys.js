import webPush from "web-push";

const vapidKeys = webPush.generateVAPIDKeys();
console.log(`VAPID_PUBLIC_KEY=${vapidKeys.publicKey}\nVAPID_PRIVATE_KEY=${vapidKeys.privateKey}`);
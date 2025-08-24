self.addEventListener("push", event => {
    console.log("[Service Worker] Push received.");
    console.log("[Service Worker] Push had data: ", event.data.text());

    // Send push notification
    /** @TODO Save metadata to identify spotted object */
    event.waitUntil(
        self.registration.showNotification("Pi_Camera", {
            body: event.data.text()
        })
    )
});

self.addEventListener("notificationClick", event => {
    console.log("[Service Worker] Notification clicked.");

    event.notification.close();

    /** @TODO Open Pi_Camera webpage, focused on spotted object based on metadata */
});
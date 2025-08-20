async function init(): Promise<null | ServiceWorkerRegistration | "error" | "unsupported"> {
    let swRegistration: null | ServiceWorkerRegistration = null;

    if ('serviceWorker' in navigator && 'PushManager' in window) {
        console.log('Service Worker and Push are supported');

        try {
            swRegistration = await navigator.serviceWorker.register('sw.js');
            console.log("Service Worker is registered", swRegistration);
        }
        catch (err) {
            console.error('Service Worker Error', err);
            return "error";
        }
    } else {
        console.warn('Push messaging is not supported');
        return "unsupported";
    }

    return swRegistration;
}

const swRegistration = await init();
export default swRegistration;
/** `enum` representing the state of push notifications */
export enum NotificationStatusTypes {
    /** Must prompt the user for permission */
    Default = "default",
    /** Permission explicitly granted by user */
    Granted = "granted",
    /** Permission explicitly denied by user */
    Denied = "denied",
    /** Sending subscription payload to server */
    Processing = "processing"
}
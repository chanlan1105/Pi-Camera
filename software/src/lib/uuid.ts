import { v4 as uuidv4 } from "uuid";

/**
 * This function must be called from within a `useEffect()` hook.
 * @returns id The unique identifier representing this client instance.
 */
export default function getUUID() {
    /** The unique identifier representing this client instance */
    const id = localStorage.getItem("uuidv4") ?? uuidv4();

    if (localStorage.getItem("uuidv4") == null) {
        // Could not find a saved uuidv4. Generate a new one and save it to localStorage.
        localStorage.setItem("uuidv4", id);
    }

    return id;
}

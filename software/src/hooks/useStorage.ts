import { useEffect, useState } from "react";

export default function useStorage<T>(key: string, initialValue: T) {
    // Create state variables to store the value of the localStorage item
    const [value, setValue] = useState<T>(() => {
        // Initialize the value variable to the value in localStorage,
        // if it exists. Otherwise use initialValue
        const item = localStorage.getItem(key);
        return item === null ? initialValue : JSON.parse(item);
    });
    
    // When `value` changes, update the localStorage.
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}
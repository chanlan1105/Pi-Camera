export const OBJECT_TYPES = ["People", "Couriers", "Vehicles"] as const;
export type ObjectType = typeof OBJECT_TYPES[number];
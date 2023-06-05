import { Exercise } from "./exercise";

export interface Routine {
    id?: number,
    "name": string,
    "routineType": string,
    "duration": number,
    "exercises": Exercise[],
    "equipment": string
}

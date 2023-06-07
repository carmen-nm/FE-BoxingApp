import { Routine } from "./routine";

export interface User {
    id?: number,
    "username": string,
    "password": string,
    "routines": Routine[]
}



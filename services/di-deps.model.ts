import { ErrorService } from "./error.service.ts";

export enum DepsKeys {
    // controllers
    // services
    ErrorService=999
}

export const DepsAsArray = [
    // controllers
    // services
    {key: DepsKeys.ErrorService, controller: ErrorService},
]
export interface Deps {
    // controllers
    // services
    [DepsKeys.ErrorService]: ErrorService;
}
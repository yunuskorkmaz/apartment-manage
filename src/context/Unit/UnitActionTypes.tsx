import { ActionType } from "../GenericTypes";


export const UNIT_FETCH_ALL = "UNIT_FETCH_ALL";
export const ADDED_UNIT = "ADDED_UNIT";
export const HANDLE_ERROR_UNIT = "HANDLE_ERROR_UNIT";
export const DELETED_UNIT = "DELETED_UNIT";
export const START_UNIT_FETCHING = "START_UNIT_FETCHING";
export const END_UNIT_FETCHING = "END_UNIT_FETCHING";
export const OPEN_UNIT_ADD_MODEL = "OPEN_UNIT_ADD_MODEL";
export const CLOSE_UNIT_ADD_MODEL = "CLOSE_UNIT_ADD_MODEL";


export type FetchAll = ActionType<typeof UNIT_FETCH_ALL,any>
export type Added = ActionType<typeof ADDED_UNIT, any>
export type HandleError = ActionType<typeof HANDLE_ERROR_UNIT, any>
export type Deleted = ActionType<typeof DELETED_UNIT, any>
export type StartFetching = ActionType<typeof START_UNIT_FETCHING, any>
export type EndFetching = ActionType<typeof END_UNIT_FETCHING, any>
export type OpenAddModal = ActionType<typeof OPEN_UNIT_ADD_MODEL, any>
export type CloseAddModal = ActionType<typeof CLOSE_UNIT_ADD_MODEL, any>


export type UnitDispatches = FetchAll 
                            | Added 
                            | HandleError
                            | Deleted
                            | StartFetching
                            | EndFetching
                            | OpenAddModal
                            | CloseAddModal;
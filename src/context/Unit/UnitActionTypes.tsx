import { ActionType } from "../GenericTypes";
import { Unit } from "./UnitStore";


export const UNIT_FETCH_ALL = "UNIT_FETCH_ALL";
export const ADDED_UNIT = "ADDED_UNIT";
export const HANDLE_ERROR_UNIT = "HANDLE_ERROR_UNIT";
export const DELETED_UNIT = "DELETED_UNIT";
export const START_UNIT_FETCHING = "START_UNIT_FETCHING";
export const END_UNIT_FETCHING = "END_UNIT_FETCHING";
export const OPEN_UNIT_MODEL = "OPEN_UNIT_MODEL";
export const CLOSE_UNIT_MODEL = "CLOSE_UNIT_MODEL";
export const EDITED_UNIT = "EDITED_UNIT";


export type FetchAll = ActionType<typeof UNIT_FETCH_ALL,any>
export type Added = ActionType<typeof ADDED_UNIT, Unit>
export type HandleError = ActionType<typeof HANDLE_ERROR_UNIT, any>
export type Deleted = ActionType<typeof DELETED_UNIT, number>
export type StartFetching = ActionType<typeof START_UNIT_FETCHING, any>
export type EndFetching = ActionType<typeof END_UNIT_FETCHING, any>
export type OpenModal = ActionType<typeof OPEN_UNIT_MODEL, any>
export type CloseModal = ActionType<typeof CLOSE_UNIT_MODEL, any>
export type Edited = ActionType<typeof EDITED_UNIT,Unit>


export type UnitDispatches = FetchAll 
                            | Edited
                            | Added 
                            | HandleError
                            | Deleted
                            | StartFetching
                            | EndFetching
                            | OpenModal
                            | CloseModal;
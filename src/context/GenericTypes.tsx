
export interface ActionType<T, S>  {
    type: T,
    payload?: S
}

export type ReducerType<T, S> = {
    (state: T, action: S): T
}
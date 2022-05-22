import React, { Reducer, Dispatch as _Dispatch } from 'react';

export type Action = { type: string; payload?: any };

export type Dispatch = _Dispatch<Action>

type BoundActions<ActionMap> = {
    [K in keyof ActionMap]: ActionMap[K] extends ((dispatch: Dispatch) => infer A) ? A : never
}

export type AppContext<State, ActionMap> = {
    state: State;
    actions: BoundActions<ActionMap>;
}

export type FullContext<State, ActionMap> = {
    Context: React.Context<AppContext<State, ActionMap>>;
    Provider: React.FC; // Provider does not take any props -- just children
}


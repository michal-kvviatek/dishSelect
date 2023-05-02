import {State} from "../types/types";

export const initialState: State = {
    spicinessScale: 1,
    numSandwichSlices: 1,
    numPizzaSlices: 1,
    pizzaDiameter: 15,
};

export type Action =
    | { type: 'SET_SPICINESS_SCALE', payload: number }
    | { type: 'SET_NUM_SLICES', payload: number }
    | { type: 'SET_NUM_PIZZA_SLICES', payload: number }
    | { type: 'SET_PIZZA_DIAMETER', payload: number };

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'SET_SPICINESS_SCALE':
            return { ...state, spicinessScale: action.payload };
        case 'SET_NUM_SLICES':
            return { ...state, numSandwichSlices: action.payload };
        case 'SET_NUM_PIZZA_SLICES':
            return { ...state, numPizzaSlices: action.payload };
        case 'SET_PIZZA_DIAMETER':
            return { ...state, pizzaDiameter: action.payload };
        default:
            return state;
    }
};

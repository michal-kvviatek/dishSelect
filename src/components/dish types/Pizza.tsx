import React, { useReducer } from 'react';
import { Field } from 'redux-form';
import Wrapper from '../common/Wrapper';
import Slider from '../common/Slider';
import { initialState, reducer } from '../../redux/reducer';
import Label from "../common/Label";

const Pizza = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleSlicesNumChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch({ type: 'SET_NUM_PIZZA_SLICES', payload: Number(e.target.value) });
    const handleDiameterChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch({ type: 'SET_PIZZA_DIAMETER', payload: Number(e.target.value) });

    return (
        <Wrapper title="pizza">
            <Label htmlFor="no_of_slices" title={`Number of slices ${state.numPizzaSlices}`} />
            <Field
                name="no_of_slices"
                component={Slider}
                step="1"
                min="1"
                max="6"
                onChange={handleSlicesNumChange}
                value={state.numPizzaSlices}
                required
            />
            <Label htmlFor="diameter" title={`Pizza size (5-50). Your choice: ${state.pizzaDiameter}`} />
            <Field
                name="diameter"
                component={Slider}
                step="5"
                min="15"
                max="50"
                value={state.pizzaDiameter}
                onChange={handleDiameterChange}
                required
            />
        </Wrapper>
    );
};

export default Pizza;

import React, { useReducer, ChangeEvent } from 'react';
import { Field } from 'redux-form';
import Wrapper from '../common/Wrapper';
import Slider from '../common/Slider';
import { initialState, reducer } from '../../redux/reducer';
import Label from "../common/Label";

const Sandwich = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleSlicesChange = (e: ChangeEvent<HTMLInputElement>) =>
        dispatch({ type: 'SET_NUM_SLICES', payload: Number(e.target.value) });
    return (
        <Wrapper title="sandwich">
            <Label htmlFor="slices_of_bread" title={`Number of slices of bread ${state.numSandwichSlices}`} />
            <Field
                name="slices_of_bread"
                component={Slider}
                min="1"
                max="10"
                onChange={handleSlicesChange}
                value={state.numSandwichSlices}
                required
            />
        </Wrapper>
    );
};

export default Sandwich;

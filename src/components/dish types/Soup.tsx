import React, { useReducer, ChangeEvent } from 'react';
import { initialState, reducer } from '../../redux/reducer';
import { Field } from 'redux-form';

import Label from "../common/Label";
import Slider from '../common/Slider';
import Wrapper from '../common/Wrapper';

const Soup = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleSpicinessScaleChange = (e: ChangeEvent<HTMLInputElement>) =>
        dispatch({ type: 'SET_SPICINESS_SCALE', payload: Number(e.target.value) })

    return (
        <Wrapper title="soup">
            <Label htmlFor="spiciness_scale" title={`Spiciness scale ${state.spicinessScale}`} />
            <Field
                name="spiciness_scale"
                component={Slider}
                min="1"
                max="10"
                onChange={handleSpicinessScaleChange}
                value={state.spicinessScale}
                required
            />
        </Wrapper>
    );
};

export default Soup;
